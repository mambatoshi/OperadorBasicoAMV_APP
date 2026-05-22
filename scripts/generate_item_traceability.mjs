import { writeFile } from 'node:fs/promises';
import { questions, flashcards } from '../src/data/questions.js';

const textFor = (item) => [
  item.q,
  item.exp,
  item.front,
  item.back,
  ...(Array.isArray(item.opts) ? item.opts : [])
].filter(Boolean).join(' ');

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function baseTrace(item) {
  const text = normalize(textFor(item));
  const cat = item.cat;

  if (cat === 'renta_fija') return traceRentaFija(text);
  if (cat === 'renta_variable') return traceRentaVariable(text);
  if (cat === 'derivados') return traceDerivados(text);
  if (cat === 'divisas') return traceDivisas(text);
  return traceOperadorBasico(cat, text);
}

function traceOperadorBasico(cat, text) {
  if (cat === 'autorregulacion') {
    if (includesAny(text, ['tribunal', 'sancion', 'disciplin', 'investigacion'])) {
      return mapped('operador_basico', 'guia_autorregulacion', 'ob-aut-disciplina', 'high', 'autorregulacion disciplinary keyword');
    }
    if (includesAny(text, ['certificacion', 'vigencia', 'profesional'])) {
      return mapped('operador_basico', 'guia_autorregulacion', 'ob-aut-certificacion', 'high', 'autorregulacion certification keyword');
    }
    return mapped('operador_basico', 'guia_autorregulacion', 'ob-aut-amv', 'medium', 'autorregulacion category fallback');
  }

  if (cat === 'regulacion') {
    if (includesAny(text, ['sarlaft', 'lavado', 'uif', 'uiaf', 'terrorismo'])) {
      return mapped('operador_basico', 'guia_regulacion', 'ob-reg-sarlaft', 'high', 'regulation SARLAFT keyword');
    }
    if (includesAny(text, ['defensor', 'consumidor', 'queja', 'cliente'])) {
      return mapped('operador_basico', 'guia_regulacion', 'ob-reg-consumidor', 'high', 'consumer protection keyword');
    }
    if (includesAny(text, ['repo', 'simultanea', 'ttv', 'cuenta de margen', 'spot', 'contado', 'compensacion', 'liquidacion'])) {
      return mapped('operador_basico', 'guia_regulacion', 'ob-reg-operaciones', 'medium', 'market operation keyword');
    }
    return mapped('operador_basico', 'guia_regulacion', 'ob-reg-ley964', 'medium', 'regulacion category fallback');
  }

  if (cat === 'etica') {
    if (includesAny(text, ['informacion privilegiada', 'reserva', 'muralla', 'confidencial'])) {
      return mapped('operador_basico', 'guia_etica', 'ob-eti-informacion', 'high', 'ethics information keyword');
    }
    return mapped('operador_basico', 'guia_etica', 'ob-eti-conductas', 'medium', 'etica category fallback');
  }

  if (cat === 'analisis_economico') {
    if (includesAny(text, ['balanza', 'mercado', 'ciclo', 'desempleo'])) {
      return mapped('operador_basico', 'guia_analisis_matematicas', 'ob-eco-mercados', 'medium', 'economic markets keyword');
    }
    return mapped('operador_basico', 'guia_analisis_matematicas', 'ob-eco-macro', 'medium', 'analisis economico category fallback');
  }

  if (cat === 'riesgos') {
    if (includesAny(text, ['operativo', 'credito', 'liquidez', 'sarl', 'contraparte'])) {
      return mapped('operador_basico', 'amv_operador', 'ob-ris-operativo', 'medium', 'non-market risk keyword');
    }
    return mapped('operador_basico', 'amv_operador', 'ob-ris-mercado', 'medium', 'riesgos category fallback');
  }

  if (cat === 'matematicas') {
    if (includesAny(text, ['tir', 'vpn', 'valor presente', 'anualidad', 'perpetuidad', 'flujo'])) {
      return mapped('operador_basico', 'guia_analisis_matematicas', 'ob-mat-valor', 'high', 'financial valuation math keyword');
    }
    return mapped('operador_basico', 'guia_analisis_matematicas', 'ob-mat-tasas', 'medium', 'matematicas category fallback');
  }

  if (cat === 'portafolios') {
    if (includesAny(text, ['sharpe', 'treynor', 'jensen', 'desempeno', 'performance'])) {
      return mapped('operador_basico', 'guia_portafolios', 'ob-por-indicadores', 'high', 'portfolio performance keyword');
    }
    return mapped('operador_basico', 'guia_portafolios', 'ob-por-teoria', 'medium', 'portafolios category fallback');
  }

  if (cat === 'fondos') {
    if (includesAny(text, ['pension', 'rais', 'rpm', 'multifondo', 'beps', 'afp'])) {
      return mapped('operador_basico', 'guia_regulacion', 'ob-fon-pensiones', 'high', 'pension keyword');
    }
    return mapped('operador_basico', 'guia_fic', 'ob-fon-fic', 'medium', 'fondos category fallback');
  }

  return review('operador_basico', 'guia_regulacion', 'ob-reg-ley964', 'unclassified operador_basico item');
}

function traceRentaFija(text) {
  if (includesAny(text, ['repo', 'simultanea', 'ttv', 'papeles comerciales', 'mercado monetario'])) {
    return mapped('renta_fija', 'guia_renta_fija', 'rf-operaciones', 'high', 'fixed income operation keyword');
  }
  if (includesAny(text, ['precio', 'cupon', 'tasa', 'duracion', 'convexidad', 'yield', 'rendimiento', 'tir', 'curva'])) {
    return mapped('renta_fija', 'guia_renta_fija', 'rf-valoracion', 'high', 'fixed income valuation keyword');
  }
  if (includesAny(text, ['riesgo', 'calificacion', 'rating', 'default'])) {
    return mapped('renta_fija', 'guia_renta_fija', 'rf-riesgo', 'medium', 'fixed income risk keyword');
  }
  return mapped('renta_fija', 'guia_renta_fija', 'rf-instrumentos', 'medium', 'renta fija category fallback');
}

function traceRentaVariable(text) {
  if (includesAny(text, ['opa', 'democratizacion', 'martillo', 'readquiere', 'evento corporativo', 'dividendo'])) {
    return mapped('renta_variable', 'guia_renta_variable', 'rv-corporativos', 'high', 'corporate action keyword');
  }
  if (includesAny(text, ['p/e', 'per', 'valoracion', 'dcf', 'beta', 'capitalizacion', 'utilidad', 'dividend yield'])) {
    return mapped('renta_variable', 'guia_renta_variable', 'rv-valoracion', 'high', 'equity valuation keyword');
  }
  if (includesAny(text, ['colcap', 'bvc', 'liquidez', 'rueda', 'mercado'])) {
    return mapped('renta_variable', 'guia_renta_variable', 'rv-mercado', 'medium', 'equity market keyword');
  }
  return mapped('renta_variable', 'guia_renta_variable', 'rv-acciones', 'medium', 'renta variable category fallback');
}

function traceDerivados(text) {
  if (includesAny(text, ['opcion', 'call', 'put', 'prima', 'griega', 'delta', 'gamma', 'vega', 'theta', 'strike'])) {
    return mapped('derivados', 'guia_derivados', 'der-opciones', 'high', 'options keyword');
  }
  if (includesAny(text, ['swap'])) {
    return mapped('derivados', 'guia_derivados', 'der-swaps', 'high', 'swap keyword');
  }
  if (includesAny(text, ['garantia', 'margen', 'camara', 'crcc', 'llamado'])) {
    return mapped('derivados', 'guia_derivados', 'der-garantias', 'high', 'margin clearing keyword');
  }
  if (includesAny(text, ['cobertura', 'liquidacion', 'cumplimiento', 'riesgo'])) {
    return mapped('derivados', 'guia_derivados', 'der-cobertura', 'medium', 'derivatives risk settlement keyword');
  }
  return mapped('derivados', 'guia_derivados', 'der-forward-futuros', 'medium', 'derivados category fallback');
}

function traceDivisas(text) {
  if (includesAny(text, ['trm', 'spot', 'tasa de cambio', 'mercado cambiario'])) {
    return mapped('divisas', 'guia_divisas', 'fx-trm', 'high', 'FX TRM spot keyword');
  }
  if (includesAny(text, ['imc', 'posicion propia', 'intermediario'])) {
    return mapped('divisas', 'guia_divisas', 'fx-imc', 'high', 'FX IMC keyword');
  }
  if (includesAny(text, ['canalizable', 'canalizacion', 'regimen cambiario', 'declaracion'])) {
    return mapped('divisas', 'guia_divisas', 'fx-regulacion', 'high', 'FX regulation keyword');
  }
  if (includesAny(text, ['forward', 'ndf', 'non-delivery', 'cobertura'])) {
    return mapped('divisas', 'guia_divisas', 'fx-derivados', 'high', 'FX derivatives keyword');
  }
  return mapped('divisas', 'guia_divisas', 'fx-trm', 'medium', 'divisas category fallback');
}

function mapped(component, source, guideSection, confidence, notes) {
  return {
    component,
    source,
    guideSection,
    traceStatus: 'mapped',
    traceConfidence: confidence,
    notes
  };
}

function review(component, source, guideSection, notes) {
  return {
    component,
    source,
    guideSection,
    traceStatus: 'needs_review',
    traceConfidence: 'low',
    notes
  };
}

const entries = {};
for (const item of [...questions, ...flashcards].filter(Boolean)) {
  entries[item.id] = { id: item.id, ...baseTrace(item) };
}

const body = Object.entries(entries)
  .sort(([a], [b]) => a.localeCompare(b, 'en'))
  .map(([id, trace]) => {
    const value = JSON.stringify(trace)
      .replace(/"([^"]+)":/g, '$1:')
      .replaceAll('"', "'");
    return `  '${id}': ${value}`;
  })
  .join(',\n');

const output = `// Generated traceability registry for the current AMV question bank.\n` +
  `// Regenerate with: node scripts/generate_item_traceability.mjs\n\n` +
  `export const ITEM_TRACEABILITY = {\n${body}\n};\n`;

await writeFile('src/data/item_traceability.js', output);
console.log(`Generated traceability entries: ${Object.keys(entries).length}`);
