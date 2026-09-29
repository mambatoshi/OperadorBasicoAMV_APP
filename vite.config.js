import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

// Genera sw.js con la lista exacta de archivos del build para que la app
// funcione sin conexión una vez instalada en el iPhone.
function serviceWorker() {
  return {
    name: 'service-worker',
    apply: 'build',
    generateBundle(_, bundle) {
      const files = ['./', ...readdirSync('public'), ...Object.keys(bundle)]
        .filter(f => !f.endsWith('.map'))
        .map(f => (f === './' ? f : './' + f));
      const version = createHash('sha1').update(files.join('|')).digest('hex').slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'sw.js',
        source: `// Generado en el build.
const CACHE = 'amv-${version}';
const FILES = ${JSON.stringify(files)};
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
`,
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [serviceWorker()],
  build: { target: 'es2022', assetsInlineLimit: 0 },
});
