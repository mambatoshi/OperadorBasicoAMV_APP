// Navegación por hash. main.js escucha 'hashchange' y pinta la vista.
export function go(hash, { replace = false } = {}) {
  if (replace) history.replaceState(null, '', hash);
  if (replace || location.hash === hash) window.dispatchEvent(new HashChangeEvent('hashchange'));
  else location.hash = hash;
}

// Handlers de teclado que se retiran solos al cambiar de vista.
export function onKeys(handler) {
  const fn = e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    handler(e);
  };
  document.addEventListener('keydown', fn);
  return () => document.removeEventListener('keydown', fn);
}
