// Coverage manifest for AMV study-guide traceability.
// Counts are derived from the current local question bank, not official AMV weights.

export const COVERAGE_STATUS = {
  COVERED: 'cubierto',
  PARTIAL: 'parcial',
  MISSING: 'sin cubrir',
  NEEDS_VALIDATION: 'requiere validacion'
};

export const TRACE_STATUS = {
  MAPPED: 'mapped',
  NEEDS_REVIEW: 'needs_review',
  MISSING_SOURCE: 'missing_source'
};

export const TRACE_CONFIDENCE = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

export const GUIDE_SOURCES = {
  amv_operador: {
    title: 'AMV Operador - pagina oficial',
    component: 'operador_basico',
    url: 'https://amvcolombia.org.co/en-que-se-puede-certificar/operador/'
  },
  guia_regulacion: {
    title: 'Guia de Estudio Regulacion Operador',
    component: 'operador_basico',
    url: 'https://amvcolombia.org.co/wp-content/uploads/2021/09/GuiaRegulacion-OPERADOR.pdf'
  },
  guia_autorregulacion: {
    title: 'Guia de Estudio de Autorregulacion',
    component: 'operador_basico',
    url: 'https://amvcolombia.org.co/wp-content/uploads/2025/08/AAMV-002-2025-08-26.pdf'
  },
  guia_etica: {
    title: 'Guia de Estudio Etica e Integridad',
    component: 'operador_basico',
    url: 'https://amvcolombia.org.co/wp-content/uploads/2025/09/ETIC-001-2025-08-29-Ajustada_compressed.pdf'
  },
  guia_analisis_matematicas: {
    title: 'Guia de Estudio Analisis Economico y Matematicas Financieras',
    component: 'operador_basico',
    url: 'https://www.amvcolombia.org.co/wp-content/uploads/2019/12/Gu%C3%83%C2%ADa-An%C3%83%C2%A1lisis-Econ%C3%83%C2%B3mico-y-Matem%C3%83%C2%A1ticas-financieras-Asesor-Financiero-Operador-y-Directivo.pdf'
  },
  guia_matematicas: {
    title: 'Guia de ejercicios de Matematicas Financieras',
    component: 'operador_basico',
    url: 'https://amvcolombia.org.co/wp-content/uploads/2025/04/Guia-de-ejercicios-Matematicas-financieras.pdf'
  },
  guia_fic: {
    title: 'Guia de Estudio Fondos de Inversion Colectiva',
    component: 'operador_basico',
    url: 'https://www.amvcolombia.org.co/wp-content/uploads/2019/08/Gu%C3%ADa-FIC-Operador.pdf'
  },
  guia_portafolios: {
    title: 'Guia de Estudio Administracion de Portafolios',
    component: 'operador_basico',
    url: 'https://www.amvcolombia.org.co/wp-content/uploads/2019/08/Gu%C3%ADa-Administraci%C3%B3n-de-Portafolios.pdf'
  },
  guia_renta_fija: {
    title: 'Guia de Estudio Renta Fija',
    component: 'renta_fija',
    url: 'https://www.amvcolombia.org.co/wp-content/uploads/2019/08/Guia-Renta-Fija-.pdf'
  },
  guia_renta_variable: {
    title: 'Guia de Estudio Renta Variable',
    component: 'renta_variable',
    url: 'https://www.amvcolombia.org.co/wp-content/uploads/2022/06/9.2-Guia-Renta-Variable-Operador-V.-2022-06-07.pdf'
  },
  guia_derivados: {
    title: 'Guia de Estudio Derivados',
    component: 'derivados',
    url: 'https://amvcolombia.org.co/en-que-se-puede-certificar/operador/'
  },
  guia_divisas: {
    title: 'Guia de Estudio Divisas',
    component: 'divisas',
    url: 'https://amvcolombia.org.co/en-que-se-puede-certificar/operador/'
  }
};

export const AMV_COMPONENTS = {
  operador_basico: {
    name: 'Operador basico',
    officialQuestions: 170,
    durationMinutes: 220,
    categoryKeys: [
      'regulacion',
      'autorregulacion',
      'etica',
      'analisis_economico',
      'riesgos',
      'matematicas',
      'portafolios',
      'fondos'
    ],
    sections: [
      { id: 'ob-reg-ley964', source: 'guia_regulacion', category: 'regulacion', name: 'Ley 964, valores, emisores y SIMEV', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-reg-operaciones', source: 'guia_regulacion', category: 'regulacion', name: 'Operaciones del mercado de valores', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-reg-sarlaft', source: 'guia_regulacion', category: 'regulacion', name: 'SARLAFT, lavado de activos y controles', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-reg-consumidor', source: 'guia_regulacion', category: 'regulacion', name: 'Consumidor financiero y defensoria', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-aut-amv', source: 'guia_autorregulacion', category: 'autorregulacion', name: 'AMV, funciones y autorregulacion', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-aut-disciplina', source: 'guia_autorregulacion', category: 'autorregulacion', name: 'Disciplina, tribunal y sanciones', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-aut-certificacion', source: 'guia_autorregulacion', category: 'autorregulacion', name: 'Certificacion profesional', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-eti-conductas', source: 'guia_etica', category: 'etica', name: 'Conductas prohibidas y conflictos de interes', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-eti-informacion', source: 'guia_etica', category: 'etica', name: 'Informacion privilegiada, reservas y murallas', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-eco-macro', source: 'guia_analisis_matematicas', category: 'analisis_economico', name: 'Politica monetaria, fiscal e indicadores macro', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-eco-mercados', source: 'guia_analisis_matematicas', category: 'analisis_economico', name: 'Ciclos, balanza de pagos y mercados', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-ris-mercado', source: 'amv_operador', category: 'riesgos', name: 'Riesgo de mercado, VaR y sensibilidad', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-ris-operativo', source: 'amv_operador', category: 'riesgos', name: 'Riesgo operativo, credito, liquidez y SARL', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-mat-tasas', source: 'guia_analisis_matematicas', category: 'matematicas', name: 'Tasas, interes y conversiones', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-mat-valor', source: 'guia_analisis_matematicas', category: 'matematicas', name: 'Valor presente, TIR, VPN y anualidades', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-por-teoria', source: 'guia_portafolios', category: 'portafolios', name: 'Teoria de portafolios y diversificacion', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-por-indicadores', source: 'guia_portafolios', category: 'portafolios', name: 'Sharpe, Treynor, Jensen y desempeno', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-fon-fic', source: 'guia_fic', category: 'fondos', name: 'Fondos de inversion colectiva y ETF', status: COVERAGE_STATUS.PARTIAL },
      { id: 'ob-fon-pensiones', source: 'guia_regulacion', category: 'fondos', name: 'Pensiones, multifondos y BEPS', status: COVERAGE_STATUS.PARTIAL }
    ]
  },
  renta_fija: {
    name: 'Especialidad Renta Fija',
    officialQuestions: 40,
    durationMinutes: 60,
    categoryKeys: ['renta_fija'],
    sections: [
      { id: 'rf-instrumentos', source: 'guia_renta_fija', category: 'renta_fija', name: 'Instrumentos de renta fija y emisores', status: COVERAGE_STATUS.PARTIAL },
      { id: 'rf-operaciones', source: 'guia_renta_fija', category: 'renta_fija', name: 'Repos, simultaneas, TTV y mercado monetario', status: COVERAGE_STATUS.PARTIAL },
      { id: 'rf-valoracion', source: 'guia_renta_fija', category: 'renta_fija', name: 'Precio, tasas, cupones, duracion y convexidad', status: COVERAGE_STATUS.PARTIAL },
      { id: 'rf-riesgo', source: 'guia_renta_fija', category: 'renta_fija', name: 'Calificacion, riesgo y curva de rendimientos', status: COVERAGE_STATUS.PARTIAL }
    ]
  },
  renta_variable: {
    name: 'Especialidad Renta Variable',
    officialQuestions: 40,
    durationMinutes: 60,
    categoryKeys: ['renta_variable'],
    sections: [
      { id: 'rv-acciones', source: 'guia_renta_variable', category: 'renta_variable', name: 'Acciones, derechos y tipos de acciones', status: COVERAGE_STATUS.PARTIAL },
      { id: 'rv-mercado', source: 'guia_renta_variable', category: 'renta_variable', name: 'Mercado accionario, BVC, COLCAP y liquidez', status: COVERAGE_STATUS.PARTIAL },
      { id: 'rv-corporativos', source: 'guia_renta_variable', category: 'renta_variable', name: 'OPA, democratizacion, martillos y eventos corporativos', status: COVERAGE_STATUS.PARTIAL },
      { id: 'rv-valoracion', source: 'guia_renta_variable', category: 'renta_variable', name: 'Indicadores, dividendos y valoracion', status: COVERAGE_STATUS.PARTIAL }
    ]
  },
  derivados: {
    name: 'Especialidad Derivados',
    officialQuestions: 40,
    durationMinutes: 60,
    categoryKeys: ['derivados'],
    sections: [
      { id: 'der-forward-futuros', source: 'guia_derivados', category: 'derivados', name: 'Forwards, futuros y estandarizacion', status: COVERAGE_STATUS.PARTIAL },
      { id: 'der-opciones', source: 'guia_derivados', category: 'derivados', name: 'Opciones, primas, griegas y estrategias', status: COVERAGE_STATUS.PARTIAL },
      { id: 'der-swaps', source: 'guia_derivados', category: 'derivados', name: 'Swaps y tasas de interes', status: COVERAGE_STATUS.PARTIAL },
      { id: 'der-garantias', source: 'guia_derivados', category: 'derivados', name: 'Garantias, margenes y camara de riesgo', status: COVERAGE_STATUS.PARTIAL },
      { id: 'der-cobertura', source: 'guia_derivados', category: 'derivados', name: 'Cobertura, liquidacion y riesgos', status: COVERAGE_STATUS.PARTIAL }
    ]
  },
  divisas: {
    name: 'Especialidad Divisas',
    officialQuestions: 40,
    durationMinutes: 60,
    categoryKeys: ['divisas'],
    sections: [
      { id: 'fx-trm', source: 'guia_divisas', category: 'divisas', name: 'TRM, spot y mercado cambiario', status: COVERAGE_STATUS.PARTIAL },
      { id: 'fx-imc', source: 'guia_divisas', category: 'divisas', name: 'Intermediarios del mercado cambiario y posicion propia', status: COVERAGE_STATUS.PARTIAL },
      { id: 'fx-regulacion', source: 'guia_divisas', category: 'divisas', name: 'Canalizacion, regimen cambiario y obligacion legal', status: COVERAGE_STATUS.PARTIAL },
      { id: 'fx-derivados', source: 'guia_divisas', category: 'divisas', name: 'Forwards, NDF y cobertura cambiaria', status: COVERAGE_STATUS.PARTIAL }
    ]
  }
};

export const REQUIRED_TRACE_FIELDS = [
  'id',
  'component',
  'source',
  'guideSection',
  'traceStatus',
  'traceConfidence',
  'notes'
];

export function getAllGuideSections() {
  return Object.fromEntries(
    Object.values(AMV_COMPONENTS)
      .flatMap((component) => component.sections)
      .map((section) => [section.id, section])
  );
}
