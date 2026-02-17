// AMV Operador Básico - Banco de Preguntas Completo
// Categorías: regulacion, autorregulacion, etica, analisis_economico, riesgos, 
//   matematicas, renta_fija, renta_variable, derivados, divisas

export const CATEGORIES = {
    regulacion: { name: 'Regulación', icon: '⚖️', color: '#6366f1' },
    autorregulacion: { name: 'Autorregulación', icon: '🛡️', color: '#8b5cf6' },
    etica: { name: 'Ética', icon: '🤝', color: '#ec4899' },
    analisis_economico: { name: 'Análisis Económico', icon: '📊', color: '#14b8a6' },
    riesgos: { name: 'Riesgos', icon: '⚠️', color: '#f59e0b' },
    matematicas: { name: 'Matemáticas Financieras', icon: '📐', color: '#3b82f6' },
    renta_fija: { name: 'Renta Fija', icon: '📜', color: '#10b981' },
    renta_variable: { name: 'Renta Variable', icon: '📈', color: '#ef4444' },
    derivados: { name: 'Derivados', icon: '🔄', color: '#f97316' },
    divisas: { name: 'Divisas', icon: '💱', color: '#06b6d4' },
    portafolios: { name: 'Portafolios', icon: '💼', color: '#84cc16' },
    fondos: { name: 'Fondos', icon: '🏦', color: '#a855f7' }
};

export const questions = [
    // ═══════════════════ REGULACIÓN ═══════════════════
    {
        id: 'r1', cat: 'regulacion', q: '¿Cuáles son los objetivos de la intervención del Gobierno Nacional para el mercado de valores?',
        opts: ['Proteger los derechos de los inversionistas', 'Promover el desarrollo y la eficiencia del mercado', 'Prevenir y manejar el riesgo sistémico', 'Todas las anteriores'], ans: 3,
        exp: 'La Ley 964 de 2005 establece que el Gobierno interviene para proteger inversionistas, promover eficiencia, prevenir riesgo sistémico y preservar la confianza pública.'
    },

    {
        id: 'r2', cat: 'regulacion', q: 'Escoja las características de un Valor según la Ley 964.',
        opts: ['Derecho de naturaleza negociable que hace parte de una emisión', 'Todo título transable en la BVC', 'Que tiene una denominación monetaria', 'Que se pueda pagar en moneda local'], ans: 0,
        exp: 'Un valor es todo derecho de naturaleza negociable que haga parte de una emisión, cuyo objeto sea captar recursos del público.'
    },

    {
        id: 'r3', cat: 'regulacion', q: '¿Cuáles NO son considerados Valores?',
        opts: ['Bonos y Papeles Comerciales', 'Acciones y CDTs', 'Pólizas de Seguros y Certificados de Depósito de Mercancías', 'Títulos de deuda pública'], ans: 2,
        exp: 'Las pólizas de seguros y los certificados de depósito de mercancías no se consideran valores según la Ley del mercado de valores.'
    },

    {
        id: 'r4', cat: 'regulacion', q: '¿La oferta pública de valores va dirigida a menos de 100 personas determinadas?',
        opts: ['Verdadero', 'Falso'], ans: 1,
        exp: 'La oferta pública es la que se dirige a personas no determinadas o a más de 100 personas determinadas.'
    },

    {
        id: 'r5', cat: 'regulacion', q: '¿Qué registros conforman el SIMEV?',
        opts: ['RNVE, RNPMV, RNVI', 'RNVE, RNAMV, RNPMV', 'RNVE, RNVA, RNPM', 'Ninguna de las anteriores'], ans: 1,
        exp: 'El SIMEV está compuesto por el RNVE (Registro Nacional de Valores y Emisores), RNAMV (Registro Nacional de Agentes del MV) y RNPMV (Registro Nacional de Profesionales del MV).'
    },

    {
        id: 'r6', cat: 'regulacion', q: '¿Cuáles son las modalidades de inscripción en el RNVE?',
        opts: ['Automática y anticipada', 'Automática, normal y temporal', 'Anticipada y temporal', 'Ninguna de las anteriores'], ans: 0,
        exp: 'Las modalidades de inscripción en el RNVE son automática y anticipada.'
    },

    {
        id: 'r7', cat: 'regulacion', q: 'Son agentes del mercado público de valores:',
        opts: ['Bancos y Fiducias únicamente', 'Mesas de dinero y Corporaciones financieras', 'Sociedades comisionistas de bolsa, Sociedades corredoras de valores y BVC', 'Todas las anteriores'], ans: 3,
        exp: 'Todos los mencionados son agentes del mercado público de valores.'
    },

    {
        id: 'r8', cat: 'regulacion', q: '¿Cuáles son actividades del mercado de valores?',
        opts: ['Solo emisión y oferta', 'Emisión, oferta, intermediación, administración de fondos mutuos', 'Emisión y oferta, intermediación, administración de FIC, depósito, compensación y liquidación, calificación de riesgos, autorregulación y suministro de información', 'Solo intermediación y calificación de riesgos'], ans: 2,
        exp: 'El mercado de valores comprende todas las actividades listadas incluyendo emisión, intermediación, depósito, compensación, autorregulación y suministro de información.'
    },

    {
        id: 'r9', cat: 'regulacion', q: '¿Cuándo se requiere una OPA (Oferta Pública de Adquisición)?',
        opts: ['Adquisiciones inferiores al 25% del capital con derecho a voto', 'Adquisiciones superiores al 25% del capital con derecho a voto en sociedades inscritas en bolsa', 'Adquisiciones superiores al 50%', 'Solo al 100% del capital'], ans: 1,
        exp: 'Se requiere OPA para adquisiciones que representen el 25% o más del capital con derecho a voto de sociedades inscritas en bolsa.'
    },

    {
        id: 'r10', cat: 'regulacion', q: '¿Cuál es el plazo mínimo para el vencimiento de un bono?',
        opts: ['30 días', '90 días', '180 días', 'Un año'], ans: 3,
        exp: 'Los bonos deben tener un plazo de vencimiento mínimo de un año.'
    },

    {
        id: 'r11', cat: 'regulacion', q: '¿Cómo se llama el término para indicar que una oferta pública no tiene el respectivo permiso?',
        opts: ['Nulidad', 'Ineficacia', 'Rechazo', 'Revocada'], ans: 1,
        exp: 'Se denomina ineficacia cuando una oferta pública carece del permiso correspondiente.'
    },

    {
        id: 'r12', cat: 'regulacion', q: '¿Quiénes pueden ser emisores de valores?',
        opts: ['Solo sociedades por acciones', 'Solo la Nación y entidades públicas', 'Sociedades por acciones, entidades cooperativas, la Nación, organismos multilaterales de crédito, patrimonios autónomos, entre otros', 'Solo empresas privadas'], ans: 2,
        exp: 'Pueden ser emisores: sociedades por acciones, cooperativas, entidades sin ánimo de lucro, la Nación, organismos multilaterales, patrimonios autónomos fiduciarios, y SAS.'
    },

    {
        id: 'r13', cat: 'regulacion', q: 'El mercado en el cual la compensación y liquidación se realiza en un plazo corto predeterminado con la entrega y pago del precio se denomina:',
        opts: ['Mercado primario', 'Mercado secundario', 'Mercado Spot (de contado)', 'Mercado monetario'], ans: 2,
        exp: 'El mercado spot o de contado es donde la compensación y liquidación se realiza en un plazo corto con entrega inmediata de lo negociado.'
    },

    {
        id: 'r14', cat: 'regulacion', q: 'Las transacciones mediante las cuales se adquieren valores directamente del emisor corresponden al:',
        opts: ['Mercado secundario', 'Mercado OTC', 'Mercado primario', 'Ninguna de las anteriores'], ans: 2,
        exp: 'El mercado primario es donde se adquieren los valores directamente del emisor, aunque puede haber intermediación de un agente colocador.'
    },

    {
        id: 'r15', cat: 'regulacion', q: '¿Qué tipo de valores puede emitir un establecimiento bancario?',
        opts: ['Solo acciones', 'Solo bonos', 'CDTs, aceptaciones bancarias, bonos, cédulas hipotecarias, entre otros', 'Solo papeles comerciales'], ans: 2,
        exp: 'Los establecimientos bancarios pueden emitir CDTs, aceptaciones bancarias, bonos, cédulas hipotecarias, títulos de deuda pública, entre otros.'
    },

    {
        id: 'r16', cat: 'regulacion', q: '¿Bajo qué norma se contempló de manera general la autorregulación en el mercado de valores?',
        opts: ['Resolución 400 de 1995', 'Ley 964 de 2005', 'Decreto 1525', 'Ninguna de las anteriores'], ans: 1,
        exp: 'La Ley 964 de 2005 es la que establece el marco general de autorregulación del mercado de valores colombiano.'
    },

    {
        id: 'r17', cat: 'regulacion', q: '¿Qué mide el coeficiente Beta?',
        opts: ['Concentración de la propiedad accionaria', 'Volatilidad respecto al mercado', 'Tendencia general de los precios', 'Liquidez del activo'], ans: 1,
        exp: 'El coeficiente Beta mide la volatilidad o riesgo sistemático de un activo en relación con el mercado en su conjunto.'
    },

    {
        id: 'r18', cat: 'regulacion', q: 'La concentración del mercado se mide mediante:',
        opts: ['La liquidez de las acciones', 'La proporción del monto de las acciones de los 10 principales emisores en la capitalización bursátil', 'El IGBC', 'El PIB'], ans: 1,
        exp: 'La concentración del mercado se mide por la proporción que representan los 10 principales emisores sobre la capitalización bursátil total.'
    },

    {
        id: 'r19', cat: 'regulacion', q: '¿Cuál es el plazo máximo durante el cual se debe mantener una Oferta de Democratización?',
        opts: ['10 días', '30 días', '3 meses', '1 año'], ans: 2,
        exp: 'Una Oferta de Democratización debe mantenerse por un plazo máximo de 3 meses.'
    },

    {
        id: 'r20', cat: 'regulacion', q: 'Los derivados financieros se consideran valores siempre y cuando sean estandarizados y susceptibles a ser transados en las bolsas de valores.',
        opts: ['Verdadero', 'Falso'], ans: 0,
        exp: 'Los derivados estandarizados susceptibles de ser transados en bolsas se consideran valores y deben inscribirse en el RNVE.'
    },

    // ═══════════════════ AUTORREGULACIÓN ═══════════════════
    {
        id: 'a1', cat: 'autorregulacion', q: '¿Qué busca la autorregulación?',
        opts: ['Solo transparencia y formación de precios', 'Solo protección de accionistas', 'Transparencia, formación de precios, complejidad técnica, protección de intereses y canalización del ahorro', 'Solo complejidad técnica'], ans: 2,
        exp: 'La autorregulación busca transparencia y formación de precios, complejidad técnica y especialización, protección de inversionistas y canalización del ahorro a actividades productivas.'
    },

    {
        id: 'a2', cat: 'autorregulacion', q: '¿Cuáles son los principios básicos de la autorregulación para mercados emergentes?',
        opts: ['Integridad y Racionalidad', 'Racionalidad y Transparencia', 'Racionalidad, Responsabilidad, Transparencia e Integridad', 'Transparencia, Racionalidad e Integridad'], ans: 2,
        exp: 'Los cuatro principios son: Racionalidad, Responsabilidad, Transparencia e Integridad.'
    },

    {
        id: 'a3', cat: 'autorregulacion', q: '¿Cuáles son las ventajas de la autorregulación?',
        opts: ['Solo aceptación de normas', 'Solo conocimiento técnico', 'Solo imposición de estándares éticos más altos que la ley', 'Aceptación de normas, flexibilidad, conocimiento técnico, reducción de costos para el gobierno e imposición de estándares éticos más altos'], ans: 3,
        exp: 'Las ventajas incluyen: aceptación voluntaria, flexibilidad normativa, conocimiento técnico especializado, reducción de costos gubernamentales y estándares éticos superiores a la ley.'
    },

    {
        id: 'a4', cat: 'autorregulacion', q: '¿Cuáles son los riesgos de la autorregulación?',
        opts: ['Solo responsabilidad patrimonial de la bolsa', 'Solo conflictos de intereses', 'Solo arbitraje regulatorio', 'Responsabilidad patrimonial, conflictos de intereses, arbitraje de regulación y supervisión'], ans: 3,
        exp: 'Los riesgos son: responsabilidad patrimonial de la bolsa, potenciales conflictos de interés, y arbitraje de regulación y supervisión.'
    },

    {
        id: 'a5', cat: 'autorregulacion', q: 'La función disciplinaria de la AMV consiste en:',
        opts: ['Verificar el cumplimiento de la normatividad', 'Investigar hechos y conductas para determinar responsabilidades e incumplimientos', 'Expedir reglamentos de autorregulación', 'Establecer normas de conducta y prevención de fraudes'], ans: 1,
        exp: 'La función disciplinaria consiste en investigar hechos y conductas para determinar responsabilidad por incumplimiento normativo y juzgarlas.'
    },

    {
        id: 'a6', cat: 'autorregulacion', q: 'La AMV a diferencia de la Superfinanciera busca darle más responsabilidad a:',
        opts: ['La persona jurídica', 'La persona natural', 'La compañía', 'La entidad'], ans: 1,
        exp: 'La AMV enfoca sus sanciones en la persona natural (operador, asesor), mientras la Superfinanciera se enfoca más en la persona jurídica (entidad).'
    },

    {
        id: 'a7', cat: 'autorregulacion', q: '¿En qué se diferencian las sanciones de la AMV entre personas naturales y jurídicas?',
        opts: ['Multa', 'Amonestación', 'Suspensión', 'Expulsión'], ans: 3,
        exp: 'La expulsión es la sanción que aplica solo a personas jurídicas y no a personas naturales. Ambos tipos pueden recibir multa, amonestación y suspensión.'
    },

    {
        id: 'a8', cat: 'autorregulacion', q: '¿Qué tipo de sanciones puede ejercer el AMV contra la persona natural vinculada?',
        opts: ['Solo amonestación y multa', 'Suspensión, inhabilitación hasta 5 años, remoción del cargo, cancelación de inscripción en SIMEV', 'Solo multa', 'Solo remoción del cargo'], ans: 1,
        exp: 'El AMV puede imponer suspensión/inhabilitación hasta 5 años, remoción del cargo, suspensión de inscripción en registros y cancelación de inscripción en SIMEV.'
    },

    {
        id: 'a9', cat: 'autorregulacion', q: '¿Qué período de vigencia puede tener una suspensión o inhabilitación impuesta por la Superintendencia de Valores?',
        opts: ['10 años', '20 años', '5 años', '15 años'], ans: 2,
        exp: 'La suspensión o inhabilitación puede tener un período máximo de 5 años.'
    },

    {
        id: 'a10', cat: 'autorregulacion', q: 'Un directivo o administrador puede ser suspendido del SIMEV.',
        opts: ['Verdadero', 'Falso'], ans: 0,
        exp: 'Un directivo o administrador de entidad vigilada puede ser suspendido del SIMEV como parte de las medidas del AMV.'
    },

    // ═══════════════════ ÉTICA ═══════════════════
    {
        id: 'e1', cat: 'etica', q: '¿Qué se entiende por información privilegiada?',
        opts: ['Información publicada en medios nacionales', 'Información no pública pero irrelevante', 'Información no confirmada de voz a voz', 'Información concreta, no pública, que un inversionista razonable habría tenido en cuenta'], ans: 3,
        exp: 'Es información de carácter concreto que no ha sido divulgada al público y que, de haberlo sido, un inversionista la habría considerado en sus decisiones.'
    },

    {
        id: 'e2', cat: 'etica', q: 'El proceso de ocultar bienes de origen ilegal para hacerlos parecer legítimos se conoce como:',
        opts: ['Delito de Banca Paralela', 'Operaciones preacordadas', 'Malversación de fondos', 'Lavado de activos'], ans: 3,
        exp: 'El lavado de activos es el proceso de ocultamiento, manejo, inversión o aprovechamiento de bienes de origen ilegal para simular su legitimidad.'
    },

    {
        id: 'e3', cat: 'etica', q: 'Estas son conductas que atentan contra los intereses de los clientes. Indique la afirmación FALSA:',
        opts: ['Exceso del mandato', 'Asumir obligaciones de medio', 'Indebida asesoría', 'Conflicto de interés'], ans: 1,
        exp: 'Asumir obligaciones de medio (no de resultado) es legítimo. Las demás son conductas que atentan contra los intereses de los clientes.'
    },

    {
        id: 'e4', cat: 'etica', q: 'El Código de Buen Gobierno es:',
        opts: ['Una regulación externa impuesta por la SFC', 'Normas incorporadas al interior de los emisores para regular el funcionamiento de directivos y administradores', 'Un documento expedido por la AMV', 'Un requerimiento del Banco de la República'], ans: 1,
        exp: 'Son normas internas de los emisores que regulan el funcionamiento de directivos, administradores y revisores fiscales para maximizar el valor de la empresa.'
    },

    {
        id: 'e5', cat: 'etica', q: '¿Cuál es el mínimo de personas de la junta directiva que deben conformar el comité de auditoría?',
        opts: ['5', '7', '3', 'No aplica'], ans: 2,
        exp: 'Según los estándares de Gobierno Corporativo, el comité de auditoría debe estar conformado por al menos 3 miembros de la junta directiva.'
    },

    {
        id: 'e6', cat: 'etica', q: 'Se entiende por fraude interno:',
        opts: ['Pérdidas derivadas de daños a activos físicos', 'Fallas frente a obligaciones con clientes', 'Actos intencionados de empleados o administradores para apropiarse de activos o incumplir normas', 'Actos de personas externas para defraudar a la entidad'], ans: 2,
        exp: 'El fraude interno son actos intencionados de empleados o administradores que buscan apropiarse de activos de la entidad o incumplir normas.'
    },

    {
        id: 'e7', cat: 'etica', q: 'Los inversionistas profesionales son aquellos que cuentan con experiencia y conocimientos suficientes y un patrimonio igual o superior a:',
        opts: ['5.000 SMLV', '10.000 SMLV', '20.000 SMLV', '1.000 SMLV'], ans: 1,
        exp: 'Se requiere un patrimonio igual o superior a 10.000 SMLV además de experiencia y conocimientos para ser clasificado como inversionista profesional.'
    },

    // ═══════════════════ ANÁLISIS ECONÓMICO ═══════════════════
    {
        id: 'ae1', cat: 'analisis_economico', q: 'Son indicadores de profundización del mercado:',
        opts: ['Solo el PIB', 'Tamaño del mercado, Liquidez, Eficiencia, Evolución y Concentración del mercado', 'Solo el IGBC y COLCAP', 'Solo Valor en Riesgo'], ans: 1,
        exp: 'Los indicadores de profundización incluyen: tamaño del mercado, liquidez, eficiencia, evolución y concentración del mercado.'
    },

    {
        id: 'ae2', cat: 'analisis_economico', q: '¿Qué entidades están a cargo de la regulación del mercado de valores en Colombia?',
        opts: ['Congreso de la República, Ministerio de Hacienda y SFC', 'Solo la Superfinanciera', 'Solo el Banco de la República', 'Solo el Congreso y la AMV'], ans: 0,
        exp: 'Las tres entidades reguladoras son: el Congreso de la República, el Ministerio de Hacienda y Crédito Público, y la Superintendencia Financiera de Colombia.'
    },

    {
        id: 'ae3', cat: 'analisis_economico', q: 'El sistema mediante el cual se dirige y controla la gestión de una persona jurídica se conoce como:',
        opts: ['Auditoría', 'Contraloría', 'AMV', 'Código de buen gobierno'], ans: 3,
        exp: 'El código de buen gobierno es el conjunto de normas y órganos internos para dirigir y controlar la gestión de una persona jurídica.'
    },

    {
        id: 'ae4', cat: 'analisis_economico', q: '¿Qué tipo de agentes principales componen la estructura del mercado de valores?',
        opts: ['Solo emisores', 'Solo inversionistas', 'Emisores, inversionistas, intermediarios y facilitadores', 'Solo intermediarios'], ans: 2,
        exp: 'La estructura del mercado de valores se compone de emisores, inversionistas, intermediarios y facilitadores (calificadoras, etc.).'
    },

    {
        id: 'ae5', cat: 'analisis_economico', q: 'La colocación de valores puede ser de tres clases:',
        opts: ['En firme, garantizada o al mejor esfuerzo', 'Solo en firme', 'Solo garantizada', 'Al mejor esfuerzo y garantizada'], ans: 0,
        exp: 'Las tres modalidades de colocación son: en firme (el colocador asume el riesgo), garantizada (garantiza cubrir lo no colocado), y al mejor esfuerzo (sin garantía).'
    },

    {
        id: 'ae6', cat: 'analisis_economico', q: 'Las entidades sujetas a inspección y vigilancia en el mercado de valores incluyen:',
        opts: ['Solo intermediarios de valores', 'Solo calificadoras de valores', 'Proveedores de infraestructura, intermediarios, carteras colectivas, sociedades titularizadoras y calificadoras', 'Solo proveedores de infraestructura'], ans: 2,
        exp: 'La inspección y vigilancia cubre: proveedores de infraestructura, intermediarios, carteras colectivas y sus administradores, sociedades titularizadoras y calificadoras.'
    },

    {
        id: 'ae7', cat: 'analisis_economico', q: 'Las entidades que conforman la estructura del mercado bancario son:',
        opts: ['Solo establecimientos de crédito', 'Establecimientos de crédito, sociedades de servicios financieros e inversionistas institucionales', 'Solo inversionistas institucionales', 'Solo sociedades de servicios financieros'], ans: 1,
        exp: 'La estructura del sistema financiero incluye establecimientos de crédito, sociedades de servicios financieros e inversionistas institucionales.'
    },

    {
        id: 'ae8', cat: 'analisis_economico', q: '¿Cuál de los siguientes agentes NO hace parte de las Sociedades de Servicios Financieros?',
        opts: ['Sociedades fiduciarias', 'Sociedades Administradoras de Fondos de Pensiones y Cesantías', 'Almacenes Generales de Depósito', 'Establecimientos de crédito'], ans: 3,
        exp: 'Los establecimientos de crédito son una categoría aparte. Las Sociedades de Servicios Financieros incluyen fiduciarias, AFPs y almacenes generales de depósito.'
    },

    // ═══════════════════ RIESGOS ═══════════════════
    {
        id: 'ri1', cat: 'riesgos', q: 'La probabilidad de incurrir en pérdidas por fallas en procesos, personas y sistemas internos o eventos externos, incluyendo riesgo legal y excluyendo riesgo estratégico y de imagen, es:',
        opts: ['Riesgo de mercado', 'Riesgo de crédito', 'Riesgo operacional', 'Riesgo de VAR'], ans: 2,
        exp: 'El riesgo operacional es la probabilidad de pérdidas por fallas en procesos, personas, sistemas internos o eventos externos. Incluye el riesgo legal pero excluye el estratégico y de imagen.'
    },

    {
        id: 'ri2', cat: 'riesgos', q: 'Los criterios para valoración de inversiones son:',
        opts: ['Liquidez, duración y rentabilidad', 'Depende de las políticas de cada entidad', 'Objetividad, transparencia, representatividad, evaluación y análisis permanentes, y profesionalismo', 'Expectativas de inflación y liquidez'], ans: 2,
        exp: 'Los criterios de valoración son: objetividad, transparencia, representatividad, evaluación y análisis permanentes, y profesionalismo.'
    },

    {
        id: 'ri3', cat: 'riesgos', q: 'Los títulos que el inversionista tiene el propósito y capacidad de mantener al menos un año se clasifican como:',
        opts: ['Inversiones negociables', 'Inversiones hasta el vencimiento', 'Inversiones disponibles para la venta', 'Inversiones de riesgo medio'], ans: 1,
        exp: 'Las inversiones hasta el vencimiento son aquellas que el inversionista tiene el propósito serio y la capacidad de mantener al menos un año.'
    },

    {
        id: 'ri4', cat: 'riesgos', q: 'El riesgo de pérdidas por deficiencias en recurso humano, procesos, tecnología o infraestructura hace parte del:',
        opts: ['Riesgo de Mercado', 'Riesgo Operativo', 'Riesgo Legal', 'Riesgo de Crédito'], ans: 1,
        exp: 'El Riesgo Operativo abarca las posibles pérdidas por deficiencias en recurso humano, procesos, tecnología, infraestructura o eventos externos.'
    },

    {
        id: 'ri5', cat: 'riesgos', q: '¿Cuál es el porcentaje mínimo del margen para valores de renta fija en una cuenta de margen?',
        opts: ['5% del valor de la posición', '5% del VAR', '25% del valor de la posición', '25% del VAR'], ans: 0,
        exp: 'El margen mínimo para valores de renta fija es el 5% del valor de la posición al momento de tomar la posición por cuenta del cliente.'
    },

    {
        id: 'ri6', cat: 'riesgos', q: 'El riesgo de que una contraparte no cumpla con sus obligaciones contractuales se denomina:',
        opts: ['Riesgo de mercado', 'Riesgo de crédito', 'Riesgo operativo', 'Riesgo de liquidez'], ans: 1,
        exp: 'El riesgo de crédito es la probabilidad de que una contraparte incumpla total o parcialmente con sus obligaciones contractuales.'
    },

    {
        id: 'ri7', cat: 'riesgos', q: 'El riesgo de pérdidas por variaciones adversas en el precio de mercado de los activos se conoce como:',
        opts: ['Riesgo de crédito', 'Riesgo operativo', 'Riesgo de mercado', 'Riesgo legal'], ans: 2,
        exp: 'El riesgo de mercado es la posibilidad de pérdidas por variaciones adversas en los precios de mercado de los activos financieros.'
    },

    {
        id: 'ri8', cat: 'riesgos', q: 'El riesgo de no poder deshacer una posición sin afectar significativamente el precio se denomina:',
        opts: ['Riesgo de mercado', 'Riesgo de crédito', 'Riesgo de liquidez', 'Riesgo operativo'], ans: 2,
        exp: 'El riesgo de liquidez es la posibilidad de no poder deshacer o cerrar una posición rápidamente sin un impacto significativo en el precio.'
    },

    // ═══════════════════ MATEMÁTICAS FINANCIERAS ═══════════════════
    {
        id: 'm1', cat: 'matematicas', q: 'La tasa de interés efectiva mensual equivalente al 12% Anual mes vencido es:',
        opts: ['6% mes vencido', '4% mes vencido', '3% mes vencido', '1% mes vencido'], ans: 3,
        exp: '12% anual nominal mes vencido = 12%/12 = 1% efectivo mensual.'
    },

    {
        id: 'm2', cat: 'matematicas', q: 'Si la tasa de descuento (%EA) de un título es mayor que la tasa del cupón (%EA), entonces en el día de pago de cualquier cupón:',
        opts: ['VPN = Valor Nominal', 'VPN < Valor Nominal', 'VPN > Valor Nominal', 'VPN - cupón = Valor Nominal'], ans: 1,
        exp: 'Cuando la tasa de descuento supera la tasa del cupón, el valor presente neto del título es menor que su valor nominal (se negocia con descuento).'
    },

    {
        id: 'm3', cat: 'matematicas', q: '¿Cuál sería el precio del dólar dentro de 90 días con un forward, devaluación del 6% y tasa spot de 2000 COP/USD?',
        opts: ['2000', '2028,94', '2120,02', '2124,32'], ans: 1,
        exp: 'Forward = Spot × (1 + devaluación)^(90/360) = 2000 × (1.06)^(0.25) ≈ 2028.94.'
    },

    {
        id: 'm4', cat: 'matematicas', q: 'La tasa nominal trimestre vencido equivalente a una tasa efectiva anual del 10% es aproximadamente:',
        opts: ['9,410%', '9,680%', '9,645%', '9,536%'], ans: 3,
        exp: 'Se convierte EA a NTV: NTV = 4 × [(1 + EA)^(1/4) - 1] = 4 × [(1.10)^(0.25) - 1] ≈ 9.536%.'
    },

    {
        id: 'm5', cat: 'matematicas', q: '¿Qué relación existe entre el precio de un bono y las tasas de interés?',
        opts: ['Relación directa: ambos suben juntos', 'Relación inversa: si las tasas suben, los precios bajan', 'No existe relación', 'Depende del emisor'], ans: 1,
        exp: 'Los precios de los bonos tienen una relación inversa con las tasas de interés. Si las tasas suben, los precios bajan; si las tasas bajan, los precios suben.'
    },

    {
        id: 'm6', cat: 'matematicas', q: 'Un bono con cupón del 8% EA y tasa de descuento del 10% EA se negocia:',
        opts: ['A la par', 'Con prima', 'Con descuento', 'Depende del plazo'], ans: 2,
        exp: 'Cuando la tasa de descuento es mayor que la tasa cupón, el bono se negocia con descuento (precio < valor nominal).'
    },

    {
        id: 'm7', cat: 'matematicas', q: 'La tasa efectiva anual equivalente a una tasa nominal del 24% MV es:',
        opts: ['24%', '26,82%', '25,00%', '27,12%'], ans: 1,
        exp: 'EA = (1 + 0.24/12)^12 - 1 = (1.02)^12 - 1 ≈ 26.82%.'
    },

    {
        id: 'm8', cat: 'matematicas', q: 'El valor presente de un flujo futuro de $1.000.000 a recibir en 2 años con una tasa del 10% EA es:',
        opts: ['$826.446', '$800.000', '$909.091', '$900.000'], ans: 0,
        exp: 'VP = VF / (1+i)^n = 1.000.000 / (1.10)^2 = 1.000.000 / 1.21 ≈ $826.446.'
    },

    // ═══════════════════ RENTA FIJA ═══════════════════
    {
        id: 'rf1', cat: 'renta_fija', q: '¿Cuál entidad emite los Títulos de Desarrollo Agropecuario (TDA)?',
        opts: ['El Banco Agrario', 'Instituto Colombiano Agropecuario ICA', 'El Ministerio de Agricultura', 'FINAGRO'], ans: 3,
        exp: 'Los Títulos de Desarrollo Agropecuario (TDA) son emitidos por FINAGRO.'
    },

    {
        id: 'rf2', cat: 'renta_fija', q: 'Una característica de las operaciones simultáneas es:',
        opts: ['El monto inicial se calcula con descuento sobre el precio de mercado', 'El plazo no puede ser superior a 1 año', 'Se establecen restricciones a la movilidad de los valores', 'Se calculan sobre el precio limpio de los títulos'], ans: 1,
        exp: 'En las operaciones simultáneas, el plazo inicialmente convenido no puede ser superior a un año contado desde la celebración.'
    },

    {
        id: 'rf3', cat: 'renta_fija', q: 'La operación en la que una persona vende títulos de renta fija con compromiso de recompra a precio establecido se denomina:',
        opts: ['Fondeo', 'Repo', 'Simultánea', 'Carrusel'], ans: 1,
        exp: 'El Repo es la operación donde se venden títulos de renta fija con el compromiso de recomprarlos en fecha posterior a precio pactado desde el inicio.'
    },

    {
        id: 'rf4', cat: 'renta_fija', q: 'Los títulos que se expiden como producto de devolución de impuestos son:',
        opts: ['TDAS', 'TIDIS', 'TES', 'TIPS'], ans: 1,
        exp: 'Los TIDIS (Títulos de Devolución de Impuestos) se emiten como forma de devolución de impuestos por parte de la DIAN.'
    },

    {
        id: 'rf5', cat: 'renta_fija', q: '¿Cuál de los siguientes instrumentos NO hace parte del Mercado de Capitales?',
        opts: ['Bonos ordinarios', 'Acciones', 'Papeles comerciales', 'BOCEAS'], ans: 2,
        exp: 'Los papeles comerciales son instrumentos del mercado monetario (corto plazo), no del mercado de capitales.'
    },

    {
        id: 'rf6', cat: 'renta_fija', q: 'Las sociedades administradoras de depósitos centralizados tienen la función de:',
        opts: ['Inscribir títulos en el RNVE', 'La compensación y liquidación de operaciones sobre valores depositados', 'Reportar transferencias al Min. Hacienda', 'Solicitar teneduría de libros a los emisores'], ans: 1,
        exp: 'Los depósitos centralizados de valores tienen como función principal la compensación y liquidación de operaciones sobre valores depositados.'
    },

    {
        id: 'rf7', cat: 'renta_fija', q: 'Los TES (Títulos de Tesorería) son emitidos por:',
        opts: ['El Banco de la República', 'La Superintendencia Financiera', 'El Gobierno Nacional (Ministerio de Hacienda)', 'La BVC'], ans: 2,
        exp: 'Los TES son títulos de deuda pública emitidos por el Gobierno Nacional a través del Ministerio de Hacienda y Crédito Público.'
    },

    {
        id: 'rf8', cat: 'renta_fija', q: 'Un bono que paga cupones periódicos y devuelve el principal al vencimiento se denomina:',
        opts: ['Bono cupón cero', 'Bono bullet', 'Bono amortizable', 'Bono convertible'], ans: 1,
        exp: 'Un bono bullet paga cupones periódicos durante su vida y devuelve todo el principal al vencimiento.'
    },

    {
        id: 'rf9', cat: 'renta_fija', q: 'El precio limpio de un bono es:',
        opts: ['El precio que incluye los intereses causados', 'El precio de mercado sin incluir los intereses causados no pagados', 'El precio nominal del bono', 'El precio spot del bono'], ans: 1,
        exp: 'El precio limpio es el precio de mercado del bono sin incluir los intereses causados (accrued interest) que aún no se han pagado.'
    },

    {
        id: 'rf10', cat: 'renta_fija', q: 'El precio sucio de un bono es igual a:',
        opts: ['Precio limpio + intereses causados', 'Precio limpio - comisiones', 'Valor nominal / tasa de descuento', 'Precio limpio × factor de descuento'], ans: 0,
        exp: 'Precio sucio = Precio limpio + Intereses causados (accrued interest). Es el precio que efectivamente se paga en la transacción.'
    },

    // ═══════════════════ RENTA VARIABLE ═══════════════════
    {
        id: 'rv1', cat: 'renta_variable', q: '¿Qué plazo tiene la BVC para decidir sobre la realización de un martillo?',
        opts: ['5 días', '10 días', '15 días', '20 días'], ans: 1,
        exp: 'La BVC tiene 10 días para decidir sobre la realización de un martillo posterior a la solicitud escrita del vendedor.'
    },

    {
        id: 'rv2', cat: 'renta_variable', q: 'Una oferta de democratización es:',
        opts: ['Una OPA donde el controlante compra acciones', 'Una oferta donde el controlante vende acciones masivamente con amplia publicidad', 'Un martillo de la BVC', 'Una emisión primaria'], ans: 1,
        exp: 'Es cuando el controlante de un emisor ofrece, con amplia publicidad y libre concurrencia, parte o la totalidad de sus acciones.'
    },

    {
        id: 'rv3', cat: 'renta_variable', q: '¿Cuándo el emisor readquiere sus propias acciones, se requiere OPA?',
        opts: ['Sí, siempre', 'No'], ans: 1,
        exp: 'Cuando el emisor readquiere sus propias acciones no se requiere OPA; es una operación permitida directamente.'
    },

    {
        id: 'rv4', cat: 'renta_variable', q: 'El indicador que mide el precio de una acción respecto a sus utilidades por acción se denomina:',
        opts: ['Beta', 'Ratio precio/valor en libros', 'P/E o PER (Price to Earnings Ratio)', 'Dividend Yield'], ans: 2,
        exp: 'El P/E o PER indica cuántas veces está pagando el mercado por las utilidades de la empresa. Se calcula dividiendo el precio por las utilidades por acción.'
    },

    {
        id: 'rv5', cat: 'renta_variable', q: 'Las acciones ordinarias otorgan a sus tenedores derechos de:',
        opts: ['Solo dividendos', 'Solo voto', 'Voto, dividendos y participación en la liquidación de la sociedad', 'Solo participación patrimonial'], ans: 2,
        exp: 'Las acciones ordinarias otorgan derechos de voto en asamblea, recibir dividendos y participar del patrimonio en caso de liquidación.'
    },

    {
        id: 'rv6', cat: 'renta_variable', q: 'Las acciones preferenciales se caracterizan porque:',
        opts: ['Otorgan derecho a voto y dividendo preferencial', 'No otorgan derecho a voto pero sí a un dividendo mínimo preferencial', 'Solo otorgan derecho a voto', 'Otorgan los mismos derechos que las ordinarias'], ans: 1,
        exp: 'Las acciones preferenciales no otorgan derecho a voto en la asamblea, pero a cambio tienen un dividendo mínimo preferencial garantizado.'
    },

    {
        id: 'rv7', cat: 'renta_variable', q: 'El COLCAP es:',
        opts: ['Un indicador de renta fija', 'El índice de capitalización de las 20 acciones más líquidas de la BVC', 'Un indicador de derivados', 'El índice de fondos de inversión colectiva'], ans: 1,
        exp: 'El COLCAP es el índice bursátil de capitalización de las acciones más líquidas listadas en la BVC.'
    },

    {
        id: 'rv8', cat: 'renta_variable', q: 'La capitalización bursátil de una empresa se calcula como:',
        opts: ['Utilidades × número de acciones', 'Precio de la acción × número de acciones en circulación', 'Patrimonio ÷ número de acciones', 'Dividendos × número de períodos'], ans: 1,
        exp: 'Capitalización bursátil = Precio de mercado de la acción × Número total de acciones en circulación.'
    },

    // ═══════════════════ DERIVADOS ═══════════════════
    {
        id: 'd1', cat: 'derivados', q: 'Quien compra una opción Call adquiere:',
        opts: ['El derecho a comprar el subyacente', 'La obligación de comprar el subyacente', 'El derecho a vender el subyacente', 'La obligación de vender el subyacente'], ans: 0,
        exp: 'El comprador de una opción Call adquiere el DERECHO (no la obligación) a comprar el activo subyacente al precio de ejercicio.'
    },

    {
        id: 'd2', cat: 'derivados', q: 'Un derivado entre residentes e intermediarios del mercado cambiario en operaciones NO canalizables debe liquidarse:',
        opts: ['Con cumplimiento financiero o con cumplimiento efectivo', 'Solo con cumplimiento financiero', 'Solo con cumplimiento efectivo', 'Según lo escoja la entidad'], ans: 1,
        exp: 'Los derivados sobre operaciones no canalizables entre residentes e IMC deben liquidarse exclusivamente con cumplimiento financiero (non-delivery).'
    },

    {
        id: 'd3', cat: 'derivados', q: 'Quien vende (emite) una opción Put tiene:',
        opts: ['El derecho a comprar el subyacente', 'La obligación de comprar el subyacente al precio de ejercicio', 'El derecho a vender el subyacente', 'La obligación de vender el subyacente'], ans: 1,
        exp: 'El vendedor de una Put tiene la obligación de comprar el activo subyacente al precio de ejercicio si el comprador ejerce la opción.'
    },

    {
        id: 'd4', cat: 'derivados', q: 'Un contrato forward se diferencia de un futuro en que:',
        opts: ['No se negocia en bolsa (es OTC) y no está estandarizado', 'Siempre se negocia en bolsa', 'Tiene cámara de compensación', 'Es más líquido'], ans: 0,
        exp: 'Los forwards son contratos OTC (Over The Counter), no estandarizados ni negociados en bolsa, a diferencia de los futuros que sí cotizan en bolsa y están estandarizados.'
    },

    {
        id: 'd5', cat: 'derivados', q: 'La prima de una opción es:',
        opts: ['El precio del activo subyacente', 'El precio que paga el comprador por adquirir el derecho de la opción', 'La comisión del intermediario', 'El valor nominal del contrato'], ans: 1,
        exp: 'La prima es el precio que paga el comprador de la opción al vendedor por adquirir el derecho (de compra o venta) sobre el subyacente.'
    },

    {
        id: 'd6', cat: 'derivados', q: 'Una opción que solo puede ejercerse en la fecha de vencimiento se denomina:',
        opts: ['Americana', 'Europea', 'Bermuda', 'Asiática'], ans: 1,
        exp: 'La opción europea solo puede ejercerse en la fecha de vencimiento, mientras que la americana puede ejercerse en cualquier momento hasta el vencimiento.'
    },

    {
        id: 'd7', cat: 'derivados', q: 'Un swap de tasas de interés es:',
        opts: ['Un contrato para intercambiar flujos de efectivo basados en diferentes tasas de interés', 'Un contrato para comprar acciones', 'Un seguro contra default', 'Un tipo de bono'], ans: 0,
        exp: 'Un swap de tasas de interés es un contrato en el que dos partes acuerdan intercambiar flujos de efectivo basados en diferentes tasas (ej: fija por variable).'
    },

    {
        id: 'd8', cat: 'derivados', q: 'El valor intrínseco de una opción Call es:',
        opts: ['Prima - valor temporal', 'Max(Precio subyacente - Strike, 0)', 'Strike - precio subyacente', 'Siempre positivo'], ans: 1,
        exp: 'El valor intrínseco de un Call = Max(S - K, 0), donde S es el precio del subyacente y K es el precio de ejercicio (strike).'
    },

    // ═══════════════════ DIVISAS ═══════════════════
    {
        id: 'di1', cat: 'divisas', q: 'Son intermediarios del Mercado Cambiario (IMC):',
        opts: ['Las empresas exportadoras', 'Los establecimientos de crédito', 'Las empresas importadoras', 'El público en general'], ans: 1,
        exp: 'Los establecimientos de crédito (bancos, corporaciones financieras, compañías de financiamiento) son intermediarios del mercado cambiario.'
    },

    {
        id: 'di2', cat: 'divisas', q: 'El tipo de cambio spot se refiere a:',
        opts: ['La tasa de cambio para entrega futura', 'La tasa de cambio para entrega inmediata (T+0 a T+2)', 'La tasa promedio del último mes', 'La tasa fijada por el Banco de la República'], ans: 1,
        exp: 'El tipo de cambio spot es la tasa para transacciones con entrega inmediata o en muy corto plazo (generalmente T+0 a T+2).'
    },

    {
        id: 'di3', cat: 'divisas', q: 'La TRM (Tasa Representativa del Mercado) es calculada y certificada por:',
        opts: ['El Banco de la República', 'La Superintendencia Financiera de Colombia', 'El Ministerio de Hacienda', 'La BVC'], ans: 1,
        exp: 'La TRM es calculada y certificada diariamente por la Superintendencia Financiera de Colombia con base en las operaciones del mercado spot.'
    },

    {
        id: 'di4', cat: 'divisas', q: 'Las operaciones canalizables obligatoriamente a través del mercado cambiario incluyen:',
        opts: ['Solo importaciones', 'Solo exportaciones', 'Importaciones, exportaciones, inversión extranjera, endeudamiento externo, entre otras', 'Solo inversión extranjera'], ans: 2,
        exp: 'Son canalizables obligatoriamente: importaciones, exportaciones, inversión extranjera directa y de portafolio, endeudamiento externo y sus intereses, entre otras.'
    },

    {
        id: 'di5', cat: 'divisas', q: 'Un forward de divisas NDF (Non-Delivery Forward) se liquida:',
        opts: ['Con entrega física de las divisas', 'Con cumplimiento financiero (la diferencia entre tasa pactada y tasa spot)', 'Mediante compensación en la BVC', 'Con entrega parcial'], ans: 1,
        exp: 'Un NDF se liquida por compensación financiera: se paga solo la diferencia entre la tasa forward pactada y la tasa spot al vencimiento, sin entrega física de divisas.'
    },

    {
        id: 'di6', cat: 'divisas', q: '¿Qué es la posición propia de un IMC en moneda extranjera?',
        opts: ['El total de activos en moneda extranjera', 'La diferencia entre activos y pasivos denominados en moneda extranjera', 'Solo los pasivos en moneda extranjera', 'El promedio de compras y ventas de divisas'], ans: 1,
        exp: 'La posición propia es la diferencia entre todos los activos y pasivos denominados en moneda extranjera, incluyendo los derechos y obligaciones en derivados.'
    },

    // ═══════════════════ PORTAFOLIOS ═══════════════════
    {
        id: 'p1', cat: 'portafolios', q: 'La diversificación de un portafolio busca:',
        opts: ['Maximizar el riesgo', 'Reducir el riesgo no sistemático invirtiendo en activos con baja correlación', 'Eliminar completamente todo riesgo', 'Concentrar la inversión en un solo activo'], ans: 1,
        exp: 'La diversificación reduce el riesgo no sistemático (diversificable) al combinar activos cuyas rentabilidades no están perfectamente correlacionadas.'
    },

    {
        id: 'p2', cat: 'portafolios', q: 'La frontera eficiente de Markowitz representa:',
        opts: ['Los portafolios con mayor riesgo', 'Los portafolios que ofrecen el máximo rendimiento para cada nivel de riesgo', 'Los portafolios más líquidos', 'Los portafolios con menor rendimiento'], ans: 1,
        exp: 'La frontera eficiente es el conjunto de portafolios que maximizan el rendimiento esperado para cada nivel de riesgo dado.'
    },

    {
        id: 'p3', cat: 'portafolios', q: 'El riesgo sistemático o de mercado:',
        opts: ['Puede eliminarse con diversificación', 'No puede eliminarse con diversificación', 'Solo afecta a acciones', 'No existe en renta fija'], ans: 1,
        exp: 'El riesgo sistemático (de mercado) afecta a todo el mercado y NO puede eliminarse mediante diversificación. Solo el riesgo no sistemático es diversificable.'
    },

    // ═══════════════════ FONDOS ═══════════════════
    {
        id: 'f1', cat: 'fondos', q: 'Un Fondo de Inversión Colectiva (FIC) es:',
        opts: ['Una cuenta de ahorros', 'Un mecanismo de captación que reúne aportes de varias personas para invertir colectivamente', 'Un seguro de vida', 'Un título de renta fija'], ans: 1,
        exp: 'Un FIC es un mecanismo de captación o administración de recursos que integra aportes de varias personas para invertirlos colectivamente, obteniendo resultados económicos compartidos.'
    },

    {
        id: 'f2', cat: 'fondos', q: 'Los FIC pueden ser administrados por:',
        opts: ['Solo por bancos', 'Solo por la BVC', 'Sociedades fiduciarias, sociedades comisionistas de bolsa y sociedades administradoras de inversión', 'Cualquier persona natural'], ans: 2,
        exp: 'Los FIC pueden ser administrados por sociedades fiduciarias, comisionistas de bolsa y sociedades administradoras de inversión.'
    },

    {
        id: 'f3', cat: 'fondos', q: 'Los fondos de pensiones obligatorias en Colombia operan bajo el régimen de:',
        opts: ['Reparto simple', 'Prima media con prestación definida y ahorro individual con solidaridad', 'Solo ahorro individual', 'Solo prima media'], ans: 1,
        exp: 'En Colombia coexisten dos regímenes de pensiones: el de prima media con prestación definida (Colpensiones) y el de ahorro individual con solidaridad (AFPs).'
    },

    {
        id: 'f4', cat: 'fondos', q: 'Los multifondos en pensiones obligatorias incluyen los perfiles:',
        opts: ['Solo conservador', 'Conservador, moderado y de mayor riesgo', 'Solo moderado y agresivo', 'Bajo y alto riesgo'], ans: 1,
        exp: 'El esquema de multifondos ofrece tres perfiles: conservador, moderado y de mayor riesgo, permitiendo al afiliado elegir según su perfil de riesgo y cercanía al retiro.'
    },
,

    {
        id: 'e8', cat: 'etica', q: "Según el Decreto 2555 de 2010, ¿cuáles son los principios orientadores para el manejo de conflictos de interés?",
        opts: ["Transparencia del mercado, Confidencialidad y reserva, Uso adecuado de información, Lealtad, Profesionalismo, Respeto de la ley", "Solo transparencia y lealtad", "Solo confidencialidad y profesionalismo", "Solo respeto de la ley"], ans: 0,
        exp: "El Decreto 2555 establece 6 principios: Transparencia del mercado, Confidencialidad y reserva, Uso adecuado de información, Lealtad, Profesionalismo y Respeto de la ley."
    },

    {
        id: 'e9', cat: 'etica', q: "¿Cuándo se considera que existe un conflicto de intereses en el mercado de valores?",
        opts: ["Cuando hay múltiples roles en una empresa", "Cuando una persona debe tomar una decisión entre alternativas con intereses incompatibles y no puede satisfacer uno sin afectar al otro", "Cuando dos empresas compiten", "Cuando se reciben regalos"], ans: 1,
        exp: "Hay conflicto de intereses cuando la persona enfrenta alternativas con intereses incompatibles: utilidad propia vs cliente, tercero vinculado vs cliente, fondo vs cliente, o utilidad de operación vs transparencia."
    },

    {
        id: 'e10', cat: 'etica', q: "La información privilegiada según la guía de ética es aquella que:",
        opts: ["Es de carácter público", "Es concreta, no ha sido divulgada al público, y un inversionista prudente la habría tenido en cuenta al negociar valores", "Es confidencial pero irrelevante para el mercado", "Ha sido filtrada en redes sociales"], ans: 1,
        exp: "La información privilegiada es de carácter concreto, no pública, que de haberlo sido, un inversionista medianamente diligente la habría considerado."
    },

    {
        id: 'e11', cat: 'etica', q: "Según la guía de ética, ¿qué debe hacer un profesional que se encuentra ante un potencial conflicto de interés?",
        opts: ["Resolverlo por su cuenta", "Revelarlo al área encargada de ética, abstenerse de participar en la decisión y no acceder a más información", "Ignorarlo si no hay prohibición expresa", "Consultar con un compañero de trabajo"], ans: 1,
        exp: "Debe revelar la situación, abstenerse de participar en la toma de decisión, y no acceder ni entregar información adicional."
    },

    {
        id: 'e12', cat: 'etica', q: "La Ley 1778 de 2016 (Ley antisoborno) se enfoca principalmente en:",
        opts: ["Sancionar al receptor del soborno", "Sancionar a la parte oferente de la conducta de soborno transnacional", "Regular los mercados financieros", "Establecer normas contables"], ans: 1,
        exp: "La Ley 1778 está centrada en sancionar a la parte oferente de la conducta de soborno transnacional."
    },

    {
        id: 'e13', cat: 'etica', q: "¿Qué es el soborno transnacional según la Ley 1778?",
        opts: ["Dar dinero a un funcionario público colombiano", "Dar, ofrecer o prometer a un servidor público extranjero sumas de dinero o beneficios a cambio de que realice, omita o retarde actos relacionados con sus funciones", "Recibir comisiones de empresas extranjeras", "Evadir impuestos internacionales"], ans: 1,
        exp: "El soborno transnacional es dar, ofrecer o prometer a servidor público extranjero dinero, objetos de valor o beneficios a cambio de acciones u omisiones en sus funciones."
    },

    {
        id: 'e14', cat: 'etica', q: "La Ley 1748 de 2014 sobre transparencia de información financiera creó:",
        opts: ["El SIMEV", "El Valor Total Unificado (VTU)", "La AMV", "El RNVE"], ans: 1,
        exp: "La Ley 1748 creó el VTU, un valor único expresado como porcentaje efectivo anual que indica el costo total real para el cliente financiero."
    },

    {
        id: 'e15', cat: 'etica', q: "Según la guía de ética, ante una oferta de regalo en efectivo de un cliente, ¿cuál es la opción recomendada?",
        opts: ["Aceptarlo si no hay prohibición", "Rechazarlo e informar al área de ética de la organización", "Aceptarlo solo si el monto es menor a 1 SMLV", "Donarlo a caridad"], ans: 1,
        exp: "La opción recomendada es rechazar el regalo e informar al equipo de ética para que el caso sirva de ejemplo sobre el tono ético adecuado."
    },

    {
        id: 'e16', cat: 'etica', q: "Un profesional que cambia de empresa en el sector financiero, ¿puede llevarse el portafolio de clientes?",
        opts: ["Sí, si los consiguió personalmente", "No, es contrario a la ética aunque no haya prohibición expresa, pues los clientes son de la entidad", "Sí, si el código de ética no lo prohíbe expresamente", "Depende del acuerdo con el nuevo empleador"], ans: 1,
        exp: "No es ético llevarse clientes al cambiar de empresa. Los clientes forman parte de la cartera de la entidad, no del portafolio personal del empleado."
    },

    {
        id: 'e17', cat: 'etica', q: "La manipulación de precios del mercado es:",
        opts: ["Una estrategia legítima de trading", "Una práctica ilegal que busca influir artificialmente en los precios para obtener beneficios particulares", "Una forma de arbitraje", "Una operación permitida por la AMV"], ans: 1,
        exp: "La manipulación de precios es una práctica ilegal o no ética que busca influir artificialmente en los precios de activos financieros para obtener beneficios."
    },

    {
        id: 'e18', cat: 'etica', q: "El mal uso de los recursos del cliente se define como:",
        opts: ["Invertirlos en renta fija", "Dar un uso no autorizado, inapropiado o diferente a la intención del cliente", "Cobrar comisiones regulares", "Informar sobre sus inversiones"], ans: 1,
        exp: "El mal uso de recursos del cliente es darles un uso no autorizado, inapropiado o diferente a la intención del cliente."
    },

    {
        id: 'f5', cat: 'fondos', q: "¿Qué ley creó los fondos de pensiones del régimen de ahorro individual con solidaridad (RAIS)?",
        opts: ["Ley 50 de 1990", "Ley 100 de 1993", "Ley 964 de 2005", "Ley 789 de 2002"], ans: 1,
        exp: "La Ley 100 de 1993 creó los fondos de pensiones del RAIS administrados por las AFP."
    },

    {
        id: 'f6', cat: 'fondos', q: "¿Cuál es la diferencia principal entre el RAIS y el RPM respecto al destino del aporte?",
        opts: ["Ambos van a un fondo común", "En el RAIS va a cuenta individual; en el RPM va a fondo común de reparto", "En el RPM va a cuenta individual", "No hay diferencia"], ans: 1,
        exp: "En el RAIS los aportes van a una cuenta de ahorro pensional individual; en el RPM van a un fondo común de reparto."
    },

    {
        id: 'f7', cat: 'fondos', q: "En el RAIS, ¿a qué edad se puede acceder a la pensión de vejez?",
        opts: ["57 mujeres, 62 hombres siempre", "A cualquier edad si el capital permite financiar el 110% de una pensión de salario mínimo", "Solo a los 65 años", "A los 60 años"], ans: 1,
        exp: "En el RAIS no hay edad fija; se puede pensionar a cualquier edad si el capital acumulado permite financiar al menos el 110% de un SMMLV."
    },

    {
        id: 'f8', cat: 'fondos', q: "¿Quién administra el régimen de prima media (RPM)?",
        opts: ["Las AFP privadas", "Colpensiones", "La Superintendencia Financiera", "El Banco de la República"], ans: 1,
        exp: "Colpensiones es la administradora del RPM, empresa industrial y comercial del Estado vinculada al Ministerio del Trabajo."
    },

    {
        id: 'f9', cat: 'fondos', q: "En el RAIS, si el afiliado fallece sin beneficiarios, el dinero de su cuenta:",
        opts: ["Se pierde", "Forma parte de la masa sucesoral (es heredable)", "Va al Estado", "Lo retiene la AFP"], ans: 1,
        exp: "En el RAIS, el dinero restante es heredable (masa sucesoral). En el RPM no es heredable."
    },

    {
        id: 'f10', cat: 'fondos', q: "¿Cuáles son las modalidades de pensión disponibles en el RAIS?",
        opts: ["Solo renta vitalicia", "Renta vitalicia, retiro programado, retiro programado con renta vitalicia diferida, y otras modalidades combinadas", "Solo retiro programado", "Solo una modalidad como en el RPM"], ans: 1,
        exp: "El RAIS ofrece múltiples modalidades: renta vitalicia, retiro programado, retiro programado con renta vitalicia diferida, renta temporal variable, entre otras."
    },

    {
        id: 'f11', cat: 'fondos', q: "Los tres pilares del sistema de protección a la vejez en Colombia son:",
        opts: ["Público, privado y mixto", "Subsidiado, contributivo y voluntario", "Obligatorio, complementario y especial", "Nacional, departamental y municipal"], ans: 1,
        exp: "El sistema está conformado por los pilares subsidiado (bajos ingresos), contributivo (cotizaciones obligatorias) y voluntario (ahorro adicional)."
    },

    {
        id: 'f12', cat: 'fondos', q: "El Sistema General de Pensiones (SGP) ampara a sus afiliados contra las contingencias de:",
        opts: ["Solo vejez", "Solo vejez e invalidez", "Vejez, invalidez y muerte", "Vejez, desempleo y enfermedad"], ans: 2,
        exp: "El SGP ampara contra tres contingencias: vejez, invalidez y muerte."
    },

    {
        id: 'f13', cat: 'fondos', q: "¿Qué porcentaje de la cotización se destina a la garantía estatal de pensión mínima en el RAIS?",
        opts: ["0.5%", "1.0%", "1.5%", "2.0%"], ans: 2,
        exp: "El 1.5% de la cotización se destina a la garantía estatal de pensión mínima, administrada por las mismas AFP."
    },

    {
        id: 'f14', cat: 'fondos', q: "Los Beneficios Económicos Periódicos (BEPS) son:",
        opts: ["Pensiones completas", "Prestaciones semicontributivas del pilar subsidiado para población de menores ingresos", "Bonos del gobierno", "Seguros de vida"], ans: 1,
        exp: "Los BEPS son prestaciones semicontributivas donde el valor del beneficio excede la contribución del beneficiario, dirigidos a población de bajos ingresos."
    },

    {
        id: 'f15', cat: 'fondos', q: "Si un afiliado al RAIS no cumple los requisitos de pensión, tiene derecho a:",
        opts: ["Nada", "Devolución de saldos (aportes + rendimientos), trasladados a BEPS", "Solo devolución del 50%", "Una pensión reducida"], ans: 1,
        exp: "Tiene derecho a la devolución de saldos constituidos por aportes más rendimientos, que se trasladan a BEPS salvo manifestación contraria en 6 meses."
    },

    {
        id: 'f16', cat: 'fondos', q: "En el RPM, el monto de la pensión oscila entre:",
        opts: ["50% y 100% del IBL", "65% y 80% del IBL del afiliado", "45% y 90% del IBL", "Un monto fijo igual al SMMLV"], ans: 1,
        exp: "El monto oscila entre 65% y 55% del IBL (decreciente según ingresos), incrementándose 1.5% por cada 50 semanas adicionales sobre 1.300, sin superar el 80%."
    },

    {
        id: 'f17', cat: 'fondos', q: "¿Cuántas semanas mínimas se requieren en el RPM para acceder a pensión de vejez?",
        opts: ["1.000 semanas", "1.150 semanas", "1.300 semanas", "1.500 semanas"], ans: 2,
        exp: "Se requieren mínimo 1.300 semanas de cotización para acceder a la pensión de vejez en el RPM."
    },

    {
        id: 'p4', cat: 'portafolios', q: "¿Qué es el Investment Policy Statement (IPS)?",
        opts: ["Un reporte de rendimientos", "Un documento que describe la estrategia, tolerancia al riesgo, horizonte de tiempo y objetivos de un plan de inversión", "Un contrato de compraventa de valores", "Un informe regulatorio"], ans: 1,
        exp: "El IPS es un documento que describe la estrategia de inversión, tolerancia al riesgo, horizonte de tiempo, tipos de activos preferidos y metas de largo plazo."
    },

    {
        id: 'p5', cat: 'portafolios', q: "Las restricciones de inversión incluyen:",
        opts: ["Solo liquidez", "Necesidades de liquidez, horizonte de tiempo, consideraciones fiscales, factores legales/regulatorios y circunstancias únicas", "Solo factores legales", "Solo el horizonte de tiempo"], ans: 1,
        exp: "Las cinco restricciones principales son: liquidez, horizonte de tiempo, consideraciones fiscales, factores legales/regulatorios, y circunstancias únicas del inversionista."
    },

    {
        id: 'p6', cat: 'portafolios', q: "¿Qué es el asset allocation estratégico?",
        opts: ["Decidir cuándo comprar o vender un activo específico", "La distribución fundamental entre clases de activos (ej: 60% acciones, 40% bonos) basada en objetivos de largo plazo", "La selección de un solo activo", "El análisis técnico de precios"], ans: 1,
        exp: "El asset allocation estratégico establece la distribución fundamental entre clases de activos basándose en los objetivos de inversión a largo plazo."
    },

    {
        id: 'p7', cat: 'portafolios', q: "El perfil de riesgo 'moderado' describe a un inversionista que:",
        opts: ["Solo busca proteger patrimonio", "Considera inversiones de riesgo medio con rendimientos aceptables, incluyendo riesgos de crédito, liquidez y reinversión", "Busca las inversiones más arriesgadas", "Solo invierte en renta fija"], ans: 1,
        exp: "El inversionista moderado tiene perfil intermedio entre conservador y arriesgado, acepta riesgos medios por rendimientos aceptables."
    },

    {
        id: 'p8', cat: 'portafolios', q: "La diferencia entre security selection y asset allocation es:",
        opts: ["Son lo mismo", "Asset allocation define la distribución entre clases de activos; security selection elige los instrumentos específicos dentro de cada clase", "Security selection es más importante", "Asset allocation solo aplica a acciones"], ans: 1,
        exp: "Asset allocation define qué proporción va a cada clase de activo; security selection elige los instrumentos específicos dentro de cada clase."
    },

    {
        id: 'p9', cat: 'portafolios', q: "El riesgo de liquidez en portafolios se refiere a:",
        opts: ["El riesgo de perder dinero por cambio en tasas", "La posibilidad de no poder transformar un activo en efectivo sin pérdida significativa", "El riesgo de impago", "El riesgo operativo"], ans: 1,
        exp: "El riesgo de liquidez es la posibilidad de no poder convertir un activo en efectivo, es decir, no poder liquidarlo en el mercado sin pérdida."
    },

    {
        id: 'p10', cat: 'portafolios', q: "Los factores de riesgo de estilo incluyen:",
        opts: ["Solo crecimiento económico", "Valor (value), volatilidad mínima, momentum, calidad y tamaño", "Solo inflación", "Solo tasas de interés"], ans: 1,
        exp: "Los factores de estilo son: valor, volatilidad mínima, momentum, calidad y tamaño (compañías pequeñas)."
    },

    {
        id: 'p11', cat: 'portafolios', q: "El proceso de administración de portafolios sigue el orden:",
        opts: ["Inversión, conocimiento, seguimiento, perfil", "Conocimiento del cliente, generación de perfil, creación y ejecución de estrategia, seguimiento", "Seguimiento, inversión, conocimiento, perfil", "Perfil, inversión, seguimiento, conocimiento"], ans: 1,
        exp: "El orden es: 1) Conocimiento del cliente, 2) Generación del perfil, 3) Creación y ejecución de la estrategia de inversión, 4) Seguimiento."
    },

    {
        id: 'f18', cat: 'fondos', q: "Los FIC abiertos se caracterizan porque:",
        opts: ["Solo permiten redención al vencimiento", "Permiten la redención de participaciones en cualquier momento", "Tienen un número fijo de participaciones", "Solo se negocian en bolsa"], ans: 1,
        exp: "Los FIC abiertos permiten a los inversionistas redimir sus participaciones en cualquier momento."
    },

    {
        id: 'f19', cat: 'fondos', q: "Los FIC cerrados se caracterizan porque:",
        opts: ["La redención se realiza al término del plazo previsto para el fondo", "Se pueden redimir en cualquier momento", "No tienen plazo definido", "Solo invierten en renta variable"], ans: 0,
        exp: "Los FIC cerrados solo permiten la redención de participaciones al finalizar el plazo previsto para el fondo."
    },

    {
        id: 'f20', cat: 'fondos', q: "¿Qué entidades pueden administrar los Fondos de Inversión Colectiva?",
        opts: ["Solo bancos comerciales", "Sociedades fiduciarias, comisionistas de bolsa y sociedades administradoras de inversión", "Solo la BVC", "Solo las AFP"], ans: 1,
        exp: "Los FIC pueden ser administrados por sociedades fiduciarias, sociedades comisionistas de bolsa y sociedades administradoras de inversión."
    },

    {
        id: 'rf11', cat: 'renta_fija', q: "La duración de un bono mide:",
        opts: ["El plazo al vencimiento", "La sensibilidad del precio del bono a cambios en las tasas de interés", "La tasa cupón", "El valor nominal"], ans: 1,
        exp: "La duración mide la sensibilidad del precio del bono ante cambios en las tasas de interés; a mayor duración, mayor sensibilidad."
    },

    {
        id: 'rf12', cat: 'renta_fija', q: "Un bono cupón cero:",
        opts: ["Paga cupones periódicos", "No paga cupones; se emite con descuento y se redime a valor nominal al vencimiento", "Paga cupones variables", "Solo existe en renta variable"], ans: 1,
        exp: "Un bono cupón cero no paga cupones periódicos; se emite a descuento y el inversionista recibe el valor nominal al vencimiento."
    },

    {
        id: 'rf13', cat: 'renta_fija', q: "Las cédulas hipotecarias son títulos emitidos por:",
        opts: ["El Gobierno Nacional", "Establecimientos de crédito para financiar construcción de vivienda", "La BVC", "FINAGRO"], ans: 1,
        exp: "Las cédulas hipotecarias son emitidas por establecimientos de crédito respaldadas por créditos hipotecarios para financiar vivienda."
    },

    {
        id: 'rf14', cat: 'renta_fija', q: "La convexidad de un bono describe:",
        opts: ["La relación lineal entre precio y tasa", "La curvatura de la relación precio-rendimiento, mejorando la estimación de cambios de precio más allá de la duración", "El plazo del bono", "El riesgo de crédito"], ans: 1,
        exp: "La convexidad captura la curvatura de la relación precio-rendimiento, complementando la duración para estimar mejor los cambios de precio."
    },

    {
        id: 'd9', cat: 'derivados', q: "La Cámara de Riesgo Central de Contraparte (CRCC) tiene como función:",
        opts: ["Emitir derivados", "Interponerse como contraparte en operaciones, mitigando el riesgo de incumplimiento", "Fijar precios de los contratos", "Regular el mercado de derivados"], ans: 1,
        exp: "La CRCC se interpone como contraparte de las operaciones, garantizando el cumplimiento y mitigando el riesgo de contraparte."
    },

    {
        id: 'd10', cat: 'derivados', q: "Un swap de divisas implica:",
        opts: ["Solo intercambio de tasas de interés", "El intercambio de principal y pagos de intereses en diferentes monedas", "Solo compra de divisas spot", "Solo un forward de divisas"], ans: 1,
        exp: "Un swap de divisas involucra el intercambio de principal y flujos de intereses denominados en diferentes monedas entre las partes."
    },

    {
        id: 'd11', cat: 'derivados', q: "Una opción 'in the money' (ITM) para un Call significa que:",
        opts: ["El precio del subyacente es menor que el strike", "El precio del subyacente es mayor que el strike", "Son iguales", "La opción ha vencido"], ans: 1,
        exp: "Un Call está ITM cuando el precio del subyacente supera el precio de ejercicio (strike), es decir, tiene valor intrínseco positivo."
    },

    {
        id: 'di7', cat: 'divisas', q: "¿Qué es el mercado libre en el contexto cambiario colombiano?",
        opts: ["Un mercado sin regulación", "Las operaciones de cambio que no deben canalizarse obligatoriamente a través del mercado cambiario", "El mercado negro", "Un mercado solo para bancos"], ans: 1,
        exp: "El mercado libre comprende las operaciones de cambio que no están obligadas a canalizarse a través de intermediarios del mercado cambiario."
    },

    {
        id: 'di8', cat: 'divisas', q: "Los profesionales de compra y venta de divisas son:",
        opts: ["Cualquier persona", "Residentes autorizados por la DIAN para realizar operaciones de compra y venta de divisas de manera profesional", "Solo los bancos", "Solo casas de cambio internacionales"], ans: 1,
        exp: "Son residentes autorizados que realizan profesionalmente operaciones de compra y venta de divisas en efectivo y cheques de viajero."
    },

    {
        id: 'ri9', cat: 'riesgos', q: "El Value at Risk (VaR) mide:",
        opts: ["La rentabilidad esperada de un portafolio", "La máxima pérdida esperada en un horizonte de tiempo dado con un nivel de confianza determinado", "El rendimiento promedio", "La tasa de descuento"], ans: 1,
        exp: "El VaR estima la máxima pérdida potencial que un portafolio puede experimentar en un periodo dado con un nivel de confianza específico."
    },

    {
        id: 'ri10', cat: 'riesgos', q: "El riesgo de lavado de activos y financiación del terrorismo (LA/FT) se gestiona a través del sistema:",
        opts: ["SARC", "SARO", "SARLAFT", "SAR"], ans: 2,
        exp: "El SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo) es el sistema regulado para gestionar este riesgo."
    },

    {
        id: 'ri11', cat: 'riesgos', q: "La provisión por riesgo de crédito se realiza cuando:",
        opts: ["Se espera que el mercado suba", "Existe probabilidad de incumplimiento de la contraparte en sus obligaciones", "Se diversifica el portafolio", "Se adquieren nuevos activos"], ans: 1,
        exp: "Las provisiones se constituyen cuando hay probabilidad de que la contraparte incumpla total o parcialmente sus obligaciones."
    },

    {
        id: 'm9', cat: 'matematicas', q: "La tasa de interés real se calcula aproximadamente como:",
        opts: ["Tasa nominal + inflación", "Tasa nominal - inflación", "Tasa nominal × inflación", "Tasa nominal ÷ inflación"], ans: 1,
        exp: "La tasa de interés real ≈ tasa nominal - tasa de inflación (fórmula aproximada de Fisher)."
    },

    {
        id: 'm10', cat: 'matematicas', q: "Si un CDT paga 8% EA y la inflación es 4%, la tasa real aproximada es:",
        opts: ["12%", "4%", "2%", "32%"], ans: 1,
        exp: "Tasa real ≈ 8% - 4% = 4%. La fórmula exacta de Fisher da (1.08/1.04)-1 ≈ 3.85%."
    },

    {
        id: 'm11', cat: 'matematicas', q: "La TIR (Tasa Interna de Retorno) de una inversión es:",
        opts: ["La tasa a la cual el VPN es máximo", "La tasa de descuento que hace que el VPN sea igual a cero", "La tasa del mercado", "La tasa de inflación"], ans: 1,
        exp: "La TIR es la tasa de descuento que iguala el valor presente de los flujos futuros con la inversión inicial, haciendo VPN = 0."
    },

    {
        id: 'r21', cat: 'regulacion', q: "La Superintendencia Financiera de Colombia (SFC) tiene como funciones:",
        opts: ["Solo emitir valores", "Inspección, vigilancia y control de las entidades del sistema financiero y del mercado de valores", "Solo aprobar fusiones", "Solo fijar tasas de interés"], ans: 1,
        exp: "La SFC ejerce inspección, vigilancia y control sobre entidades del sistema financiero, mercado de valores y asegurador."
    },

    {
        id: 'r22', cat: 'regulacion', q: "El Depósito Centralizado de Valores (DECEVAL) tiene como función principal:",
        opts: ["Emitir títulos valores", "Recibir en depósito valores inscritos en el RNVE, administrarlos y facilitar su compensación y liquidación", "Fijar precios de mercado", "Regular a los emisores"], ans: 1,
        exp: "DECEVAL recibe en depósito valores inscritos, los administra mediante registros electrónicos y facilita la compensación y liquidación."
    },

    {
        id: 'r23', cat: 'regulacion', q: "¿Qué entidad administra el RNVE (Registro Nacional de Valores y Emisores)?",
        opts: ["La AMV", "La BVC", "La Superintendencia Financiera de Colombia", "El Ministerio de Hacienda"], ans: 2,
        exp: "El RNVE es administrado por la Superintendencia Financiera de Colombia, donde se inscriben los valores y sus emisores."
    },

    {
        id: 'a11', cat: 'autorregulacion', q: "Las tres funciones principales de la AMV son:",
        opts: ["Legislativa, ejecutiva y judicial", "Normativa, supervisión y disciplinaria", "Administrativa, contable y financiera", "Regulatoria, monetaria y cambiaria"], ans: 1,
        exp: "Las tres funciones de la AMV son: normativa (expedir reglamentos), supervisión (verificar cumplimiento) y disciplinaria (investigar y sancionar)."
    },

    {
        id: 'a12', cat: 'autorregulacion', q: "La función de supervisión de la AMV consiste en:",
        opts: ["Expedir reglamentos", "Verificar el cumplimiento de las normas del mercado de valores, reglamentos de autorregulación y mejores prácticas", "Imponer sanciones", "Emitir valores"], ans: 1,
        exp: "La función de supervisión consiste en verificar el cumplimiento de normas del mercado, reglamentos de autorregulación y prácticas recomendadas."
    },

    {
        id: 'ae9', cat: 'analisis_economico', q: "La capitalización bursátil como porcentaje del PIB es un indicador de:",
        opts: ["Inflación", "Profundización o tamaño del mercado de valores", "Riesgo de crédito", "Política monetaria"], ans: 1,
        exp: "La capitalización bursátil/PIB mide la profundización del mercado de valores, indicando qué tan grande es el mercado respecto a la economía."
    },

    {
        id: 'ae10', cat: 'analisis_economico', q: "Los proveedores de infraestructura del mercado de valores incluyen:",
        opts: ["Solo la BVC", "BVC, sistemas de negociación, depósitos centralizados de valores, cámaras de compensación y sistemas de registro", "Solo DECEVAL", "Solo la CRCC"], ans: 1,
        exp: "Los proveedores de infraestructura incluyen bolsas, sistemas de negociación, depósitos centralizados, cámaras de compensación y sistemas de registro."
    }
,

    {
        id: 'rv9', cat: 'renta_variable', q: "La rentabilidad de una acción se obtiene por:",
        opts: ["Solo dividendos", "Solo valorización", "Dividendos y valorización del precio", "Solo derechos de suscripción"], ans: 2,
        exp: "La rentabilidad se obtiene por dos vías: el dividendo (reparto de utilidades) y la valorización o capitalización del precio de la acción."
    },

    {
        id: 'rv10', cat: 'renta_variable', q: "Las acciones preferenciales se caracterizan por:",
        opts: ["Dar derecho a voto siempre", "Dar un dividendo preferencial previamente establecido, sin derecho a voto regular", "Ser las más riesgosas", "No pagar dividendos"], ans: 1,
        exp: "Las preferenciales dan derecho a un dividendo preferencial previamente establecido, sin derecho a voto (salvo excepciones previstas en la Ley 222 de 1995)."
    },

    {
        id: 'rv11', cat: 'renta_variable', q: "Las acciones privilegiadas se diferencian de las preferenciales porque:",
        opts: ["No dan dividendo", "Pueden otorgar derechos políticos (voto) en la Asamblea de accionistas", "Solo existen en mercados internacionales", "Son al portador"], ans: 1,
        exp: "La acción privilegiada, a diferencia de la preferencial, puede otorgar derechos políticos (voto) en la Asamblea, además de beneficios económicos preestablecidos."
    },

    {
        id: 'rv12', cat: 'renta_variable', q: "Los ADR (American Depositary Receipts) son:",
        opts: ["Acciones colombianas listadas en la BVC", "Títulos negociables emitidos por un banco norteamericano que representan acciones de una sociedad extranjera", "Fondos de inversión colectiva", "Derivados de renta variable"], ans: 1,
        exp: "Los ADR son títulos emitidos por un banco de EE.UU. que representan acciones de empresas extranjeras, permitiendo invertir en mercados internacionales bajo el marco legal estadounidense."
    },

    {
        id: 'rv13', cat: 'renta_variable', q: "El Mercado Global Colombiano (MGC) permite:",
        opts: ["Negociar títulos de deuda pública", "Comprar y vender títulos de renta variable extranjeros a través de la BVC y comisionistas", "Operar derivados OTC", "Solo inversiones institucionales"], ans: 1,
        exp: "El MGC permite a inversionistas colombianos acceder a renta variable internacional a través de la BVC, negociados en pesos colombianos."
    },

    {
        id: 'rv14', cat: 'renta_variable', q: "El valor nominal de una acción se calcula como:",
        opts: ["Patrimonio neto / número de acciones", "Capital social / número de acciones emitidas", "Precio de mercado × número de acciones", "Dividendo / tasa de retorno"], ans: 1,
        exp: "Valor nominal = Capital social / número de acciones emitidas. Es el valor asignado desde la constitución y no puede venderse por debajo de este en la emisión."
    },

    {
        id: 'rv15', cat: 'renta_variable', q: "La capitalización bursátil de una empresa se calcula como:",
        opts: ["Patrimonio neto / acciones emitidas", "Precio por acción × número de acciones emitidas", "Utilidad neta × P/E ratio", "Dividendo × número de acciones"], ans: 1,
        exp: "Capitalización bursátil = precio de cotización por acción × número de acciones emitidas. Representa el valor de mercado total de la empresa."
    },

    {
        id: 'rv16', cat: 'renta_variable', q: "Un inversionista profesional según el Decreto 2555 debe cumplir:",
        opts: ["Solo tener más de 18 años", "Patrimonio ≥ 157.878,12 UVT y al menos una condición adicional (portafolio, operaciones, certificación AMV, etc.)", "Solo ser empleado del sector financiero", "Solo tener más de 10 años de experiencia"], ans: 1,
        exp: "El inversionista profesional requiere patrimonio mínimo de 157.878,12 UVT más al menos una condición como portafolio significativo, operaciones recientes, certificación AMV, o estar vigilado por la SFC."
    },

    {
        id: 'rv17', cat: 'renta_variable', q: "Las acciones sin dividendo son aquellas que:",
        opts: ["Nunca pagan dividendos", "Se entregan como pago en especie de dividendos (acciones adicionales) con aprobación del 80% de la Asamblea", "Solo se negocian en el MGC", "Son emitidas por el Gobierno"], ans: 1,
        exp: "Con aprobación del 80% de la Asamblea, se puede pagar dividendos en acciones adicionales. Estas acciones no pagan dividendo futuro según las condiciones de emisión."
    },

    {
        id: 'rv18', cat: 'renta_variable', q: "En Colombia, todas las acciones que cotizan en la BVC son de tipo:",
        opts: ["Al portador", "Nominativo", "Mixto", "Digital"], ans: 1,
        exp: "Según la Decisión 291 de 1991 de la CAN, todas las acciones en Colombia deben ser nominativas, requiriendo inscripción en el libro de accionistas."
    },

    {
        id: 'di9', cat: 'divisas', q: "Las operaciones que deben canalizarse obligatoriamente por el mercado cambiario incluyen:",
        opts: ["Solo importaciones", "Importación/exportación, endeudamiento externo, inversiones de capital del exterior, inversiones financieras en el exterior, avales/garantías en ME y derivados", "Solo operaciones superiores a USD 10.000", "Solo transferencias entre bancos"], ans: 1,
        exp: "El Art. 41 de la Resolución Externa 1 de 2018 del BanRep lista estas operaciones como de obligatoria canalización."
    },

    {
        id: 'di10', cat: 'divisas', q: "Los exportadores colombianos deben canalizar las divisas de sus exportaciones en un plazo máximo de:",
        opts: ["30 días", "6 meses desde la fecha de recepción", "1 año", "Sin límite de tiempo"], ans: 1,
        exp: "El Art. 74 de la Resolución Externa 1 de 2018 establece que los exportadores deben canalizar sus divisas en máximo 6 meses desde la recepción."
    },

    {
        id: 'di11', cat: 'divisas', q: "Las cuentas de compensación son:",
        opts: ["Cuentas de ahorro en Colombia", "Cuentas bancarias en moneda extranjera en el exterior, registradas ante el BanRep, para operaciones cambiarias", "Cuentas del tesoro nacional", "Cuentas de corretaje"], ans: 1,
        exp: "Son cuentas bancarias en ME en entidades del exterior, registradas ante el BanRep bajo el mecanismo de compensación para operaciones obligatoriamente canalizables."
    },

    {
        id: 'di12', cat: 'divisas', q: "La cuenta de compensación debe registrarse ante el BanRep a más tardar dentro de:",
        opts: ["La semana siguiente", "El mes siguiente a la primera operación canalizable", "Los 3 meses siguientes", "El año siguiente"], ans: 1,
        exp: "Debe registrarse a más tardar dentro del mes calendario siguiente a la primera operación obligatoriamente canalizable."
    },

    {
        id: 'di13', cat: 'divisas', q: "En 1999, el BanRep adoptó para el peso colombiano el régimen de:",
        opts: ["Tasa de cambio fija", "Tasa de cambio flexible", "Banda cambiaria", "Paridad fija con el dólar"], ans: 1,
        exp: "En 1999, el BanRep adoptó el régimen de tasa de cambio flexible junto con la estrategia de inflación objetivo (meta: 3% con banda de ±1%)."
    },

    {
        id: 'di14', cat: 'divisas', q: "Cuando la tasa de cambio sube libremente (depreciación), el efecto sobre la inflación es:",
        opts: ["La disminuye", "La incrementa", "No tiene efecto", "La estabiliza"], ans: 1,
        exp: "Una libre fluctuación al alza de la TC incrementa la inflación, dado que encarece los bienes importados."
    },

    {
        id: 'rf15', cat: 'renta_fija', q: "El precio sucio de un bono se define como:",
        opts: ["El precio sin intereses", "El valor presente del bono incluyendo intereses acumulados (cupón corrido)", "El precio de emisión", "El valor nominal"], ans: 1,
        exp: "Precio sucio = precio limpio + intereses acumulados. Es el valor que efectivamente gira el comprador al vendedor."
    },

    {
        id: 'rf16', cat: 'renta_fija', q: "Si la TIR de negociación es menor que la tasa facial del bono, el bono se negocia:",
        opts: ["Al descuento", "A la par", "Con prima (precio limpio > 100%)", "Sin valor"], ans: 2,
        exp: "Cuando TIR < tasa facial, el valor presente (precio limpio) es mayor a 100%, lo que significa que el bono se negocia con prima."
    },

    {
        id: 'rf17', cat: 'renta_fija', q: "El strip de TES consiste en:",
        opts: ["La consolidación de varios TES en uno", "La separación de un TES en componentes negociables individualmente: el principal y los cupones", "La emisión de nuevos TES", "La conversión de TES a UVR"], ans: 1,
        exp: "El strip separa un TES tasa fija en el componente principal (capital) y los cupones periódicos, cada uno negociado como título cero cupón independiente."
    },

    {
        id: 'rf18', cat: 'renta_fija', q: "Los TES se negocian por:",
        opts: ["Solo precio sucio", "Solo valor nominal", "Precio limpio o TIR, en los sistemas de la BVC y el BanRep", "Solo tasa facial"], ans: 2,
        exp: "Los TES estandarizados se negocian por precio limpio o por TIR en los sistemas transaccionales de la BVC y el Banco de la República."
    },

    {
        id: 'rf19', cat: 'renta_fija', q: "La DTF es una tasa de referencia de tipo:",
        opts: ["Efectiva anual", "Nominal anual trimestre anticipado", "Nominal anual mes vencido", "Real anual"], ans: 1,
        exp: "La DTF es una tasa nominal anual trimestre anticipado (NATA). Los spreads sobre DTF se expresan en la misma naturaleza."
    },

    {
        id: 'rf20', cat: 'renta_fija', q: "Un bono negociado 'al descuento' tiene:",
        opts: ["Precio limpio mayor a 100%", "Precio limpio menor a 100%, porque la TIR es mayor que la tasa facial", "Precio limpio igual a 100%", "No tiene precio"], ans: 1,
        exp: "Al descuento significa que el precio limpio < 100%. Ocurre cuando la TIR (tasa de negociación) es mayor a la tasa facial."
    },

    {
        id: 'rf21', cat: 'renta_fija', q: "El interés acumulado (cupón corrido) se calcula como:",
        opts: ["Cupón × (días causados / días periodicidad de pago)", "Precio sucio × TIR", "Valor nominal / plazo", "Principal × tasa facial"], ans: 0,
        exp: "Interés acumulado = Cupón × (días causados desde último pago / días del periodo de pago)."
    },

    {
        id: 'rf22', cat: 'renta_fija', q: "Los bonos globales (dual currency) se caracterizan por:",
        opts: ["Solo negociarse en Colombia", "Ser títulos colocados en mercados externos, denominados en dólares, negociados y registrados en la BVC", "Solo ser emitidos por el BanRep", "No pagar cupones"], ans: 1,
        exp: "Los bonos globales se colocan en mercados externos (Europa/EE.UU.), denominados en dólares, y pueden negociarse en la BVC con liquidación hasta t+3."
    },

    {
        id: 'rf23', cat: 'renta_fija', q: "Un time deposit es:",
        opts: ["Una cuenta de ahorros", "Una inversión a plazo fijo que genera rentabilidad pactada, con pago de intereses y capital al vencimiento, generalmente en dólares o euros", "Un derivado de tasa de interés", "Un bono convertible"], ans: 1,
        exp: "El time deposit es una inversión a plazo fijo donde los intereses y capital se pagan al vencimiento. Comparable a un CDT por nivel de riesgo."
    },

    {
        id: 'ri12', cat: 'riesgos', q: "El riesgo operacional según Basilea incluye eventos como:",
        opts: ["Solo fraude interno", "Fraude interno/externo, relaciones laborales, clientes/productos, daños a activos, fallas tecnológicas y ejecución de procesos", "Solo fallas tecnológicas", "Solo errores humanos"], ans: 1,
        exp: "Los eventos de riesgo operacional incluyen: fraude interno, fraude externo, relaciones laborales, clientes/productos/prácticas empresariales, daños a activos físicos, fallas tecnológicas y ejecución/administración de procesos."
    },

    {
        id: 'ri13', cat: 'riesgos', q: "El riesgo reputacional es:",
        opts: ["Solo un riesgo financiero", "La posibilidad de pérdida por desprestigio o mala imagen que cause pérdida de clientes o disminución de ingresos", "Un riesgo que solo afecta a bancos", "Un tipo de riesgo de mercado"], ans: 1,
        exp: "El riesgo reputacional es la posibilidad de pérdida por desprestigio, mala imagen, publicidad negativa, que cause pérdida de clientes, disminución de ingresos o procesos judiciales."
    },

    {
        id: 'ri14', cat: 'riesgos', q: "El riesgo legal según el Marco de Basilea es:",
        opts: ["Un riesgo independiente", "Un componente del riesgo operacional, definido como la posibilidad de pérdida por sanciones o incumplimiento de normas", "Solo aplica al sector público", "Un tipo de riesgo de mercado"], ans: 1,
        exp: "Basilea considera el riesgo legal como componente del riesgo operacional: la posibilidad de pérdida por ser sancionado o por incumplimiento de normas, regulaciones u obligaciones contractuales."
    },

    {
        id: 'ri15', cat: 'riesgos', q: "Los factores de riesgo de LA/FT según la Circular Básica Jurídica son:",
        opts: ["Solo clientes", "Clientes/usuarios, productos, canales de distribución y jurisdicciones", "Solo jurisdicciones", "Solo productos financieros"], ans: 1,
        exp: "Los cuatro factores de riesgo de LA/FT son: a) clientes/usuarios, b) productos, c) canales de distribución, d) jurisdicciones."
    },

    {
        id: 'ri16', cat: 'riesgos', q: "El riesgo de mercado se subdivide en:",
        opts: ["Solo riesgo de tasa de interés", "Riesgo de tasa de interés, renta variable, tasa de cambio y precio de commodities", "Solo riesgo cambiario", "Solo riesgo de acciones y bonos"], ans: 1,
        exp: "El riesgo de mercado se clasifica en 4 categorías: tasa de interés, renta variable (acciones), tasa de cambio, y precio de commodities."
    },

    {
        id: 'ri17', cat: 'riesgos', q: "El riesgo de reinversión se presenta cuando:",
        opts: ["Las tasas suben y el bono se devalúa", "Las tasas bajan y no se pueden reinvertir los cupones a la misma tasa original", "El emisor hace default", "El mercado cierra"], ans: 1,
        exp: "El riesgo de reinversión surge cuando las tasas de interés bajan, dificultando reinvertir los cupones o intereses del bono a una tasa igual o mayor a la original."
    },

    {
        id: 'ri18', cat: 'riesgos', q: "Los eventos de crédito según ISDA incluyen:",
        opts: ["Solo bancarrota", "Bancarrota, incumplimiento de pagos, incumplimiento de obligaciones, aceleración, repudio/moratoria y restructuración", "Solo impago de cupones", "Solo degradación de rating"], ans: 1,
        exp: "ISDA identifica 6 eventos de crédito: bancarrota, incumplimiento de pagos, incumplimiento de obligaciones, aceleración, repudio/moratoria y restructuración."
    },

    {
        id: 'ri19', cat: 'riesgos', q: "El riesgo de liquidez de fondeo se manifiesta en:",
        opts: ["Exceso de activos líquidos", "La insuficiencia de activos líquidos disponibles para cumplir flujos de caja y/o la necesidad de asumir costos inusuales de fondeo", "Demasiada profundidad de mercado", "Alta volatilidad"], ans: 1,
        exp: "El riesgo de liquidez de fondeo es la insuficiencia de activos líquidos para cumplir con los flujos de caja, o la necesidad de incurrir en costos inusuales para obtener fondeo."
    },

    {
        id: 'ri20', cat: 'riesgos', q: "Los factores ASG (ESG) son:",
        opts: ["Activos, Seguros y Garantías", "Ambientales, Sociales y de Gobernanza", "Análisis, Sistemas y Gestión", "Administración, Supervisión y Gobierno"], ans: 1,
        exp: "ASG = Ambientales, Sociales y de Gobernanza. Son factores que afectan el desempeño de largo plazo de emisores e inversiones."
    },

    {
        id: 'ri21', cat: 'riesgos', q: "El GAFI tiene como propósito principal:",
        opts: ["Regular los mercados de valores", "Fijar estándares y promover la implementación de medidas para combatir el lavado de activos y financiación del terrorismo", "Emitir bonos soberanos", "Calificar riesgo de crédito"], ans: 1,
        exp: "El GAFI fija estándares y promueve medidas legales, regulatorias y operativas para combatir LA/FT y otras amenazas a la integridad del sistema financiero internacional."
    },

    {
        id: 'ri22', cat: 'riesgos', q: "El riesgo específico (idiosincrático) de una acción se refiere a:",
        opts: ["Riesgo del mercado en general", "El riesgo propio de la empresa por sus características propias y giro de negocio", "El riesgo de tasa de cambio", "El riesgo regulatorio"], ans: 1,
        exp: "El riesgo específico o idiosincrático es el riesgo particular de cada acción debido a las características propias de la empresa (huelgas, daños en producción, ciclos de demanda)."
    },

    {
        id: 'd12', cat: 'derivados', q: "La principal diferencia entre un forward y un futuro es:",
        opts: ["No hay diferencia", "El forward es un contrato privado a la medida; el futuro es estandarizado y negociado en bolsa", "El forward se negocia en bolsa", "El futuro no tiene fecha de vencimiento"], ans: 1,
        exp: "Los forwards son contratos OTC privados hechos a la medida. Los futuros son estandarizados, negociados en bolsa, con compensación y liquidación diaria y cámara de contraparte."
    },

    {
        id: 'd13', cat: 'derivados', q: "La liquidación de un forward puede ser:",
        opts: ["Solo física", "Solo financiera", "Por entrega física (delivery) o por liquidación de diferencias (non-delivery)", "Solo al descuento"], ans: 2,
        exp: "Un forward puede liquidarse por entrega física del subyacente (delivery) o por liquidación financiera de diferencias (non-delivery)."
    },

    {
        id: 'd14', cat: 'derivados', q: "El Forward Rate Agreement (FRA) es un derivado de:",
        opts: ["Divisas", "Acciones", "Tasas de interés, donde se pacta una tasa fija y se liquida contra una tasa variable al vencimiento", "Commodities"], ans: 2,
        exp: "El FRA es un forward de tasas de interés: en la contratación se pacta una tasa fija, y al vencimiento se liquida contra la tasa de mercado vigente."
    },

    {
        id: 'd15', cat: 'derivados', q: "Las opciones europeas solo pueden ejercerse:",
        opts: ["En cualquier momento", "En la fecha de vencimiento del contrato", "Antes del vencimiento", "Al mes de contratación"], ans: 1,
        exp: "Las opciones europeas solo pueden ejercerse en la fecha de vencimiento, a diferencia de las americanas que pueden ejercerse en cualquier momento hasta el vencimiento."
    },

    {
        id: 'd16', cat: 'derivados', q: "La pérdida máxima para el comprador de una opción es:",
        opts: ["Ilimitada", "El valor de la prima pagada", "El precio del subyacente", "El precio de ejercicio"], ans: 1,
        exp: "La pérdida máxima del comprador de opciones (call o put) es siempre el valor de la prima pagada al momento de la contratación."
    },

    {
        id: 'd17', cat: 'derivados', q: "Una opción Put 'out of the money' (OTM) significa que:",
        opts: ["El precio del subyacente es menor que el strike", "El precio del subyacente es mayor que el strike, por lo que ejercerla generaría flujo negativo", "Son iguales", "La opción expiró"], ans: 1,
        exp: "Un Put está OTM cuando S > K (precio del subyacente mayor que el strike). Ejercerla generaría flujo de caja negativo."
    },

    {
        id: 'd18', cat: 'derivados', q: "Un IRS (Interest Rate Swap) plain vanilla consiste en:",
        opts: ["Intercambio de acciones", "Intercambio de flujos sobre un nominal en una misma moneda pero con diferentes tasas de interés (fija vs variable)", "Intercambio de divisas", "Compraventa de bonos"], ans: 1,
        exp: "En un IRS plain vanilla se intercambian flujos calculados sobre un nominal en la misma moneda, referidos a distintas tasas de interés (generalmente fija vs variable)."
    },

    {
        id: 'd19', cat: 'derivados', q: "El OIS (Overnight Index Swap) en Colombia utiliza como tasa flotante:",
        opts: ["La DTF", "El IBR overnight compuesto", "La LIBOR", "La tasa de TES"], ans: 1,
        exp: "El OIS colombiano usa como tasa variable el resultado del IBR overnight compuesto (cotizaciones diarias acumuladas durante la vigencia del swap)."
    },

    {
        id: 'd20', cat: 'derivados', q: "Los CDS (Credit Default Swaps) permiten:",
        opts: ["Comprar acciones a crédito", "Transferir el riesgo de crédito de un activo a otra parte, recibiendo compensación si ocurre un evento de crédito", "Fijar tasas de interés", "Convertir divisas"], ans: 1,
        exp: "Los CDS transfieren riesgo crediticio: el comprador paga primas periódicas al vendedor y recibe compensación si ocurre un evento de crédito (default) del emisor subyacente."
    },

    {
        id: 'd21', cat: 'derivados', q: "Los residentes colombianos respecto a derivados de crédito (CDS):",
        opts: ["Pueden emitirlos libremente", "Pueden celebrarlos con agentes del exterior autorizados, pero NO pueden emitirlos", "Solo el BanRep puede negociarlos", "Están prohibidos"], ans: 1,
        exp: "Los residentes pueden celebrar derivados de crédito con agentes del exterior autorizados, pero la regulación prohíbe a los residentes (incluidas entidades vigiladas por la SFC) emitir derivados de crédito."
    },

    {
        id: 'd22', cat: 'derivados', q: "Las opciones de barrera se caracterizan porque:",
        opts: ["Tienen plazo infinito", "Se activan o desactivan cuando el precio del subyacente alcanza cierto nivel (barrera) durante la vigencia", "Solo se negocian en Colombia", "No tienen prima"], ans: 1,
        exp: "Las opciones barrera se ejercen o desactivan cuando el precio del subyacente alcanza un precio determinado (barrera) durante la vida de la opción."
    },

    {
        id: 'ae11', cat: 'analisis_economico', q: "La ley de la demanda establece que:",
        opts: ["A mayor precio, mayor cantidad demandada", "La cantidad demandada tiene una relación inversa con el precio (a menor precio, mayor demanda)", "El precio no afecta la demanda", "La oferta determina la demanda"], ans: 1,
        exp: "La ley de la demanda dicta una relación inversa: al bajar el precio, la cantidad demandada tiende a aumentar, y viceversa."
    },

    {
        id: 'ae12', cat: 'analisis_economico', q: "El PIB real se diferencia del PIB nominal porque:",
        opts: ["Incluye la inflación", "Descuenta el efecto de la inflación valorando la producción a precios constantes de un año base", "Son lo mismo", "Es siempre mayor"], ans: 1,
        exp: "El PIB real valora la producción a precios de un año base (constantes), eliminando el efecto de la inflación. La variación del PIB real es el crecimiento económico."
    },

    {
        id: 'ae13', cat: 'analisis_economico', q: "El IPC (Índice de Precios al Consumidor) en Colombia es elaborado por:",
        opts: ["El Banco de la República", "El DANE", "La SFC", "El Ministerio de Hacienda"], ans: 1,
        exp: "El DANE elabora el IPC con base en la canasta familiar, registrando mensualmente 443 artículos en 38 ciudades del país."
    },

    {
        id: 'ae14', cat: 'analisis_economico', q: "Si la elasticidad-precio de la demanda (en valor absoluto) es mayor que 1, la demanda es:",
        opts: ["Inelástica", "Relativamente elástica (la cantidad demandada varía más que proporcionalmente al cambio en precio)", "Unitaria", "Perfectamente inelástica"], ans: 1,
        exp: "Si |elasticidad| > 1, la demanda es relativamente elástica: la cantidad varía en mayor proporción que el precio."
    },

    {
        id: 'ae15', cat: 'analisis_economico', q: "La competencia perfecta se caracteriza por:",
        opts: ["Un solo vendedor", "Muchos vendedores y compradores donde nadie influye individualmente en el precio (precio-aceptantes)", "Pocos vendedores", "Productos diferenciados"], ans: 1,
        exp: "En competencia perfecta hay amplio número de vendedores y compradores, producto homogéneo, información perfecta, y libre entrada/salida. Ningún participante influye en el precio."
    },

    {
        id: 'ae16', cat: 'analisis_economico', q: "Los cuatro métodos para calcular el PIB son:",
        opts: ["Solo por el lado del gasto", "Por el lado del producto, del valor agregado, de los ingresos y del gasto", "Solo por producción y consumo", "Solo por oferta y demanda"], ans: 1,
        exp: "El PIB puede calcularse por: 1) Producción de bienes finales, 2) Suma de valores agregados, 3) Suma de ingresos de factores, 4) Gasto (consumo + inversión + gasto público)."
    },

    {
        id: 'ae17', cat: 'analisis_economico', q: "La ventaja comparativa según David Ricardo significa que:",
        opts: ["Un país produce más que otro", "Un país produce un bien usando menos recursos relativos que otro, pudiendo exportarlo a menor costo", "Un país tiene más tecnología", "Un país tiene mayor población"], ans: 1,
        exp: "Un país tiene ventaja comparativa si produce un bien con menos recursos relativos, pudiendo producirlo y exportarlo a un costo relativo inferior al de sus competidores."
    },

    {
        id: 'ae18', cat: 'analisis_economico', q: "Un monopolio es un caso de competencia imperfecta donde existe:",
        opts: ["Muchos vendedores", "Un solo vendedor y muchos compradores, con poder sobre los precios", "Muchos vendedores y un comprador", "Competencia libre"], ans: 1,
        exp: "El monopolio tiene un solo vendedor y muchos compradores. El monopolista incide en el precio, produciendo menos cantidad a mayor precio que en competencia perfecta."
    },

    {
        id: 'r24', cat: 'regulacion', q: "El DCV (Depósito Central de Valores del Banco de la República) administra:",
        opts: ["Solo acciones", "Los títulos valores desmaterializados emitidos o administrados por el BanRep, incluyendo TES", "Solo CDTs", "Solo bonos privados"], ans: 1,
        exp: "El DCV administra valores desmaterializados emitidos o administrados por el BanRep, como TES, y facilita su registro, custodia y negociación."
    },

    {
        id: 'r25', cat: 'regulacion', q: "La diferencia entre DCV y DECEVAL es:",
        opts: ["Son lo mismo", "El DCV es del BanRep para títulos públicos; DECEVAL es privado para otros valores inscritos en el RNVE", "DCV es para acciones y DECEVAL para bonos", "No existe diferencia"], ans: 1,
        exp: "El DCV pertenece al BanRep y administra títulos públicos (TES). DECEVAL es un depósito privado que administra otros valores inscritos en el RNVE."
    },

    {
        id: 'a13', cat: 'autorregulacion', q: "La función disciplinaria de la AMV consiste en:",
        opts: ["Emitir normas", "Verificar cumplimiento de normas", "Investigar y sancionar a las personas naturales y jurídicas sometidas a su disciplina por infracciones a las normas", "Administrar valores"], ans: 2,
        exp: "La función disciplinaria de la AMV consiste en investigar y sancionar a quienes estén sometidos a su disciplina por infracciones a las normas del mercado de valores y los reglamentos de autorregulación."
    },

    {
        id: 'a14', cat: 'autorregulacion', q: "Las personas certificadas por la AMV deben renovar su certificación:",
        opts: ["Nunca", "Periódicamente, cumpliendo requisitos de educación continua y aprobando exámenes de actualización", "Solo si cambian de empleo", "Solo después de 20 años"], ans: 1,
        exp: "Los profesionales del mercado certificados por la AMV deben renovar periódicamente su certificación cumpliendo con requisitos de educación continua."
    },

    {
        id: 'f21', cat: 'fondos', q: "El reglamento de un FIC debe incluir como mínimo:",
        opts: ["Solo el nombre del fondo", "Política de inversión, comisiones, riesgos, régimen de participaciones, y políticas de redención", "Solo la tasa de retorno esperada", "Solo el nombre del administrador"], ans: 1,
        exp: "El reglamento de un FIC debe incluir al menos: política de inversión, comisiones, riesgos asociados, régimen de participaciones, y las políticas de redención."
    },

    {
        id: 'f22', cat: 'fondos', q: "Los fondos de capital privado son:",
        opts: ["Fondos abiertos", "FIC cerrados que invierten en empresas no listadas, proyectos de infraestructura u otros activos alternativos", "Fondos públicos del gobierno", "Fondos del pilar subsidiado"], ans: 1,
        exp: "Los fondos de capital privado son FIC cerrados especializados en inversiones en empresas no listadas, proyectos de infraestructura y otros activos alternativos."
    },

    {
        id: 'm12', cat: 'matematicas', q: "La UVR (Unidad de Valor Real) se reajusta diariamente según:",
        opts: ["La DTF", "La variación del IPC certificado por el DANE", "La tasa de TES", "El precio del dólar"], ans: 1,
        exp: "La UVR se reajusta diariamente con base en la variación del IPC certificado por el DANE, reflejando el cambio del poder adquisitivo de la moneda."
    },

    {
        id: 'm13', cat: 'matematicas', q: "Para convertir una tasa nominal a efectiva anual se usa la fórmula:",
        opts: ["EA = nominal × 12", "EA = (1 + nominal/n)^n - 1, donde n es el número de periodos de capitalización por año", "EA = nominal / 12", "EA = nominal + inflación"], ans: 1,
        exp: "La tasa efectiva anual se obtiene de: EA = (1 + i_nominal/n)^n - 1, donde n = número de periodos de capitalización en el año."
    },

    {
        id: 'm14', cat: 'matematicas', q: "El IBR (Indicador Bancario de Referencia) es:",
        opts: ["Una tasa fijada por la SFC", "Una tasa de interés de referencia de corto plazo que refleja la tasa a la que los bancos están dispuestos a prestar o recibir recursos", "La tasa de los TES", "La tasa de créditos hipotecarios"], ans: 1,
        exp: "El IBR es un indicador de tasa de interés de referencia de corto plazo, calculado a partir de las cotizaciones de los bancos, que refleja el costo del dinero interbancario."
    }
,

    {
        id: 'm15', cat: 'matematicas', q: "Si invierte $10.000.000 al 0,5% mes vencido con interés simple durante 12 meses, ¿cuánto recibe al final?",
        opts: ["$10.500.000", "$10.600.000", "$10.616.778", "$11.000.000"], ans: 1,
        exp: "Con interés simple: I = VP × ip × n = $10.000.000 × 0,5% × 12 = $600.000. VF = $10.000.000 + $600.000 = $10.600.000."
    },

    {
        id: 'm16', cat: 'matematicas', q: "Si la misma inversión de $10.000.000 al 0,5% MV se reinvierte (interés compuesto) durante 12 meses, el VF es:",
        opts: ["$10.600.000", "$10.616.778,12", "$10.500.000", "$11.000.000"], ans: 1,
        exp: "Con interés compuesto: VF = VP × (1+i)^n = $10.000.000 × (1+0,005)^12 = $10.616.778,12. La reinversión genera $16.778 más que el interés simple."
    },

    {
        id: 'm17', cat: 'matematicas', q: "¿Cuál es la tasa E.A. equivalente a una tasa del 6% N.A.T.V. (base 360)?",
        opts: ["6,000%", "6,136%", "6,168%", "5,870%"], ans: 1,
        exp: "Tasa periódica = 6%/4 = 1,5% trimestral. EA = (1+0,015)^(360/90) - 1 = (1,015)^4 - 1 = 6,136%."
    },

    {
        id: 'm18', cat: 'matematicas', q: "¿Cuál es la tasa E.A. equivalente a una tasa del 6% N.A.M.V. (base 360)?",
        opts: ["6,000%", "6,136%", "6,168%", "6,232%"], ans: 2,
        exp: "Tasa periódica = 6%/12 = 0,5% mensual. EA = (1+0,005)^(360/30) - 1 = (1,005)^12 - 1 = 6,168%."
    },

    {
        id: 'm19', cat: 'matematicas', q: "¿Cuál es la tasa E.A. de una inversión al 5% N.A.S.V. (base 360)?",
        opts: ["5,000%", "5,062%", "5,500%", "4,938%"], ans: 1,
        exp: "Tasa periódica = 5%/2 = 2,5% semestral. EA = (1+0,025)^(360/180) - 1 = (1,025)^2 - 1 = 5,062%."
    },

    {
        id: 'm20', cat: 'matematicas', q: "Para convertir una tasa periódica anticipada (ipa) a periódica vencida (ipv), la fórmula es:",
        opts: ["ipv = ipa × (1+ipa)", "ipv = ipa / (1 - ipa)", "ipv = ipa - 1", "ipv = 1 / ipa"], ans: 1,
        exp: "La fórmula de conversión es ipv = ipa / (1 - ipa). Así, una tasa anticipada siempre resulta en una vencida mayor."
    },

    {
        id: 'm21', cat: 'matematicas', q: "Una inversión al 6% N.A.T.A. (trimestre anticipado), ¿cuál es su E.A. equivalente?",
        opts: ["6,000%", "6,136%", "6,232%", "6,168%"], ans: 2,
        exp: "ipa = 6%/4 = 1,5%. ipv = 0,015/(1-0,015) = 1,5228%. EA = (1+0,015228)^(360/90) - 1 = 6,232%."
    },

    {
        id: 'm22', cat: 'matematicas', q: "La N.A.S.V. equivalente a una tasa del 5,062% E.A. es:",
        opts: ["5,000%", "5,062%", "4,938%", "2,500%"], ans: 0,
        exp: "ip = (1+0,05062)^(180/360) - 1 = 2,5%. NASV = 2,5% × 2 = 5,000%."
    },

    {
        id: 'm23', cat: 'matematicas', q: "Cuando se utiliza la fórmula EA = (1+ip)^(Base/días) - 1, el exponente Base/días representa:",
        opts: ["El valor futuro", "El número de periodos de capitalización en un año", "El precio del activo", "La tasa de descuento"], ans: 1,
        exp: "Base/días = número de veces que la tasa periódica se capitaliza en un año. Ej: Base=360, días=90 → 4 trimestres por año."
    },

    {
        id: 'm24', cat: 'matematicas', q: "Un CDT con VP=104,637% y VF=105,345%, 45 días al vencimiento (base 365). ¿Cuál es la TIR?",
        opts: ["5,622%", "4,98%", "6,000%", "3,5%"], ans: 0,
        exp: "TIR = (VF/VP)^(Base/n) - 1 = (105,345/104,637)^(365/45) - 1 = 5,622% E.A."
    },

    {
        id: 'm25', cat: 'matematicas', q: "Un TES con VP=97,123% y VF=100%, 185 días al vencimiento (base 365). ¿Cuál es la TIR?",
        opts: ["5,929%", "4,98%", "3,0%", "6,5%"], ans: 0,
        exp: "TIR = (100/97,123)^(365/185) - 1 = 5,929% E.A."
    },

    {
        id: 'm26', cat: 'matematicas', q: "La fórmula VP = VF / (1+TIR)^(n/Base) se utiliza para:",
        opts: ["Calcular el interés simple", "Hallar el valor presente de un flujo futuro descontado a una tasa de rentabilidad", "Convertir tasas nominales", "Calcular anualidades"], ans: 1,
        exp: "Esta es la fórmula fundamental de valor presente: descuenta un flujo futuro usando la TIR como tasa de descuento, fraccionando el exponente por (n/Base)."
    },

    {
        id: 'm27', cat: 'matematicas', q: "Si un bono tiene tasa facial 5% NASV, VN=$100M, y se negocia al 4,9% EA, su precio será:",
        opts: ["Menor a $100M (descuento)", "Exactamente $100M (a la par)", "Mayor a $100M (con prima)", "Imposible determinarlo"], ans: 2,
        exp: "Cuando TIR (4,9%) < tasa facial equivalente, el VP es mayor al nominal, por lo que se negocia con prima (precio > 100%)."
    },

    {
        id: 'm28', cat: 'matematicas', q: "Si la DTF es 4,34% T.A. y el spread es +4% T.A., ¿cuál es la tasa nominal total?",
        opts: ["8,34% N.A.T.A.", "4,34% T.A.", "8,00% E.A.", "4,00% T.V."], ans: 0,
        exp: "Se suman directamente en los mismos términos: 4,34% T.A. + 4% T.A. = 8,34% N.A.T.A. Luego se convierte según se requiera."
    },

    {
        id: 'm29', cat: 'matematicas', q: "Para un crédito en UVR + 6% EA con inflación del 3,27%, la tasa efectiva total en pesos es:",
        opts: ["9,27%", "6,00%", "9,47%", "3,27%"], ans: 2,
        exp: "Tasa combinada = (1 + tasa UVR) × (1 + inflación) - 1 = (1,06) × (1,0327) - 1 = 9,47% E.A."
    },

    {
        id: 'm30', cat: 'matematicas', q: "Al combinar una tasa indexada IPC + margen, la fórmula correcta es:",
        opts: ["IPC + margen (suma aritmética)", "(1+IPC) × (1+margen) - 1 (multiplicativa/Fisher)", "IPC × margen", "IPC / margen"], ans: 1,
        exp: "La combinación de tasas se hace de forma multiplicativa (ecuación de Fisher): Tasa total = (1+IPC) × (1+margen) - 1, NO como suma aritmética."
    },

    {
        id: 'm31', cat: 'matematicas', q: "Si el IBR es 4,126% N.A.M.V. y el spread es +3,4% S.V., ¿qué debe hacerse primero?",
        opts: ["Sumar directamente las tasas", "Convertir el IBR a la misma periodicidad del spread (S.V.) antes de sumar", "Multiplicar ambas tasas", "Restar el spread"], ans: 1,
        exp: "Solo pueden sumarse tasas nominales que estén en la misma periodicidad. El IBR (M.V.) debe convertirse a S.V. primero, y luego sumar el spread."
    },

    {
        id: 'm32', cat: 'matematicas', q: "Para un crédito en UVR + 3% EA con inflación estimada del 3,9%, la tasa EA total aproximada es:",
        opts: ["6,90%", "7,02%", "3,00%", "3,90%"], ans: 1,
        exp: "Tasa EA = (1+0,03) × (1+0,039) - 1 = 1,03 × 1,039 - 1 = 7,017% ≈ 7,02% E.A."
    },

    {
        id: 'm33', cat: 'matematicas', q: "Para un préstamo de $30M, 24 cuotas mensuales al 20% E.A., lo primero que debe hacerse es:",
        opts: ["Dividir $30M entre 24", "Calcular la tasa periódica mensual equivalente al 20% E.A.", "Multiplicar $30M por 20%", "Usar el 20% directamente como tasa mensual"], ans: 1,
        exp: "Se debe convertir la tasa EA a mensual: ip = (1+0,20)^(1/12) - 1 = 1,5309% mensual. Luego se aplica la fórmula de anualidad."
    },

    {
        id: 'm34', cat: 'matematicas', q: "La fórmula de anualidad vencida para hallar la cuota es:",
        opts: ["A = VP / n", "A = VP × [i(1+i)^n] / [(1+i)^n - 1]", "A = VP × i", "A = VP + i × n"], ans: 1,
        exp: "La cuota de una anualidad vencida se calcula con A = VP × [i(1+i)^n / ((1+i)^n - 1)], donde i es la tasa periódica y n el número de cuotas."
    },

    {
        id: 'm35', cat: 'matematicas', q: "Una anualidad diferida se caracteriza por:",
        opts: ["Pagos que comienzan inmediatamente", "Un periodo de gracia antes del primer pago, durante el cual se causan intereses", "Cuotas decrecientes", "No tener intereses"], ans: 1,
        exp: "En la anualidad diferida hay un periodo de gracia (m periodos) antes del primer pago. Durante ese periodo se causan intereses sobre el capital."
    },

    {
        id: 'm36', cat: 'matematicas', q: "Según el CFA Institute, los componentes de la tasa de interés comercial son:",
        opts: ["Solo inflación y plazo", "Tasa real libre de riesgo (ir), inflación (if), riesgo de crédito (ip), riesgo de liquidez (il), prima por vencimiento (iv)", "Solo oferta y demanda", "Solo tasa del banco central"], ans: 1,
        exp: "ic = (1+ir)(1+if)(1+ip)(1+il)(1+iv) - 1. Incluye: tasa real, inflación, riesgo de crédito, liquidez y vencimiento."
    },

    {
        id: 'm37', cat: 'matematicas', q: "La diferencia entre interés simple y compuesto es:",
        opts: ["No hay diferencia", "En el simple se pagan intereses solo sobre el capital; en el compuesto se pagan intereses sobre capital + intereses acumulados", "El simple es más rentable", "El compuesto se usa solo para bonos"], ans: 1,
        exp: "Interés simple: I = VP × ip × n (intereses sobre el capital original). Compuesto: VF = VP × (1+ip)^n (intereses sobre intereses = reinversión)."
    },

    {
        id: 'm38', cat: 'matematicas', q: "Si la tasa nominal anual es 12% pagadera trimestre vencido, la tasa periódica trimestral es:",
        opts: ["12%", "3%", "1%", "6%"], ans: 1,
        exp: "Tasa periódica = Tasa nominal / n períodos = 12% / 4 trimestres = 3% TV. El 3% trimestral es un interés periódico o efectivo trimestral."
    },

    {
        id: 'm39', cat: 'matematicas', q: "Una tasa anticipada del 2% T.A. equivale a una tasa vencida de:",
        opts: ["2,00% T.V.", "2,04% T.V.", "1,96% T.V.", "2,50% T.V."], ans: 1,
        exp: "ipv = ipa/(1-ipa) = 0,02/(1-0,02) = 0,02/0,98 = 2,04% T.V."
    },

    {
        id: 'm40', cat: 'matematicas', q: "En la conversión de tasa EA a tasa periódica, la fórmula es:",
        opts: ["ip = EA / n", "ip = (1+EA)^(días/Base) - 1", "ip = EA × n", "ip = EA - 1"], ans: 1,
        exp: "Para convertir EA a periódica: ip = (1+EA)^(días/Base) - 1. Ej: Para trimestral, ip = (1+EA)^(90/360) - 1."
    },

    {
        id: 'm41', cat: 'matematicas', q: "Si un CDT tiene tasa facial 5,22% NAAV, valor nominal $100M y le faltan 338 días (base 365), y la TIR de negociación es 4,98%, ¿el precio de compra será?",
        opts: ["Menor a $100M", "Igual a $100M", "Mayor a $100M ($100.589.589)", "Imposible calcularlo"], ans: 2,
        exp: "VF = $100M + $5,22M = $105,22M. VP = 105.220.000/(1+0,0498)^(338/365) = $100.589.589. Como TIR < tasa facial, se compra con prima."
    }
,

    // ═══════════════════ v4 REGULACIÓN EXPANSION ═══════════════════
    {
        id: 'r20', cat: 'regulacion', q: 'Los CDT (Certificados de Depósito a Término) son emitidos por:',
        opts: ['Sociedades comisionistas de bolsa', 'Establecimientos bancarios y corporaciones financieras', 'La Bolsa de Valores', 'El Banco de la República'], ans: 1,
        exp: 'Los CDT son títulos de renta fija emitidos por establecimientos bancarios, corporaciones financieras y compañías de financiamiento.'
    },
    {
        id: 'r21', cat: 'regulacion', q: 'La titularización es un proceso mediante el cual:',
        opts: ['Se emiten acciones ordinarias', 'Se transforman activos ilíquidos en títulos negociables', 'Se cancelan deudas con el gobierno', 'Se registran emisores en el RNVE'], ans: 1,
        exp: 'La titularización convierte activos o flujos de caja en títulos valores negociables en el mercado, mejorando la liquidez del originador.'
    },
    {
        id: 'r22', cat: 'regulacion', q: 'Las aceptaciones bancarias son:',
        opts: ['Títulos de deuda pública', 'Letras de cambio aceptadas por un banco para financiar operaciones comerciales', 'Acciones preferenciales de bancos', 'Títulos emitidos por el Banco de la República'], ans: 1,
        exp: 'Las aceptaciones bancarias son letras de cambio giradas por una empresa y aceptadas por un banco, generalmente para financiar comercio exterior.'
    },
    {
        id: 'r23', cat: 'regulacion', q: '¿Qué es una operación simultánea?',
        opts: ['Dos operaciones de contado ejecutadas al mismo tiempo', 'Compraventa de valores con pacto de retroventa sin transferencia de propiedad plena', 'La compra y venta del mismo título en diferentes bolsas', 'Una operación de derivados con dos subyacentes'], ans: 1,
        exp: 'En la simultánea, a diferencia del repo, NO hay transferencia de propiedad. El enajenante conserva los derechos económicos del título.'
    },
    {
        id: 'r24', cat: 'regulacion', q: 'La Transferencia Temporal de Valores (TTV) permite:',
        opts: ['Vender valores definitivamente', 'Prestar temporalmente valores a cambio de una contraprestación', 'Comprar valores a plazo sin garantía', 'Emitir nuevos valores'], ans: 1,
        exp: 'La TTV es un préstamo temporal de valores. El originador entrega títulos y recibe una contraprestación; al vencimiento se restituyen valores de la misma especie.'
    },
    {
        id: 'r25', cat: 'regulacion', q: 'En una operación repo, ¿quién asume los rendimientos del título durante la vigencia?',
        opts: ['El enajenante (vendedor inicial)', 'El adquirente (comprador)', 'La bolsa de valores', 'El depósito centralizado'], ans: 1,
        exp: 'En el repo hay transferencia de propiedad, por lo que el adquirente recibe los rendimientos del título durante la vigencia de la operación.'
    },
    {
        id: 'r26', cat: 'regulacion', q: '¿Qué diferencia principal existe entre un repo y una simultánea?',
        opts: ['El plazo máximo', 'En el repo hay transferencia de propiedad; en la simultánea no', 'El tipo de título utilizado', 'La tasa de interés aplicable'], ans: 1,
        exp: 'En el repo hay transferencia plena de propiedad del título. En la simultánea no hay transferencia de propiedad, el enajenante conserva los derechos económicos.'
    },
    {
        id: 'r27', cat: 'regulacion', q: 'El SARLAFT tiene como objetivo principal:',
        opts: ['Regular las tasas de interés', 'Prevenir y gestionar el riesgo de lavado de activos y financiación del terrorismo', 'Supervisar los fondos de pensiones', 'Calificar el riesgo de los emisores'], ans: 1,
        exp: 'El SARLAFT (Sistema de Administración del Riesgo de LA/FT) busca prevenir que el sistema financiero sea utilizado para lavar activos o financiar terrorismo.'
    },
    {
        id: 'r28', cat: 'regulacion', q: 'Una operación sospechosa en el contexto del SARLAFT es aquella que:',
        opts: ['Supera un monto determinado', 'No guarda relación con la actividad económica del cliente o se aparta de los patrones habituales', 'Se realiza en moneda extranjera', 'Involucra títulos de renta variable'], ans: 1,
        exp: 'Una operación sospechosa es aquella inusual que, tras análisis, no tiene explicación económica o jurídica aparente y podría estar vinculada a LA/FT.'
    },
    {
        id: 'r29', cat: 'regulacion', q: 'La Defensoría del Consumidor Financiero tiene como función:',
        opts: ['Regular las emisiones de valores', 'Atender quejas y reclamaciones de los consumidores financieros y actuar como conciliador', 'Sancionar a los intermediarios', 'Aprobar las OPA'], ans: 1,
        exp: 'El Defensor del Consumidor Financiero atiende quejas, actúa como conciliador entre consumidores y entidades vigiladas, y emite recomendaciones.'
    },
    {
        id: 'r30', cat: 'regulacion', q: 'Los papeles comerciales son títulos de deuda de corto plazo emitidos a un plazo máximo de:',
        opts: ['30 días', '180 días', '1 año', '5 años'], ans: 2,
        exp: 'Los papeles comerciales son títulos de deuda a corto plazo con vencimiento no superior a un año, utilizados para financiar capital de trabajo.'
    },
    {
        id: 'r31', cat: 'regulacion', q: 'El mercado mostrador (OTC) se caracteriza por:',
        opts: ['Negociación exclusiva en bolsa', 'Operaciones realizadas fuera de los sistemas de negociación de valores, de forma bilateral', 'Requiere aprobación de la SFC para cada operación', 'Solo permite operaciones de renta fija'], ans: 1,
        exp: 'El mercado OTC comprende operaciones bilaterales realizadas fuera de bolsa, con condiciones pactadas directamente entre las partes.'
    },
    {
        id: 'r32', cat: 'regulacion', q: '¿Cuáles son las modalidades de inscripción en el RNVE?',
        opts: ['Voluntaria y obligatoria', 'Automática y normal', 'Provisional y definitiva', 'Presencial y virtual'], ans: 1,
        exp: 'La inscripción en el RNVE puede ser automática (para ciertos emisores como la Nación) o normal (requiere solicitud y aprobación de la SFC).'
    },
    {
        id: 'r33', cat: 'regulacion', q: 'La actividad de asesoría en el mercado de valores comprende:',
        opts: ['Solo la ejecución de órdenes', 'La recomendación profesional personalizada sobre productos o servicios del mercado de valores', 'La calificación de riesgos', 'La custodia de valores'], ans: 1,
        exp: 'La asesoría implica una recomendación profesional personalizada al cliente, considerando sus condiciones particulares y perfil de riesgo.'
    },
    {
        id: 'r34', cat: 'regulacion', q: 'Los valores nominativos se transfieren mediante:',
        opts: ['Simple entrega', 'Endoso e inscripción en el registro del emisor', 'Subasta pública', 'Acuerdo verbal'], ans: 1,
        exp: 'Los valores nominativos requieren endoso y registro ante el emisor. Solo se reconoce como tenedor legítimo a quien figure en el documento y en el registro.'
    },
    {
        id: 'r35', cat: 'regulacion', q: 'Los conglomerados financieros en Colombia están regulados por:',
        opts: ['Ley 964 de 2005', 'Ley 1870 de 2017', 'Decreto 2555 de 2010 únicamente', 'Resolución del Banco de la República'], ans: 1,
        exp: 'La Ley 1870 de 2017 (Ley de Conglomerados) establece el marco de supervisión comprensiva y consolidada de los conglomerados financieros.'
    },

    // ═══════════════════ v4 AUTORREGULACIÓN EXPANSION ═══════════════════
    {
        id: 'a10', cat: 'autorregulacion', q: 'El Tribunal Disciplinario de la AMV es competente para:',
        opts: ['Emitir regulación del mercado', 'Conocer y fallar las investigaciones disciplinarias contra personas vinculadas a entidades miembro', 'Aprobar emisiones de valores', 'Fijar tasas de interés'], ans: 1,
        exp: 'El Tribunal Disciplinario es el órgano de la AMV encargado de conocer y fallar las investigaciones disciplinarias iniciadas contra personas naturales o jurídicas.'
    },
    {
        id: 'a11', cat: 'autorregulacion', q: 'Las etapas del proceso disciplinario de la AMV son:',
        opts: ['Denuncia y sentencia', 'Investigación preliminar, investigación formal, formulación de cargos y fallo', 'Auditoría y sanción', 'Queja, mediación y resolución'], ans: 1,
        exp: 'El proceso incluye: indagación preliminar, investigación formal, formulación de cargos, descargos, práctica de pruebas, alegatos y fallo por el Tribunal.'
    },
    {
        id: 'a12', cat: 'autorregulacion', q: 'La certificación ante la AMV es obligatoria para:',
        opts: ['Todos los empleados de entidades financieras', 'Las personas que realicen operaciones en el mercado de valores por cuenta de intermediarios', 'Solo los gerentes generales', 'Solo los auditores internos'], ans: 1,
        exp: 'La certificación es obligatoria para quienes se inscriban en el RNPMV: operadores, asesores y directivos de intermediarios del mercado de valores.'
    },
    {
        id: 'a13', cat: 'autorregulacion', q: 'La función normativa de la AMV consiste en:',
        opts: ['Sancionar a los infractores', 'Expedir reglamentos y normas de conducta para el mercado de valores', 'Supervisar al Banco de la República', 'Aprobar las OPA'], ans: 1,
        exp: 'La función normativa permite a la AMV expedir reglamentos de autorregulación que complementan la regulación estatal con estándares de conducta.'
    },
    {
        id: 'a14', cat: 'autorregulacion', q: 'Una infracción disciplinaria en la AMV se diferencia de una falta porque:',
        opts: ['Son lo mismo', 'La infracción viola normas de autorregulación; la falta viola normas legales estatales', 'La infracción es más grave', 'La falta solo aplica a personas jurídicas'], ans: 1,
        exp: 'Las infracciones son violaciones a los reglamentos de autorregulación de la AMV. Las faltas son incumplimientos de la normativa estatal supervisados por la SFC.'
    },
    {
        id: 'a15', cat: 'autorregulacion', q: 'La multa máxima que la AMV puede imponer a una persona natural es de:',
        opts: ['10 SMMLV', '50 SMMLV', '100 SMMLV', 'No tiene límite'], ans: 2,
        exp: 'La AMV puede imponer multas de hasta 100 SMMLV a personas naturales vinculadas a entidades miembro por infracciones a los reglamentos de autorregulación.'
    },

    // ═══════════════════ v4 ÉTICA EXPANSION ═══════════════════
    {
        id: 'e9', cat: 'etica', q: 'El front running consiste en:',
        opts: ['Ejecutar operaciones propias antes que las del cliente, aprovechando conocimiento de órdenes pendientes', 'Operar en mercados extranjeros', 'Vender títulos al descubierto', 'Ejecutar órdenes del cliente rápidamente'], ans: 0,
        exp: 'Front running es la práctica prohibida de operar por cuenta propia antes de ejecutar órdenes de clientes, aprovechando la información sobre dichas órdenes.'
    },
    {
        id: 'e10', cat: 'etica', q: 'El churning es:',
        opts: ['Diversificar el portafolio del cliente', 'Realizar operaciones excesivas e innecesarias en la cuenta del cliente para generar comisiones', 'Invertir en fondos de inversión colectiva', 'Cambiar de corredor de bolsa'], ans: 1,
        exp: 'Churning es la rotación excesiva de un portafolio sin beneficio para el cliente, con el objetivo de generar mayores comisiones para el intermediario.'
    },
    {
        id: 'e11', cat: 'etica', q: 'Las murallas chinas (Chinese walls) en el mercado de valores son:',
        opts: ['Regulaciones de comercio exterior con China', 'Barreras de información entre departamentos de una misma entidad para prevenir conflictos de interés', 'Límites a la inversión extranjera', 'Normas de la bolsa de Shanghai'], ans: 1,
        exp: 'Las murallas chinas son barreras organizacionales que impiden el flujo de información privilegiada entre áreas de una entidad financiera.'
    },
    {
        id: 'e12', cat: 'etica', q: 'El uso de información privilegiada está sancionado por:',
        opts: ['Solo normas administrativas', 'La Ley 964 de 2005 con sanciones administrativas y penales', 'Solo normas penales', 'No está sancionado en Colombia'], ans: 1,
        exp: 'El uso de información privilegiada tiene sanciones tanto administrativas (multas, suspensión) como penales (Ley 964 de 2005 y Código Penal).'
    },
    {
        id: 'e13', cat: 'etica', q: 'El deber de mejor ejecución obliga al intermediario a:',
        opts: ['Ejecutar la orden más rápidamente posible sin importar el precio', 'Obtener las mejores condiciones de precio, costo, velocidad y probabilidad de ejecución para el cliente', 'Ejecutar solo en la BVC', 'Cobrar la menor comisión posible'], ans: 1,
        exp: 'El deber de mejor ejecución obliga al intermediario a buscar las condiciones más favorables en precio, costos, velocidad y probabilidad de ejecución.'
    },

    // ═══════════════════ v4 RENTA VARIABLE EXPANSION ═══════════════════
    {
        id: 'rv15', cat: 'renta_variable', q: 'El índice MSCI COLCAP mide:',
        opts: ['La inflación en Colombia', 'El desempeño de las acciones más representativas y líquidas de la BVC', 'El rendimiento de los TES', 'La variación del dólar'], ans: 1,
        exp: 'El MSCI COLCAP es el principal índice bursátil de Colombia. Refleja el desempeño de las acciones más líquidas y de mayor capitalización en la BVC.'
    },
    {
        id: 'rv16', cat: 'renta_variable', q: 'La capitalización bursátil se calcula como:',
        opts: ['Utilidades / Número de acciones', 'Precio de mercado × Número total de acciones en circulación', 'Patrimonio / Acciones emitidas', 'Dividendo / Precio de la acción'], ans: 1,
        exp: 'Capitalización bursátil = Precio de mercado por acción × Número total de acciones en circulación. Mide el valor total de mercado de la empresa.'
    },
    {
        id: 'rv17', cat: 'renta_variable', q: 'El RPG (Relación Precio/Ganancia) indica:',
        opts: ['El dividendo por acción', 'Cuántas veces la utilidad por acción está contenida en el precio de la acción', 'El valor patrimonial', 'La tasa de descuento'], ans: 1,
        exp: 'RPG = Precio / UPA. Indica cuántos pesos paga el inversionista por cada peso de utilidad. Un RPG alto puede indicar expectativas de crecimiento.'
    },
    {
        id: 'rv18', cat: 'renta_variable', q: 'En la subasta de apertura de acciones líquidas:',
        opts: ['Se ejecutan todas las órdenes al precio de cierre del día anterior', 'Se acumulan órdenes y se calcula un precio de equilibrio para calzarlas', 'Solo se permiten órdenes de mercado', 'No se permite la participación de personas naturales'], ans: 1,
        exp: 'En la subasta de apertura se acumulan órdenes durante un período y se calcula un precio de equilibrio que maximiza el volumen negociado.'
    },
    {
        id: 'rv19', cat: 'renta_variable', q: 'El Dividend Yield se calcula como:',
        opts: ['Precio / Dividendo', 'Dividendo por acción / Precio de mercado × 100', 'Utilidad / Capital', 'EBITDA / Deuda'], ans: 1,
        exp: 'Dividend Yield = (Dividendo por acción / Precio de mercado) × 100. Mide la rentabilidad por dividendos respecto al precio pagado.'
    },
    {
        id: 'rv20', cat: 'renta_variable', q: 'Las acciones privilegiadas se diferencian de las preferenciales porque:',
        opts: ['No pagan dividendo', 'Otorgan beneficios económicos adicionales Y derecho a voto', 'Solo se negocian en el mercado OTC', 'No tienen valor nominal'], ans: 1,
        exp: 'Las privilegiadas dan beneficios económicos especiales (dividendo preferente) Y mantienen derecho a voto. Las preferenciales dan dividendo fijo pero SIN voto.'
    },
    {
        id: 'rv21', cat: 'renta_variable', q: 'El valor patrimonial de una acción se calcula:',
        opts: ['Capital social / Acciones emitidas', 'Patrimonio neto / Número total de acciones', 'Precio de mercado × Acciones en circulación', 'Utilidad neta / Acciones'], ans: 1,
        exp: 'Valor patrimonial = Patrimonio neto / Número total de acciones. Refleja el valor contable de cada acción según los estados financieros.'
    },
    {
        id: 'rv22', cat: 'renta_variable', q: 'Una operación cruzada en la BVC es:',
        opts: ['Una compra en dos bolsas diferentes', 'Una operación donde el mismo comisionista actúa como comprador y vendedor', 'Un intercambio de acciones entre dos empresas', 'Una operación de arbitraje internacional'], ans: 1,
        exp: 'Operación cruzada: la misma SCB actúa simultáneamente como compradora y vendedora. Requiere cumplir condiciones de transparencia y precio.'
    },
    {
        id: 'rv23', cat: 'renta_variable', q: 'El WACC (Costo Promedio Ponderado de Capital) se utiliza en valoración para:',
        opts: ['Calcular el dividendo', 'Descontar los flujos de caja futuros al valor presente', 'Determinar el precio de la OPA', 'Fijar el precio de referencia'], ans: 1,
        exp: 'El WACC pondera el costo de la deuda y del equity para obtener la tasa de descuento que se aplica a los flujos de caja libre en la valoración por DCF.'
    },
    {
        id: 'rv24', cat: 'renta_variable', q: 'El derecho de suscripción preferente otorga a los accionistas:',
        opts: ['Derecho a vender sus acciones primero', 'Prioridad para adquirir nuevas acciones en una emisión proporcionalmente a su participación', 'Dividendo doble', 'Voto adicional en asamblea'], ans: 1,
        exp: 'El derecho de suscripción protege al accionista de la dilución, permitiéndole suscribir nuevas acciones proporcionalmente a su tenencia actual.'
    },

    // ═══════════════════ v4 DERIVADOS EXPANSION ═══════════════════
    {
        id: 'd10', cat: 'derivados', q: 'El nemotécnico de un futuro en la BVC tiene 7 caracteres. Los tres primeros identifican:',
        opts: ['El mes de vencimiento', 'El activo subyacente', 'El tipo de operación', 'La CRCC'], ans: 1,
        exp: 'Estructura: 3 letras (subyacente) + 1 letra (mes) + 2 dígitos (año) + F (futuro). Ej: TRMQ21F = futuro TRM agosto 2021.'
    },
    {
        id: 'd11', cat: 'derivados', q: 'En los futuros, la compensación diaria (mark-to-market) implica:',
        opts: ['Se pagan intereses diarios', 'Las ganancias/pérdidas se liquidan diariamente contra la cuenta de margen', 'Se cambia el subyacente cada día', 'Se renueva el contrato a diario'], ans: 1,
        exp: 'El MTM diario ajusta el valor del contrato al precio de cierre, abonando o debitando la diferencia en la cuenta de margen.'
    },
    {
        id: 'd12', cat: 'derivados', q: 'Un margin call ocurre cuando:',
        opts: ['El contrato vence', 'El margen de la cuenta cae por debajo del margen de mantenimiento requerido', 'Se obtienen ganancias', 'Se cierra la posición'], ans: 1,
        exp: 'El margin call es una solicitud de la CRCC para recomponer el margen. Si no se atiende, la cámara puede cerrar la posición automáticamente.'
    },
    {
        id: 'd13', cat: 'derivados', q: 'La letra Q en el nemotécnico de un futuro indica vencimiento en:',
        opts: ['Abril', 'Julio', 'Agosto', 'Diciembre'], ans: 2,
        exp: 'Tabla de meses: F=Ene, G=Feb, H=Mar, J=Abr, K=May, M=Jun, N=Jul, Q=Ago, U=Sep, V=Oct, X=Nov, Z=Dic.'
    },
    {
        id: 'd14', cat: 'derivados', q: 'Delta en opciones mide:',
        opts: ['El paso del tiempo', 'La sensibilidad del precio de la opción ante cambios en el precio del subyacente', 'La volatilidad implícita', 'El costo de financiamiento'], ans: 1,
        exp: 'Delta = ∂Prima/∂Precio. Para un call, delta está entre 0 y 1. Para un put, entre -1 y 0. Delta 0,5 significa que la prima sube $0,50 por cada $1 del subyacente.'
    },
    {
        id: 'd15', cat: 'derivados', q: 'Theta en opciones representa:',
        opts: ['Sensibilidad al precio del subyacente', 'La pérdida de valor de la opción por el paso del tiempo', 'Sensibilidad a cambios en volatilidad', 'La tasa libre de riesgo'], ans: 1,
        exp: 'Theta mide el decaimiento temporal: cuánto pierde de valor la opción por cada día que pasa (time decay). Es negativa para posiciones largas.'
    },
    {
        id: 'd16', cat: 'derivados', q: 'Vega en opciones mide la sensibilidad a:',
        opts: ['Cambios en el precio del subyacente', 'Cambios en la tasa de interés', 'Cambios en la volatilidad implícita', 'El paso del tiempo'], ans: 2,
        exp: 'Vega mide cuánto cambia la prima de la opción por cada punto porcentual de cambio en la volatilidad implícita del subyacente.'
    },
    {
        id: 'd17', cat: 'derivados', q: 'Un swap de tasa de interés (IRS) consiste en:',
        opts: ['Intercambiar divisas', 'Intercambiar flujos de interés fijos por variables sobre un nocional', 'Comprar y vender acciones simultáneamente', 'Intercambiar títulos de renta fija'], ans: 1,
        exp: 'En un IRS una parte paga tasa fija y recibe variable, y la otra al contrario. El nocional no se intercambia, solo los flujos de intereses.'
    },
    {
        id: 'd18', cat: 'derivados', q: 'Una opción está "in the money" (ITM) cuando:',
        opts: ['No tiene valor intrínseco', 'Tiene valor intrínseco positivo (ejercerla genera ganancia)', 'El precio del subyacente es igual al strike', 'Ha vencido'], ans: 1,
        exp: 'Call ITM: precio subyacente > strike. Put ITM: precio subyacente < strike. La opción tiene valor intrínseco que se puede capturar al ejercerla.'
    },

    // ═══════════════════ v4 RENTA FIJA EXPANSION ═══════════════════
    {
        id: 'rf10', cat: 'renta_fija', q: 'La curva de rendimientos (yield curve) normal tiene pendiente:',
        opts: ['Negativa (invertida)', 'Positiva (tasas a largo plazo > corto plazo)', 'Plana siempre', 'No tiene forma definida'], ans: 1,
        exp: 'La curva normal tiene pendiente positiva: mayores plazos implican mayores tasas por la prima por vencimiento. Una curva invertida puede señalar recesión.'
    },
    {
        id: 'rf11', cat: 'renta_fija', q: 'Las calificaciones de riesgo crediticio AAA indican:',
        opts: ['Alto riesgo de incumplimiento', 'La máxima calidad crediticia con mínimo riesgo de incumplimiento', 'Calificación promedio', 'Grado especulativo'], ans: 1,
        exp: 'AAA es la calificación más alta: máxima capacidad de pago. Las escalas van de AAA (mejor) a D (default). BBB- o superior es grado de inversión.'
    },
    {
        id: 'rf12', cat: 'renta_fija', q: 'El riesgo de reinversión en renta fija se refiere a:',
        opts: ['No poder vender el título', 'La posibilidad de que los cupones se reinviertan a tasas menores que la tasa original', 'El incumplimiento del emisor', 'La pérdida de valor por inflación'], ans: 1,
        exp: 'El riesgo de reinversión surge cuando las tasas bajan y los cupones recibidos se reinvierten a tasas inferiores, reduciendo el retorno efectivo.'
    },
    {
        id: 'rf13', cat: 'renta_fija', q: 'Las operaciones OMAS (Operaciones de Mercado Abierto) son realizadas por:',
        opts: ['La SFC', 'El Banco de la República para regular la liquidez del sistema', 'La BVC', 'El Ministerio de Hacienda'], ans: 1,
        exp: 'Las OMAS son el principal instrumento de política monetaria. BanRep compra/vende TES para inyectar/drenar liquidez al sistema financiero.'
    },
    {
        id: 'rf14', cat: 'renta_fija', q: 'El MEC (Mercado Electrónico Colombiano) es un sistema de negociación para:',
        opts: ['Acciones', 'Títulos de renta fija y deuda pública', 'Derivados', 'Divisas'], ans: 1,
        exp: 'El MEC es administrado por la BVC y es el principal sistema de negociación de títulos de deuda pública y renta fija en Colombia.'
    },
    {
        id: 'rf15', cat: 'renta_fija', q: 'La convexidad de un bono mide:',
        opts: ['Su liquidez', 'La curvatura de la relación precio-tasa, complementando la duración para cambios grandes en tasas', 'Su calificación crediticia', 'El plazo al vencimiento'], ans: 1,
        exp: 'La convexidad captura el efecto no lineal de cambios en tasas sobre el precio. A mayor convexidad, la duración sobreestima menos la caída del precio.'
    },

    // ═══════════════════ v4 DIVISAS EXPANSION ═══════════════════
    {
        id: 'dv8', cat: 'divisas', q: 'La posición propia de un IMC se calcula como:',
        opts: ['Activos totales - Pasivos totales', 'Activos en ME - Pasivos en ME, incluyendo contingencias de derivados', 'Solo los dólares en caja', 'Exportaciones - Importaciones'], ans: 1,
        exp: 'La posición propia = (Activos en ME + derechos de compra en derivados) - (Pasivos en ME + compromisos de venta en derivados). Tiene límites regulatorios.'
    },
    {
        id: 'dv9', cat: 'divisas', q: 'La posición bruta de apalancamiento (PBA) mide:',
        opts: ['La deuda total del banco', 'La suma de derechos y obligaciones en derivados sobre ME como porcentaje del patrimonio', 'El volumen de operaciones cambiarias', 'La rentabilidad de las operaciones en divisas'], ans: 1,
        exp: 'PBA = (derechos + obligaciones en derivados sobre ME) / patrimonio técnico. Mide la exposición total en derivados cambiarios, no la posición neta.'
    },
    {
        id: 'dv10', cat: 'divisas', q: 'Las cuentas de compensación deben registrarse ante el Banco de la República en un plazo máximo de:',
        opts: ['1 semana', '1 mes después de la primera operación', '3 meses', '1 año'], ans: 1,
        exp: 'Las cuentas de compensación (cuentas bancarias en ME en el exterior) deben registrarse ante BanRep máximo un mes después de la primera operación.'
    },
    {
        id: 'dv11', cat: 'divisas', q: 'Un NDF (Non-Delivery Forward) se liquida por:',
        opts: ['Entrega física de divisas', 'Compensación financiera de la diferencia entre tasa pactada y tasa spot al vencimiento', 'Entrega de TES', 'Intercambio de acciones'], ans: 1,
        exp: 'El NDF se liquida por diferencia: solo se paga la diferencia entre la tasa forward pactada y la TRM del día de vencimiento, sin intercambio de principal.'
    },

    // ═══════════════════ v4 PORTAFOLIOS EXPANSION ═══════════════════
    {
        id: 'p8', cat: 'portafolios', q: 'El Ratio de Sharpe mide:',
        opts: ['Solo el rendimiento del portafolio', 'El exceso de rendimiento sobre la tasa libre de riesgo por unidad de riesgo total (desviación estándar)', 'El riesgo sistemático', 'La correlación entre activos'], ans: 1,
        exp: 'Sharpe = (Rp - Rf) / σp. A mayor Sharpe, mejor rendimiento ajustado por riesgo. Usa riesgo total (desviación estándar), no solo sistemático.'
    },
    {
        id: 'p9', cat: 'portafolios', q: 'El Ratio de Treynor se diferencia del Sharpe en que usa:',
        opts: ['La desviación estándar', 'Beta (riesgo sistemático) como denominador en lugar de la desviación estándar', 'El VaR', 'La duración'], ans: 1,
        exp: 'Treynor = (Rp - Rf) / βp. Usa beta (riesgo no diversificable). Es más apropiado cuando el portafolio está bien diversificado.'
    },
    {
        id: 'p10', cat: 'portafolios', q: 'El alpha de Jensen mide:',
        opts: ['El riesgo del portafolio', 'El rendimiento excedente del portafolio respecto al rendimiento esperado según el CAPM', 'La volatilidad', 'La correlación con el benchmark'], ans: 1,
        exp: 'Alpha = Rp - [Rf + βp(Rm - Rf)]. Un alpha positivo indica que el gestor generó rendimiento superior al esperado por el nivel de riesgo asumido.'
    },
    {
        id: 'p11', cat: 'portafolios', q: 'El rebalanceo de un portafolio consiste en:',
        opts: ['Vender todos los activos', 'Ajustar las ponderaciones de los activos para volver a la asignación original o deseada', 'Cambiar de administrador', 'Aumentar el riesgo'], ans: 1,
        exp: 'El rebalanceo corrige desviaciones de la asignación objetivo causadas por movimientos del mercado. Puede ser periódico o por umbrales de desviación.'
    },
    {
        id: 'p12', cat: 'portafolios', q: 'La diversificación reduce principalmente:',
        opts: ['El riesgo sistemático', 'El riesgo no sistemático (idiosincrático)', 'La rentabilidad esperada', 'El horizonte de inversión'], ans: 1,
        exp: 'La diversificación reduce el riesgo específico (no sistemático). El riesgo sistemático NO puede eliminarse con diversificación, solo con cobertura.'
    },

    // ═══════════════════ v4 FONDOS EXPANSION ═══════════════════
    {
        id: 'fo8', cat: 'fondos', q: 'Un FIC abierto se caracteriza porque:',
        opts: ['Solo permite retiros al vencimiento', 'Permite la redención de participaciones en cualquier momento', 'Invierte exclusivamente en acciones', 'No requiere reglamento'], ans: 1,
        exp: 'En un FIC abierto los inversionistas pueden entrar y salir en cualquier momento. En el cerrado, hay restricciones temporales para la redención.'
    },
    {
        id: 'fo9', cat: 'fondos', q: 'El NAV (Net Asset Value) de un FIC se calcula como:',
        opts: ['Activos brutos / Participaciones', 'Activos netos (activos - pasivos) / Número de participaciones en circulación', 'Utilidades / Inversiones', 'Patrimonio del administrador / Participaciones'], ans: 1,
        exp: 'NAV = (Activos totales - Pasivos) / Participaciones en circulación. Es el valor de cada unidad de participación, calculado diariamente.'
    },
    {
        id: 'fo10', cat: 'fondos', q: 'Los multifondos de pensiones obligatorias en Colombia son:',
        opts: ['Dos: conservador y agresivo', 'Cuatro: conservador, moderado, mayor riesgo y retiro programado', 'Tres: bajo, medio y alto', 'Uno solo para todos los afiliados'], ans: 1,
        exp: 'El esquema de multifondos tiene 4 tipos: Conservador (cerca de jubilación), Moderado (por defecto), Mayor Riesgo (jóvenes) y Retiro Programado (pensionados).'
    },
    {
        id: 'fo11', cat: 'fondos', q: 'El bono pensional es:',
        opts: ['Un título de renta fija del mercado', 'Un título que reconoce las cotizaciones realizadas antes del cambio de régimen pensional', 'Un dividendo de los fondos de pensiones', 'Un aporte voluntario'], ans: 1,
        exp: 'El bono pensional reconoce los aportes hechos al ISS o cajas de previsión antes de trasladarse al RAIS. Se redime al momento de la pensión.'
    },
    {
        id: 'fo12', cat: 'fondos', q: 'La renta vitalicia como modalidad de pensión consiste en:',
        opts: ['Retiros programados del fondo', 'El traslado del ahorro a una aseguradora que garantiza una mesada fija de por vida', 'Un ahorro voluntario', 'Un préstamo del fondo'], ans: 1,
        exp: 'En renta vitalicia, el afiliado transfiere su capital a una aseguradora que le garantiza una mesada fija mensual de por vida.'
    },
    {
        id: 'fo13', cat: 'fondos', q: 'Un ETF (Exchange Traded Fund) es:',
        opts: ['Un derivado financiero', 'Un fondo de inversión que cotiza en bolsa y replica un índice o canasta de activos', 'Un bono del gobierno', 'Una acción preferencial'], ans: 1,
        exp: 'Los ETF son fondos de inversión cotizados en bolsa que replican el comportamiento de un índice. Combinan diversificación de fondos con liquidez de acciones.'
    },

    // ═══════════════════ v4 RIESGOS EXPANSION ═══════════════════
    {
        id: 'ri10', cat: 'riesgos', q: 'El VaR paramétrico asume que los rendimientos siguen una distribución:',
        opts: ['Uniforme', 'Normal (gaussiana)', 'Exponencial', 'No requiere supuesto de distribución'], ans: 1,
        exp: 'El VaR paramétrico asume distribución normal de rendimientos. Usa media, desviación estándar y el nivel de confianza para calcular la pérdida máxima.'
    },
    {
        id: 'ri11', cat: 'riesgos', q: 'El backtesting del VaR consiste en:',
        opts: ['Calcular el VaR hacia adelante', 'Comparar las predicciones del VaR con las pérdidas reales históricas para validar el modelo', 'Aumentar el nivel de confianza', 'Reducir la ventana de observación'], ans: 1,
        exp: 'El backtesting verifica la precisión del modelo VaR comparando las pérdidas estimadas con las reales. Si las excepciones son excesivas, el modelo falla.'
    },
    {
        id: 'ri12', cat: 'riesgos', q: 'El stress testing se diferencia del VaR en que:',
        opts: ['Es más preciso', 'Evalúa el impacto de escenarios extremos o poco probables, no cubiertos por el VaR normal', 'Solo se aplica a renta fija', 'Usa distribución normal'], ans: 1,
        exp: 'Las pruebas de estrés evalúan escenarios extremos (crisis, shocks) que están fuera del intervalo de confianza del VaR, complementando la medición de riesgo.'
    },
    {
        id: 'ri13', cat: 'riesgos', q: 'El SARL (Sistema de Administración de Riesgo de Liquidez) obliga a las entidades a:',
        opts: ['Mantener todo en efectivo', 'Medir, monitorear y gestionar el riesgo de no poder cumplir obligaciones de pago oportunamente', 'Solo invertir en TES', 'Reportar diariamente a la AMV'], ans: 1,
        exp: 'El SARL establece políticas para que las entidades gestionen el riesgo de no poder atender sus obligaciones por descalces de plazos entre activos y pasivos.'
    },
    {
        id: 'ri14', cat: 'riesgos', q: 'La duración modificada se utiliza para:',
        opts: ['Calcular el plazo del bono', 'Estimar la variación porcentual del precio ante un cambio de 1% en la tasa de interés', 'Determinar el cupón', 'Calcular el VaR de acciones'], ans: 1,
        exp: 'Duración Modificada = Duración / (1+y). ΔP/P ≈ -DM × Δy. Un bono con DM=5 caerá ~5% si las tasas suben 1%.'
    },

    // ═══════════════════ v4 ANÁLISIS ECONÓMICO EXPANSION ═══════════════════
    {
        id: 'ae10', cat: 'analisis_economico', q: 'La política monetaria contractiva del Banco de la República busca:',
        opts: ['Reducir las tasas de interés', 'Subir las tasas de interés para reducir la inflación y enfriar la economía', 'Aumentar el gasto público', 'Devaluar la moneda'], ans: 1,
        exp: 'La política contractiva sube tasas de interés y/o reduce la oferta monetaria para controlar la inflación, desestimulando el crédito y el consumo.'
    },
    {
        id: 'ae11', cat: 'analisis_economico', q: 'La curva de Phillips describe la relación entre:',
        opts: ['PIB y exportaciones', 'Inflación y desempleo: a menor desempleo, mayor presión inflacionaria', 'Tasas de interés y tipo de cambio', 'Oferta y demanda de divisas'], ans: 1,
        exp: 'La curva de Phillips muestra un trade-off entre inflación y desempleo en el corto plazo: cuando el desempleo baja, la inflación tiende a subir.'
    },
    {
        id: 'ae12', cat: 'analisis_economico', q: 'Los indicadores económicos adelantados (leading) son aquellos que:',
        opts: ['Se publican con retraso', 'Anticipan los cambios en el ciclo económico antes de que ocurran', 'Solo miden el pasado', 'No tienen uso práctico'], ans: 1,
        exp: 'Los indicadores adelantados (permisos de construcción, índice de confianza, pedidos nuevos) anticipan la dirección futura de la economía.'
    },
    {
        id: 'ae13', cat: 'analisis_economico', q: 'La balanza de pagos registra:',
        opts: ['Solo las exportaciones', 'Todas las transacciones económicas de un país con el resto del mundo en un período determinado', 'El presupuesto del gobierno', 'Solo la deuda externa'], ans: 1,
        exp: 'La balanza de pagos tiene cuenta corriente (bienes, servicios, rentas, transferencias), cuenta de capital y cuenta financiera (inversiones, préstamos).'
    },
    {
        id: 'ae14', cat: 'analisis_economico', q: 'Las fases del ciclo económico son:',
        opts: ['Solo expansión y recesión', 'Expansión, auge (pico), recesión (contracción) y depresión (valle)', 'Crecimiento y estabilidad', 'No existen ciclos económicos'], ans: 1,
        exp: 'El ciclo tiene 4 fases: expansión (crecimiento PIB), auge (pico máximo), recesión (contracción) y depresión/valle (punto mínimo antes de la recuperación).'
    },
    {
        id: 'ae15', cat: 'analisis_economico', q: 'La política fiscal expansiva consiste en:',
        opts: ['Subir tasas de interés', 'Aumentar el gasto público y/o reducir impuestos para estimular la demanda agregada', 'Reducir la oferta monetaria', 'Aumentar las reservas bancarias'], ans: 1,
        exp: 'La política fiscal expansiva usa mayor gasto público o menores impuestos para aumentar la demanda agregada y estimular el crecimiento económico.'
    }

,

    // ═══════════════════ v5 REGULACIÓN DEEP EXPANSION ═══════════════════
    {id:'r36',cat:'regulacion',q:'El prospecto de información de una emisión debe estar disponible en:',
     opts:['Solo la página de la SFC','La página web del emisor, de la SFC y del sistema de negociación','Solo la bolsa de valores','El Banco de la República'],ans:1,
     exp:'El prospecto debe publicarse en la web del emisor, de la SFC y del sistema de negociación donde estén inscritos los títulos (art. 5.2.1.1.4 Decreto 2555).'},
    {id:'r37',cat:'regulacion',q:'Los bonos convertibles en acciones (BOCEAS) se caracterizan porque:',
     opts:['Son bonos a tasa variable','Al vencimiento, el capital y rendimientos se pagan obligatoriamente en acciones del emisor','Solo pueden emitirlos bancos','Son bonos cupón cero'],ans:1,
     exp:'Los BOCEAS son Bonos Obligatoriamente Convertibles en Acciones: al vencimiento el inversionista recibe acciones en lugar de dinero.'},
    {id:'r38',cat:'regulacion',q:'Los bonos hipotecarios están respaldados por:',
     opts:['El patrimonio general del emisor','Créditos hipotecarios otorgados por establecimientos de crédito','Acciones del emisor','Títulos TES'],ans:1,
     exp:'Los bonos hipotecarios (Ley 546/1999) están respaldados por créditos hipotecarios. Puede ser hipotecarios (financian nuevos créditos) o estructurados (créditos preexistentes).'},
    {id:'r39',cat:'regulacion',q:'Los bonos de riesgo son emitidos por:',
     opts:['El Banco de la República','Empresas en procesos de reestructuración empresarial','Fondos de pensiones','La Bolsa de Valores'],ans:1,
     exp:'Los bonos de riesgo son títulos de deuda emitidos por empresas en proceso de reestructuración. Pueden o no tener rendimiento financiero y ser convertibles en acciones.'},
    {id:'r40',cat:'regulacion',q:'Los papeles comerciales tienen un plazo mínimo y máximo de:',
     opts:['1 a 5 años','30 a 180 días','Superior a 15 días e inferior a 1 año','Sin límite de plazo'],ans:2,
     exp:'Los papeles comerciales son pagarés con plazo superior a 15 días e inferior a 1 año. Sus recursos NO pueden destinarse a adquirir acciones o bonos convertibles.'},
    {id:'r41',cat:'regulacion',q:'La emisión rotativa de papeles comerciales permite:',
     opts:['Rotar el monto redimido colocando nuevamente hasta el valor global autorizado, sin superar 2 años','Emitir sin límite de tiempo','Cambiar la tasa de interés libremente','Redimir antes del vencimiento'],ans:0,
     exp:'En emisión rotativa, el emisor puede recolocar montos redimidos hasta el tope global autorizado, por máximo 2 años. La emisión única no permite rotación ni prórroga.'},
    {id:'r42',cat:'regulacion',q:'En la titularización, el agente de manejo tiene como función:',
     opts:['Entregar los activos al vehículo','Actuar como vocero del patrimonio autónomo emisor, recaudar recursos y solicitar autorización ante la SFC','Calificar los títulos','Auditar al originador'],ans:1,
     exp:'El agente de manejo es vocero del patrimonio autónomo emisor, gestiona la emisión, recauda recursos y debe propender por el manejo seguro y eficiente.'},
    {id:'r43',cat:'regulacion',q:'Los títulos de participación en una titularización otorgan al inversionista:',
     opts:['Una tasa de interés fija','Un derecho patrimonial sobre los activos del patrimonio autónomo','Solo el derecho a recibir cupones','Derechos políticos sobre el emisor'],ans:1,
     exp:'Los títulos de participación dan derecho patrimonial sobre los activos titularizados. Los de contenido crediticio dan derecho a capital+rendimientos fijos. Los mixtos combinan ambos.'},
    {id:'r44',cat:'regulacion',q:'Los Valores de Financiación Colaborativa (VFC/Crowdfunding) se caracterizan porque:',
     opts:['Se negocian en la BVC','No constituyen oferta pública y no pueden negociarse en el mercado principal ni segundo mercado','Son emitidos por el gobierno','Requieren calificación de riesgo'],ans:1,
     exp:'Los VFC son valores de deuda o capital emitidos en plataformas de crowdfunding. No son oferta pública, no se inscriben en el RNVE y no se negocian en mercado principal.'},
    {id:'r45',cat:'regulacion',q:'El mercado principal se diferencia del segundo mercado en que:',
     opts:['El principal es solo para derivados','En el principal participan todos los inversionistas; en el segundo solo inversionistas calificados o profesionales','No hay diferencia','El segundo mercado es internacional'],ans:1,
     exp:'El mercado principal es para el público general con requisitos de emisión estrictos. El segundo mercado se limita a inversionistas calificados/profesionales con requisitos menos estrictos.'},
    {id:'r46',cat:'regulacion',q:'El principio de finalidad en la compensación y liquidación establece que:',
     opts:['Las operaciones pueden ser revertidas en 24 horas','Una vez aceptada por el sistema, la operación es firme, irrevocable, exigible y oponible frente a terceros','Solo aplica a operaciones de renta fija','Las garantías pueden liberarse anticipadamente'],ans:1,
     exp:'El principio de finalidad (art. 10 Ley 964/2005) da firmeza a las operaciones: no pueden ser impugnadas, anuladas ni suspendidas una vez aceptadas por el sistema.'},
    {id:'r47',cat:'regulacion',q:'¿Quiénes pueden actuar como representantes legales de tenedores de bonos?',
     opts:['Cualquier persona jurídica','Bancos, corporaciones financieras y sociedades fiduciarias autorizadas por la SFC','Solo la AMV','El Ministerio de Hacienda'],ans:1,
     exp:'Solo bancos, corporaciones financieras y fiduciarias autorizadas por la SFC pueden ser representantes de tenedores de bonos. La sociedad emisora los designa inicialmente.'},
    {id:'r48',cat:'regulacion',q:'Los CDT son títulos nominativos que:',
     opts:['Pueden redimirse en cualquier momento','No son redimibles antes de su vencimiento','Solo se emiten en UVR','No pagan intereses'],ans:1,
     exp:'Los CDT no son redimibles antes del vencimiento. Si no se redimen al vencimiento, se prorrogan automáticamente por un término igual al inicialmente pactado.'},
    {id:'r49',cat:'regulacion',q:'El SEN (Sistema Electrónico de Negociación) es un sistema de negociación administrado por:',
     opts:['La SFC','El Banco de la República para negociar deuda pública','La BVC','La AMV'],ans:1,
     exp:'El SEN es administrado por el Banco de la República. Junto con el MEC (administrado por la BVC), son los principales sistemas de negociación de deuda pública.'},
    {id:'r50',cat:'regulacion',q:'Las garantías entregadas a un sistema de compensación y liquidación:',
     opts:['Pueden ser embargadas por orden judicial','No pueden ser objeto de embargo, secuestro u otra medida cautelar hasta que se cumplan las obligaciones','Se liberan automáticamente cada mes','Solo pueden ser en efectivo'],ans:1,
     exp:'Las garantías en sistemas de compensación no pueden ser embargadas ni retenidas hasta que se cumplan totalmente las obligaciones derivadas de las operaciones (art. 11 Ley 964).'},
    {id:'r51',cat:'regulacion',q:'Los bonos ordinarios se garantizan con:',
     opts:['Créditos hipotecarios','El patrimonio del emisor','Depósitos en el Banco de la República','Títulos TES'],ans:1,
     exp:'Los bonos ordinarios tienen las características generales de los bonos y se garantizan con el patrimonio del emisor (garantía general, no específica).'},

    // ═══════════════════ v5 RENTA VARIABLE DEEP EXPANSION ═══════════════════
    {id:'rv25',cat:'renta_variable',q:'El valor nominal de una acción se calcula como:',
     opts:['Precio de mercado / Acciones en circulación','Capital social / Número de acciones emitidas','Patrimonio neto / Acciones emitidas','Utilidad / Acciones'],ans:1,
     exp:'Valor nominal = Capital social / # acciones emitidas. Es fijo desde la constitución y es el precio mínimo al que pueden venderse las acciones.'},
    {id:'rv26',cat:'renta_variable',q:'Los ADR (American Depositary Receipts) son:',
     opts:['Acciones colombianas negociadas en la BVC','Títulos emitidos por un banco estadounidense que representan acciones de una empresa extranjera','Bonos del gobierno de EEUU','Derivados sobre índices americanos'],ans:1,
     exp:'Los ADR permiten a inversionistas estadounidenses invertir en empresas extranjeras. Un banco abre una fiducia con las acciones y emite ADR negociables en NYSE/NASDAQ.'},
    {id:'rv27',cat:'renta_variable',q:'En el Mercado Global Colombiano (MGC), los títulos de renta variable extranjeros:',
     opts:['Se negocian en dólares','Se negocian en pesos colombianos a través de la BVC y comisionistas afiliadas','Requieren cuenta en el exterior','Solo están disponibles para inversionistas profesionales'],ans:1,
     exp:'El MGC permite a inversionistas colombianos acceder a acciones internacionales negociándolas en COP a través de la BVC, con custodia en DECEVAL.'},
    {id:'rv28',cat:'renta_variable',q:'Una acción inactiva es aquella que:',
     opts:['Ha sido suspendida por la SFC','No ha tenido operaciones de marcación de precio en más de 30 días calendario','Ha perdido más del 50% de su valor','No paga dividendos'],ans:1,
     exp:'Una acción pasa a inactiva si en 30+ días calendario no ha tenido operaciones. Cuando hay un posible calce, se desata una subasta de volatilidad en el sistema.'},
    {id:'rv29',cat:'renta_variable',q:'El mercado de acciones en Colombia se suspende cuando el COLCAP cae:',
     opts:['5% en un día','10% en un día, se suspende 30 min; si cae otro 5% tras reactivación, se suspende definitivamente','15% en una semana','No existe mecanismo de suspensión automática'],ans:1,
     exp:'Circuit breaker: caída del 10% del COLCAP = suspensión 30 min. Si tras reactivar cae otro 5%, se suspende definitivamente hasta el día hábil siguiente.'},
    {id:'rv30',cat:'renta_variable',q:'Las operaciones de contado sobre acciones en Colombia se cumplen en:',
     opts:['T+0 (el mismo día)','T+2 (dos días hábiles después de la celebración)','T+5 (cinco días hábiles)','T+30 (treinta días)'],ans:1,
     exp:'Las operaciones de contado se cumplen en T+2 hasta las 4:30 p.m. Excepto BOCEAS que se cumplen en T+0 hasta las 7:00 p.m.'},
    {id:'rv31',cat:'renta_variable',q:'En una operación repo sobre acciones, el porcentaje de castigo (haircut) se aplica para:',
     opts:['Calcular la comisión de la bolsa','Determinar el valor efectivo de la garantía considerando la volatilidad del activo','Fijar la tasa de interés','Calcular impuestos'],ans:1,
     exp:'El haircut es un descuento sobre el precio del activo que refleja su riesgo de mercado. Se calcula usando medidas de volatilidad y es publicado por la CRCC.'},
    {id:'rv32',cat:'renta_variable',q:'El período exdividendo es el tiempo durante el cual:',
     opts:['Se pagan los dividendos','El comprador de acciones NO tiene derecho a percibir los dividendos pendientes de pago','Se suspende la negociación','Se calcula el dividendo'],ans:1,
     exp:'En el período exdividendo (entre primer día hábil de pago y 4 días hábiles antes), el comprador no recibe los dividendos. Permite al emisor actualizar el libro de accionistas.'},
    {id:'rv33',cat:'renta_variable',q:'Los títulos de participación se diferencian de las acciones porque representan:',
     opts:['Deuda con interés fijo','Un derecho patrimonial sobre un proyecto o activo específico en fideicomiso, no sobre una compañía','Solo derechos políticos','Participación en derivados'],ans:1,
     exp:'Los títulos de participación dan derecho sobre activos bajo encargo fiduciario (ej: proyectos inmobiliarios), a diferencia de las acciones que representan propiedad de una empresa.'},
    {id:'rv34',cat:'renta_variable',q:'Las acciones sin dividendo se caracterizan porque:',
     opts:['Nunca pagan dividendos','Son acciones recibidas como pago de dividendos en especie y no generan dividendos futuros','Se emiten solo para empleados','Son acciones del gobierno'],ans:1,
     exp:'Las acciones sin dividendo se emiten cuando la asamblea (80%+ aprobación) decide pagar dividendos en acciones. Esas acciones recibidas no pagan dividendo futuro.'},
    {id:'rv35',cat:'renta_variable',q:'El límite de repos sobre una acción respecto a su flotante es de:',
     opts:['10%','25%','50%','Sin límite'],ans:1,
     exp:'No se permiten nuevos repos si la relación entre acciones en repos y el flotante de esa especie supera el 25%. Adicionalmente, no puede superar 40 veces su promedio diario negociado.'},

    // ═══════════════════ v5 DERIVADOS DEEP ═══════════════════
    {id:'d19',cat:'derivados',q:'La base en futuros se calcula como:',
     opts:['Precio futuro × Precio spot','Precio futuro - Precio spot del subyacente','Tasa de interés × Plazo','Volatilidad × Delta'],ans:1,
     exp:'Base = Precio futuro - Precio spot. Si la base es positiva se llama contango; si es negativa, backwardation (normal para commodities con costo de almacenamiento).'},
    {id:'d20',cat:'derivados',q:'El contango en el mercado de futuros significa que:',
     opts:['El precio futuro es menor que el spot','El precio futuro es mayor que el precio spot','No hay diferencia entre futuro y spot','El mercado está cerrado'],ans:1,
     exp:'Contango: Futuro > Spot. Es la situación normal cuando hay costos de acarreo (almacenamiento, financiamiento). Backwardation: Futuro < Spot.'},
    {id:'d21',cat:'derivados',q:'La CRCC (Cámara de Riesgo Central de Contraparte) tiene como función principal:',
     opts:['Regular el mercado de derivados','Interponerse como contraparte de ambas partes en una operación, garantizando el cumplimiento','Emitir opciones','Fijar los precios de los futuros'],ans:1,
     exp:'La CRCC se convierte en compradora de todo vendedor y vendedora de todo comprador, eliminando el riesgo de contraparte. Exige márgenes y garantías para su gestión.'},
    {id:'d22',cat:'derivados',q:'Un warrant es:',
     opts:['Un tipo de bono','Una opción emitida por una empresa que da derecho a comprar sus acciones a un precio fijo','Un futuro sobre divisas','Un contrato de permuta financiera'],ans:1,
     exp:'Un warrant es similar a una opción call pero es emitido directamente por la empresa. Al ejercerse, se emiten acciones nuevas (a diferencia de opciones listadas que no diluyen).'},
    {id:'d23',cat:'derivados',q:'El valor intrínseco de una opción call es:',
     opts:['Siempre igual a la prima','Máximo entre cero y (Precio spot - Precio strike)','El precio de la acción subyacente','La volatilidad implícita'],ans:1,
     exp:'Valor intrínseco Call = Max(0, S-K). Valor intrínseco Put = Max(0, K-S). La prima = Valor intrínseco + Valor temporal.'},
    {id:'d24',cat:'derivados',q:'Un Cross Currency Swap implica:',
     opts:['Solo intercambio de tasas de interés en la misma moneda','Intercambio de principal y flujos de intereses en dos monedas diferentes','Solo intercambio de divisas al inicio','Intercambio de acciones entre dos bolsas'],ans:1,
     exp:'En un Cross Currency Swap se intercambian principal y flujos de interés en diferentes divisas. A diferencia del IRS tradicional, sí hay intercambio de nocional.'},
    {id:'d25',cat:'derivados',q:'Gamma en opciones mide:',
     opts:['La sensibilidad al paso del tiempo','La tasa de cambio de Delta respecto al precio del subyacente','La sensibilidad a la volatilidad','El costo de financiamiento'],ans:1,
     exp:'Gamma = ∂Delta/∂Precio. Es máxima cuando la opción está ATM. Indica cuánto cambia delta por cada $1 de movimiento del subyacente.'},

    // ═══════════════════ v5 RENTA FIJA DEEP ═══════════════════
    {id:'rf16',cat:'renta_fija',q:'Los TES Clase A tienen como destino:',
     opts:['Financiar el presupuesto nacional','Sustituir deuda contraída en OMAS y sustituir deuda interna con el Banco de la República','Financiar infraestructura','Pagar pensiones'],ans:1,
     exp:'TES Clase A: sustituyen deuda del gobierno en operaciones de mercado abierto (OMAS) o deuda con el Banco de la República.'},
    {id:'rf17',cat:'renta_fija',q:'Los TES Clase B se utilizan principalmente para:',
     opts:['Sustituir deuda del BanRep','Obtener recursos para apropiaciones presupuestales, operaciones de tesorería y generar curva de rendimientos','Financiar exportaciones','Pagar deuda externa'],ans:1,
     exp:'TES Clase B captan recursos para el presupuesto, operaciones de tesorería, y además proveen información al mercado generando una curva de rendimientos.'},
    {id:'rf18',cat:'renta_fija',q:'Un bono cupón cero se caracteriza porque:',
     opts:['Paga cupones mensuales','No paga intereses periódicos; paga al vencimiento el valor nominal más todos los intereses acumulados','Su tasa es variable','No tiene fecha de vencimiento'],ans:1,
     exp:'Un bono cupón cero se emite con descuento sobre su valor nominal y al vencimiento paga el valor nominal completo. La diferencia es el rendimiento del inversionista.'},
    {id:'rf19',cat:'renta_fija',q:'Los bonos subordinados se caracterizan porque en caso de liquidación:',
     opts:['Tienen prelación sobre todas las deudas','Se pagan después de los demás acreedores pero antes de los accionistas','Se pagan primero','No se pagan'],ans:1,
     exp:'La deuda subordinada tiene menor prelación que la deuda senior. En liquidación, se paga después de otros acreedores (senior) pero antes que los accionistas.'},
    {id:'rf20',cat:'renta_fija',q:'La tasa facial de un bono es:',
     opts:['La tasa de descuento del mercado','La tasa de interés que el emisor promete pagar periódicamente sobre el valor nominal','La TIR del bono','La tasa libre de riesgo'],ans:1,
     exp:'La tasa facial o cupón es la tasa contractual que determina los pagos periódicos de intereses. Es fija desde la emisión, a diferencia de la TIR que varía con el precio de mercado.'},
    {id:'rf21',cat:'renta_fija',q:'Cuando la tasa de mercado sube, el precio de un bono de tasa fija:',
     opts:['Sube','Baja (relación inversa entre tasa y precio)','No cambia','Depende del emisor'],ans:1,
     exp:'Existe relación inversa entre tasa y precio en renta fija: si las tasas suben, el valor presente de los flujos futuros disminuye y el precio del bono baja.'},

    // ═══════════════════ v5 DIVISAS DEEP ═══════════════════
    {id:'dv12',cat:'divisas',q:'Los IMC (Intermediarios del Mercado Cambiario) en Colombia son:',
     opts:['Solo casas de cambio','Establecimientos bancarios, corporaciones financieras, compañías de financiamiento, la FDN y sociedades comisionistas de bolsa','Solo el Banco de la República','Cualquier empresa que negocie dólares'],ans:1,
     exp:'Los IMC incluyen bancos, corporaciones financieras, compañías de financiamiento, la FDN y SCB. Están autorizados para comprar y vender divisas conforme a la regulación cambiaria.'},
    {id:'dv13',cat:'divisas',q:'La operación de arbitraje en el mercado cambiario consiste en:',
     opts:['Especular sobre la dirección del tipo de cambio','Aprovechar discrepancias de precio entre mercados o instrumentos para obtener ganancia sin riesgo','Comprar dólares para ahorro','Cubrirse contra riesgo cambiario'],ans:1,
     exp:'El arbitraje cambiario explota desigualdades de precio entre mercados (ej: diferencia spot en dos plazas, o entre spot/forward vs. diferencial de tasas). Teóricamente sin riesgo.'},
    {id:'dv14',cat:'divisas',q:'La posición de contado en moneda extranjera de un IMC incluye:',
     opts:['Solo los billetes en caja','Activos en ME menos pasivos en ME, excluyendo derivados','Solo los depósitos en el exterior','Todos los activos del banco'],ans:1,
     exp:'La posición de contado = activos en ME - pasivos en ME, sin incluir contingencias de derivados. La posición propia incluye además los derechos y obligaciones en derivados sobre ME.'},
    {id:'dv15',cat:'divisas',q:'Las operaciones de mercado cambiario que deben canalizarse a través de IMC son:',
     opts:['Todas las operaciones en dólares','Importaciones, exportaciones, inversión extranjera directa, endeudamiento externo y sus pagos','Solo las compras superiores a USD 10.000','Solo las transferencias al exterior'],ans:1,
     exp:'Las operaciones de cambio obligatorias (importaciones, exportaciones, IED, deuda externa, inversiones y derivados financieros) deben canalizarse por IMC o cuentas de compensación.'},

    // ═══════════════════ v5 PORTAFOLIOS DEEP ═══════════════════
    {id:'p13',cat:'portafolios',q:'La covarianza entre dos activos mide:',
     opts:['El riesgo individual de cada activo','La dirección y magnitud en que los rendimientos de dos activos se mueven juntos','La rentabilidad promedio','El máximo drawdown'],ans:1,
     exp:'La covarianza mide el co-movimiento entre rendimientos. Positiva: se mueven en la misma dirección. Negativa: dirección opuesta. Cero: no hay relación lineal.'},
    {id:'p14',cat:'portafolios',q:'El coeficiente de correlación entre dos activos varía entre:',
     opts:['0 y 100','0 y 1','-1 y +1','-100 y +100'],ans:2,
     exp:'Correlación = Covarianza/(σA×σB). Va de -1 (perfectamente inversa) a +1 (perfectamente directa). A menor correlación, mayor beneficio de diversificación.'},
    {id:'p15',cat:'portafolios',q:'El CAPM (Capital Asset Pricing Model) establece que el rendimiento esperado de un activo es:',
     opts:['Solo la tasa libre de riesgo','Rf + β × (Rm - Rf), donde Rf es la tasa libre de riesgo y Rm el retorno del mercado','El promedio histórico de rendimientos','La inflación más un spread'],ans:1,
     exp:'E(Ri) = Rf + βi(E(Rm)-Rf). El rendimiento esperado depende del riesgo sistemático (β). A mayor beta, mayor rendimiento exigido.'},
    {id:'p16',cat:'portafolios',q:'La Línea del Mercado de Capitales (CML) representa:',
     opts:['La relación riesgo-retorno de un activo individual','La relación riesgo-retorno de portafolios eficientes combinando el activo libre de riesgo con el portafolio de mercado','La política monetaria','La curva de rendimientos'],ans:1,
     exp:'La CML conecta el activo libre de riesgo con el portafolio de mercado (tangente a la frontera eficiente). Todos los portafolios eficientes están sobre esta línea.'},
    {id:'p17',cat:'portafolios',q:'La SML (Security Market Line) se diferencia de la CML en que:',
     opts:['Son lo mismo','La SML aplica a activos individuales usando beta como medida de riesgo; la CML solo aplica a portafolios eficientes','La SML usa desviación estándar','La CML usa beta'],ans:1,
     exp:'SML: E(Ri)=Rf+βi(Rm-Rf) para cualquier activo. CML: E(Rp)=Rf+[(Rm-Rf)/σm]×σp solo para portafolios eficientes. La SML es más general.'},

    // ═══════════════════ v5 FONDOS DEEP ═══════════════════
    {id:'fo14',cat:'fondos',q:'Un FIC cerrado se diferencia de uno abierto porque:',
     opts:['No cobra comisión','Las participaciones solo pueden redimirse al vencimiento del plazo o en las condiciones del reglamento','No tiene administrador','Invierte solo en acciones'],ans:1,
     exp:'En el FIC cerrado hay restricciones de redención: solo al vencimiento o en condiciones del reglamento. El abierto permite entrada y salida en cualquier momento.'},
    {id:'fo15',cat:'fondos',q:'La rentabilidad mínima obligatoria en fondos de pensiones obligatorias es:',
     opts:['No existe ese concepto','Un piso de rendimiento que las AFP deben garantizar, calculado con base en benchmarks definidos por la SFC','El IPC','La DTF'],ans:1,
     exp:'La rentabilidad mínima es un piso que las AFP deben garantizar. Si no lo alcanzan, deben cubrirlo con la reserva de estabilización y su patrimonio.'},
    {id:'fo16',cat:'fondos',q:'El retiro programado como modalidad de pensión consiste en:',
     opts:['La transferencia del ahorro a una aseguradora','El afiliado mantiene su cuenta en la AFP y recibe mesadas calculadas según el saldo y expectativa de vida, valor variable','Un retiro único del total del ahorro','Un préstamo del gobierno'],ans:1,
     exp:'En retiro programado la mesada es variable: depende del saldo, rendimientos del fondo y expectativa de vida. Si el saldo se agota, el Fondo de Garantía de Pensión Mínima cubre.'},
    {id:'fo17',cat:'fondos',q:'Los FIC escalonados (fund of funds) invierten en:',
     opts:['Solo acciones locales','Participaciones de otros Fondos de Inversión Colectiva','Solo títulos de renta fija','Bienes inmuebles'],ans:1,
     exp:'Los FIC escalonados o fondos de fondos (fund of funds) invierten su portafolio mayoritariamente en participaciones de otros FIC, buscando mayor diversificación.'},
    {id:'fo18',cat:'fondos',q:'La sociedad administradora de un FIC tiene prohibido:',
     opts:['Cobrar comisión de administración','Garantizar rendimientos al inversionista o asumir pérdidas del fondo con su patrimonio propio','Invertir en títulos de renta fija','Tener varios fondos'],ans:1,
     exp:'La sociedad administradora NO puede garantizar rendimientos ni asumir pérdidas con su propio patrimonio. El riesgo de la inversión lo asume el inversionista.'},

    // ═══════════════════ v5 RIESGOS DEEP ═══════════════════
    {id:'ri15',cat:'riesgos',q:'El riesgo operativo incluye pérdidas por:',
     opts:['Solo fluctuaciones de mercado','Fallas en procesos internos, personas, sistemas o eventos externos','Solo incumplimiento de contrapartes','Solo cambios regulatorios'],ans:1,
     exp:'El riesgo operativo (SARO) abarca fallas en procesos, errores humanos, fallos tecnológicos y eventos externos (fraude, desastres). Es transversal a todas las áreas.'},
    {id:'ri16',cat:'riesgos',q:'El riesgo de contraparte es:',
     opts:['El riesgo de que un activo pierda valor','El riesgo de que la otra parte en una operación no cumpla sus obligaciones','El riesgo de cambios regulatorios','El riesgo país'],ans:1,
     exp:'El riesgo de contraparte es una forma de riesgo de crédito donde la contraparte de una operación financiera incumple sus obligaciones contractuales.'},
    {id:'ri17',cat:'riesgos',q:'El Expected Shortfall (ES) o CVaR se diferencia del VaR en que:',
     opts:['Es menos conservador que el VaR','Mide la pérdida esperada promedio en los escenarios que exceden el VaR (cola de la distribución)','Solo usa distribución normal','Ignora la cola de la distribución'],ans:1,
     exp:'El ES/CVaR mide la pérdida promedio cuando se excede el VaR. Es más informativo que el VaR porque cuantifica qué tan grandes pueden ser las pérdidas extremas.'},
    {id:'ri18',cat:'riesgos',q:'El riesgo legal se refiere a:',
     opts:['El riesgo de mercado','Pérdidas por deficiencias en la documentación legal, cambios normativos adversos o fallos judiciales desfavorables','El riesgo de liquidez','El riesgo cambiario'],ans:1,
     exp:'El riesgo legal incluye contratos inadecuados, cambios regulatorios adversos, demandas, y la imposibilidad de ejecutar contratos. Es un componente del riesgo operativo.'},
    {id:'ri19',cat:'riesgos',q:'El SARM (Sistema de Administración de Riesgo de Mercado) obliga a las entidades a:',
     opts:['Solo invertir en renta fija','Identificar, medir, controlar y monitorear el riesgo de mercado de sus posiciones','No asumir ningún riesgo','Reportar solo anualmente'],ans:1,
     exp:'El SARM establece políticas y procedimientos para gestionar el riesgo de mercado (pérdidas por movimientos adversos en tasas, precios, tipos de cambio) de las posiciones.'},

    // ═══════════════════ v5 ÉTICA DEEP ═══════════════════
    {id:'e14',cat:'etica',q:'El deber de confidencialidad del intermediario implica:',
     opts:['Compartir información con todos los clientes','Guardar reserva sobre las operaciones e información del cliente, salvo excepciones legales','No es obligatorio en Colombia','Solo aplica a clientes institucionales'],ans:1,
     exp:'El intermediario debe mantener confidencial la información de sus clientes, sus operaciones y portafolios. Solo puede revelarla por orden judicial o requerimiento de autoridades.'},
    {id:'e15',cat:'etica',q:'El principio de prevalencia del interés del cliente obliga al intermediario a:',
     opts:['Priorizar siempre las operaciones por cuenta propia','Dar prelación a las órdenes del cliente sobre las operaciones por cuenta propia cuando exista conflicto','Cobrar la menor comisión posible','Solo atender inversionistas profesionales'],ans:1,
     exp:'Cuando hay conflicto de interés, el intermediario debe dar prioridad a las órdenes del cliente sobre sus propias operaciones. La prevalencia del interés del cliente es principio fundamental.'},
    {id:'e16',cat:'etica',q:'El know your customer (KYC) incluye:',
     opts:['Solo verificar la identidad del cliente','Conocer la identidad, actividad económica, perfil de riesgo y origen de fondos del cliente','Solo clasificar al cliente como profesional','Revisar solo el historial crediticio'],ans:1,
     exp:'KYC es un proceso integral: verificar identidad, conocer actividad económica, origen de recursos, perfil de riesgo, transaccionalidad esperada. Es base del SARLAFT y perfilamiento.'},
    {id:'e17',cat:'etica',q:'El conflicto de interés en el mercado de valores surge cuando:',
     opts:['El cliente no está de acuerdo con la comisión','El interés del intermediario o de un tercero puede comprometer la actuación imparcial del intermediario frente al cliente','Solo en operaciones internacionales','Cuando hay pérdidas en el portafolio'],ans:1,
     exp:'Hay conflicto de interés cuando el intermediario tiene incentivos que podrían llevarle a actuar en contra de los intereses de su cliente. Deben gestionarse y revelarse.'},

    // ═══════════════════ v5 AUTORREGULACIÓN DEEP ═══════════════════
    {id:'a16',cat:'autorregulacion',q:'El RNPMV (Registro Nacional de Profesionales del Mercado de Valores) es administrado por:',
     opts:['La SFC','La AMV, donde se inscriben las personas certificadas para actuar en el mercado de valores','El Banco de la República','La BVC'],ans:1,
     exp:'El RNPMV es administrado por la AMV. Es obligatorio inscribirse para quienes vayan a desempeñar funciones como operadores, asesores y directivos del mercado de valores.'},
    {id:'a17',cat:'autorregulacion',q:'La función de supervisión de la AMV consiste en:',
     opts:['Emitir reglamentos','Realizar el seguimiento y monitoreo del cumplimiento de normas del mercado por parte de las personas vinculadas a sus miembros','Sancionar a los emisores','Aprobar nuevas emisiones'],ans:1,
     exp:'La función de supervisión de la AMV incluye el monitoreo en tiempo real de operaciones, vigilancia de conductas y revisión del cumplimiento normativo de las personas certificadas.'},
    {id:'a18',cat:'autorregulacion',q:'La AMV puede imponer como sanción disciplinaria la expulsión, lo que significa:',
     opts:['Una multa mayor','La prohibición permanente de ejercer actividades en el mercado de valores','Suspensión temporal de 30 días','Una amonestación pública'],ans:1,
     exp:'La expulsión es la sanción más severa: impide permanentemente que la persona ejerza actividades en el mercado de valores. Las sanciones van de amonestación a expulsión.'},

    // ═══════════════════ v5 ANÁLISIS ECONÓMICO DEEP ═══════════════════
    {id:'ae16',cat:'analisis_economico',q:'La tasa de cambio real efectiva mide:',
     opts:['Solo el precio del dólar en pesos','El poder adquisitivo de la moneda nacional respecto a una canasta de monedas de socios comerciales, ajustado por inflación','La tasa interbancaria','El IPC'],ans:1,
     exp:'La tasa de cambio real efectiva ajusta la tasa nominal por los diferenciales de inflación con los socios comerciales. Indica competitividad real de las exportaciones.'},
    {id:'ae17',cat:'analisis_economico',q:'La regla de Taylor establece que la tasa de interés de política monetaria debe responder a:',
     opts:['Solo la inflación','La desviación de la inflación respecto a su meta y la brecha del producto (PIB real vs potencial)','Solo el tipo de cambio','La tasa de desempleo únicamente'],ans:1,
     exp:'Taylor: i = r* + π + α(π-π*) + β(y-y*). La tasa sube si la inflación excede la meta o si el PIB real sobrepasa el potencial, y baja en la situación contraria.'},
    {id:'ae18',cat:'analisis_economico',q:'El multiplicador bancario relaciona:',
     opts:['La tasa de cambio y la inflación','La cantidad de dinero que el sistema bancario puede crear a partir de los depósitos, según el encaje bancario','La deuda pública y el PIB','Las exportaciones y las importaciones'],ans:1,
     exp:'Multiplicador = 1/Encaje. Si el encaje es 10%, cada peso depositado puede generar hasta 10 pesos en el sistema. A menor encaje, mayor capacidad de creación de dinero.'},
    {id:'ae19',cat:'analisis_economico',q:'El déficit fiscal se financia principalmente mediante:',
     opts:['Solo impresión de dinero','Emisión de deuda pública (TES), impuestos adicionales y privatizaciones','Reducción de la tasa de interés','Aumento del encaje'],ans:1,
     exp:'El déficit fiscal (gasto > ingresos) se financia con emisión de TES (deuda interna), deuda externa, aumento de impuestos o venta de activos del estado.'},
    {id:'ae20',cat:'analisis_economico',q:'La paridad de poder adquisitivo (PPA) establece que:',
     opts:['Las tasas de interés deben ser iguales en todos los países','A largo plazo, el tipo de cambio debe ajustarse para que el poder de compra sea equivalente entre países','Las importaciones deben igualar las exportaciones','El PIB per cápita debe convergir'],ans:1,
     exp:'La PPA sostiene que a largo plazo, una canasta de bienes debería costar lo mismo en dos países cuando se expresa en la misma moneda (ajustado por tipo de cambio).'},

    // ═══════════════════ v5 MATEMÁTICAS DEEP ═══════════════════
    {id:'m42',cat:'matematicas',q:'La tasa forward implícita entre el año 1 y el año 2 se puede calcular como:',
     opts:['(1+r2)/(1+r1)','[(1+r2)²/(1+r1)] - 1','(r2-r1)/2','r1+r2'],ans:1,
     exp:'La tasa forward f(1,2) = [(1+r2)²/(1+r1)] - 1, donde r1 y r2 son las tasas spot a 1 y 2 años respectivamente. Refleja la expectativa de tasas futuras.'},
    {id:'m43',cat:'matematicas',q:'Un bono al descuento con valor nominal de $1.000 se compra en $950. Su rentabilidad al vencimiento es:',
     opts:['5%','5,26%','4,76%','9,5%'],ans:1,
     exp:'Rendimiento = (1000-950)/950 = 50/950 = 5,26%. Se calcula sobre el monto invertido ($950), no sobre el valor nominal.'},
    {id:'m44',cat:'matematicas',q:'Si la tasa spot a 1 año es 8% y a 2 años es 10%, la tasa forward del año 2 es aproximadamente:',
     opts:['9%','12,04%','10%','18%'],ans:1,
     exp:'f(1,2) = [(1,10)²/(1,08)] - 1 = [1,21/1,08] - 1 = 1,12037 - 1 = 12,04%. La tasa forward del año 2 es mayor que la tasa spot a 2 años.'},
    {id:'m45',cat:'matematicas',q:'El concepto de duration de Macaulay es:',
     opts:['El plazo al vencimiento del bono','El promedio ponderado de los plazos de cada flujo del bono, ponderado por su valor presente','La tasa interna de retorno','El valor presente del bono'],ans:1,
     exp:'Duration de Macaulay = Σ[t × VP(Ct)/P]. Es el promedio ponderado del tiempo en que se reciben los flujos. Un cupón cero tiene duration igual a su plazo.'},
    {id:'m46',cat:'matematicas',q:'Si un inversionista requiere una tasa real del 4% y la inflación esperada es 6%, la tasa nominal aproximada por Fisher es:',
     opts:['10%','10,24%','2%','24%'],ans:1,
     exp:'Fisher exacto: (1+nominal) = (1+real)(1+inflación) = 1,04×1,06 = 1,1024. Tasa nominal = 10,24%. La aproximación lineal sería 10%.'}

];

export const flashcards = [
    { id: 'fc1', cat: 'regulacion', front: '¿Qué es el SIMEV?', back: 'Sistema Integral de Información del Mercado de Valores. Compuesto por RNVE, RNAMV y RNPMV.' },
    { id: 'fc2', cat: 'regulacion', front: '¿Qué es la Ley 964 de 2005?', back: 'Marco normativo general del mercado de valores colombiano. Establece la intervención del gobierno, autorregulación y estructura del mercado.' },
    { id: 'fc3', cat: 'regulacion', front: '¿Qué es una OPA?', back: 'Oferta Pública de Adquisición. Requerida para adquirir 25% o más del capital con derecho a voto de una sociedad inscrita en bolsa.' },
    { id: 'fc4', cat: 'autorregulacion', front: '¿Qué es la AMV?', back: 'Autorregulador del Mercado de Valores de Colombia. Entidad que vigila, controla y disciplina a los participantes del mercado.' },
    { id: 'fc5', cat: 'autorregulacion', front: 'Principios de la autorregulación', back: 'Racionalidad, Responsabilidad, Transparencia e Integridad.' },
    { id: 'fc6', cat: 'etica', front: '¿Qué es información privilegiada?', back: 'Información concreta, no pública, que un inversionista razonable habría tenido en cuenta para tomar decisiones de inversión.' },
    { id: 'fc7', cat: 'etica', front: '¿Qué es el lavado de activos?', back: 'Proceso de ocultar, manejar o invertir bienes de origen ilegal para hacerlos parecer legítimos.' },
    { id: 'fc8', cat: 'riesgos', front: 'Tipos principales de riesgo financiero', back: 'Riesgo de mercado, crédito, operacional, liquidez y legal.' },
    { id: 'fc9', cat: 'riesgos', front: '¿Qué es el riesgo operacional?', back: 'Probabilidad de pérdidas por fallas en procesos, personas, sistemas internos o eventos externos. Incluye riesgo legal, excluye estratégico y de imagen.' },
    { id: 'fc10', cat: 'matematicas', front: 'Relación precio-tasa en bonos', back: 'Relación INVERSA: si las tasas suben, los precios bajan. Si las tasas bajan, los precios suben.' },
    { id: 'fc11', cat: 'matematicas', front: 'Precio limpio vs. precio sucio', back: 'Precio limpio = precio sin intereses causados. Precio sucio = precio limpio + intereses causados (accrued interest).' },
    { id: 'fc12', cat: 'renta_fija', front: '¿Qué es un Repo?', back: 'Operación donde se venden títulos de renta fija con compromiso de recompra en fecha posterior a precio pactado.' },
    { id: 'fc13', cat: 'renta_fija', front: '¿Qué son los TES?', back: 'Títulos de Tesorería, títulos de deuda pública emitidos por el Gobierno Nacional a través del Ministerio de Hacienda.' },
    { id: 'fc14', cat: 'renta_fija', front: '¿Qué son los TIDIS?', back: 'Títulos de Devolución de Impuestos, emitidos por la DIAN como devolución de saldos a favor en impuestos.' },
    { id: 'fc15', cat: 'derivados', front: 'Call vs Put', back: 'Call = derecho a COMPRAR. Put = derecho a VENDER. El comprador tiene el derecho; el vendedor (emisor) tiene la obligación.' },
    { id: 'fc16', cat: 'derivados', front: 'Opción Europea vs Americana', back: 'Europea: solo se ejerce al vencimiento. Americana: se puede ejercer en cualquier momento hasta el vencimiento.' },
    { id: 'fc17', cat: 'derivados', front: 'Forward vs Futuro', back: 'Forward: OTC, no estandarizado, sin cámara de compensación. Futuro: cotiza en bolsa, estandarizado, con cámara de compensación.' },
    { id: 'fc18', cat: 'divisas', front: '¿Qué es la TRM?', back: 'Tasa Representativa del Mercado. Calculada y certificada por la SFC con base en operaciones spot del día anterior.' },
    { id: 'fc19', cat: 'divisas', front: '¿Qué es un NDF?', back: 'Non-Delivery Forward. Forward de divisas que se liquida por compensación financiera (diferencia entre tasa pactada y spot), sin entrega física.' },
    { id: 'fc20', cat: 'divisas', front: '¿Qué es la posición propia?', back: 'Diferencia entre activos y pasivos en moneda extranjera de un IMC, incluyendo derivados.' },
    { id: 'fc21', cat: 'portafolios', front: '¿Qué es la frontera eficiente?', back: 'Conjunto de portafolios que maximizan el rendimiento esperado para cada nivel de riesgo. Concepto de Markowitz.' },
    { id: 'fc22', cat: 'portafolios', front: 'Riesgo sistemático vs no sistemático', back: 'Sistemático: afecta todo el mercado, NO diversificable. No sistemático: específico de una empresa/sector, SÍ diversificable.' },
    { id: 'fc23', cat: 'fondos', front: '¿Qué es un FIC?', back: 'Fondo de Inversión Colectiva. Mecanismo que reúne aportes de varias personas para inversión colectiva con resultados compartidos.' },
    { id: 'fc24', cat: 'fondos', front: 'Multifondos de pensiones', back: 'Tres perfiles: Conservador, Moderado y de Mayor Riesgo. El afiliado elige según su perfil y cercanía a la jubilación.' },
,
    { id: 'fc25', cat: 'etica', front: "Principios del Decreto 2555 para conflictos de interés", back: "Transparencia del mercado, Confidencialidad y reserva, Uso adecuado de información, Lealtad, Profesionalismo, Respeto de la ley." },
    { id: 'fc26', cat: 'etica', front: "¿Qué es el VTU?", back: "Valor Total Unificado. Valor único (% EA y pesos) que indica al cliente el costo total real de un producto financiero. Creado por Ley 1748 de 2014." },
    { id: 'fc27', cat: 'etica', front: "Ley 1778 de 2016", back: "Ley antisoborno/anticorrupción. Sanciona el soborno transnacional y promueve programas de ética empresarial." },
    { id: 'fc28', cat: 'fondos', front: "RAIS vs RPM: destino de aportes", back: "RAIS: cuenta individual de ahorro pensional. RPM: fondo común de reparto (Colpensiones)." },
    { id: 'fc29', cat: 'fondos', front: "RAIS: edad de pensión", back: "No hay edad obligatoria. Se puede pensionar a cualquier edad si el capital alcanza para financiar el 110% de un SMMLV." },
    { id: 'fc30', cat: 'fondos', front: "Tres pilares del sistema de protección a la vejez", back: "1) Subsidiado (bajos ingresos/BEPS), 2) Contributivo (cotizaciones obligatorias RAIS/RPM), 3) Voluntario (ahorro adicional con beneficios tributarios)." },
    { id: 'fc31', cat: 'fondos', front: "Semanas mínimas para pensión en RPM", back: "1.300 semanas de cotización. Edad: 57 mujeres, 62 hombres." },
    { id: 'fc32', cat: 'portafolios', front: "¿Qué es el IPS?", back: "Investment Policy Statement. Documento que establece estrategia, tolerancia al riesgo, horizonte, tipos de activos y metas del plan de inversión." },
    { id: 'fc33', cat: 'portafolios', front: "Asset allocation estratégico vs táctico", back: "Estratégico: distribución fundamental entre clases de activos a largo plazo. Táctico: ajustes de corto plazo aprovechando oportunidades del mercado." },
    { id: 'fc34', cat: 'portafolios', front: "Perfiles de riesgo del inversionista", back: "Muy conservador, Conservador, Moderado, Arriesgado, Dinámico. Del menor al mayor apetito por riesgo." },
    { id: 'fc35', cat: 'riesgos', front: "¿Qué es el VaR?", back: "Value at Risk. Máxima pérdida esperada en un horizonte de tiempo dado con un nivel de confianza determinado." },
    { id: 'fc36', cat: 'riesgos', front: "¿Qué es el SARLAFT?", back: "Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo." },
    { id: 'fc37', cat: 'renta_fija', front: "Duración de un bono", back: "Mide la sensibilidad del precio a cambios en tasas de interés. A mayor duración, mayor sensibilidad." },
    { id: 'fc38', cat: 'renta_fija', front: "Bono cupón cero", back: "No paga cupones periódicos. Se emite a descuento y se redime a valor nominal al vencimiento." },
    { id: 'fc39', cat: 'derivados', front: "¿Qué hace la CRCC?", back: "Cámara de Riesgo Central de Contraparte. Se interpone entre compradores y vendedores de derivados, garantizando el cumplimiento." },
    { id: 'fc40', cat: 'divisas', front: "Mercado cambiario vs mercado libre", back: "Cambiario: operaciones que DEBEN canalizarse por IMCs (importaciones, exportaciones, inversión extranjera). Libre: operaciones no obligatoriamente canalizables." }
,
    { id: 'fc41', cat: 'renta_variable', front: "Tipos de acciones en Colombia", back: "Ordinarias (derecho a voto + flujo residual), Preferenciales (dividendo fijo, sin voto), Privilegiadas (beneficio económico + voto), Sin dividendo (entregadas como pago en especie)." },
    { id: 'fc42', cat: 'renta_variable', front: "ADR vs GDR", back: "ADR: emitido por banco de EE.UU. para cotizar en mercados estadounidenses. GDR: emitido por banco de otro país para cotizar en otros mercados internacionales." },
    { id: 'fc43', cat: 'renta_variable', front: "Valor nominal vs patrimonial vs de mercado", back: "Nominal: Capital social / acciones emitidas (fijo). Patrimonial: Patrimonio neto / acciones (variable). De mercado: Precio de cotización en bolsa (variable, oferta/demanda)." },
    { id: 'fc44', cat: 'renta_variable', front: "Inversionista profesional vs cliente inversionista", back: "Profesional: Patrimonio ≥ 157.878 UVT + al menos 1 condición (portafolio, operaciones, certificación AMV, vigilado por SFC). Cliente inversionista: quien no cumple esas condiciones." },
    { id: 'fc45', cat: 'divisas', front: "Operaciones obligatoriamente canalizables por MC", back: "Importaciones/exportaciones, endeudamiento externo, inversiones de capital del exterior, inversiones colombianas en exterior, inversiones financieras en exterior, avales/garantías en ME, derivados." },
    { id: 'fc46', cat: 'divisas', front: "Cuentas de compensación", back: "Cuentas bancarias en ME en el exterior, registradas ante BanRep para operaciones cambiarias. Registro: máximo 1 mes después de la primera operación. Reportes mensuales obligatorios." },
    { id: 'fc47', cat: 'renta_fija', front: "Precio limpio vs precio sucio", back: "Precio sucio = precio limpio + intereses acumulados. Los TES se negocian por precio limpio o TIR. El precio sucio es lo que paga efectivamente el comprador." },
    { id: 'fc48', cat: 'renta_fija', front: "Descuento vs Prima vs Par", back: "Descuento: TIR > tasa facial → precio limpio < 100%. Prima: TIR < tasa facial → precio limpio > 100%. Par: TIR = tasa facial → precio limpio = 100%." },
    { id: 'fc49', cat: 'riesgos', front: "4 subcategorías de riesgo de mercado", back: "1) Tasa de interés, 2) Renta variable, 3) Tasa de cambio, 4) Precio de commodities." },
    { id: 'fc50', cat: 'riesgos', front: "Riesgo específico vs sistemático", back: "Específico (idiosincrático): propio de la empresa (huelgas, fallas). Sistemático: afecta todo el mercado (reformas, crisis). El específico se diversifica, el sistemático no." },
    { id: 'fc51', cat: 'riesgos', front: "Factores ASG/ESG", back: "Ambiental (cambio climático, contaminación), Social (empleados, comunidad, producto), Gobernanza (junta directiva, compensación, anticorrupción). Afectan valor de largo plazo." },
    { id: 'fc52', cat: 'derivados', front: "Forward vs Futuro", back: "Forward: OTC, a la medida, una fecha, riesgo de contraparte. Futuro: en bolsa, estandarizado, compensación diaria, respaldado por CRCC." },
    { id: 'fc53', cat: 'derivados', front: "Opciones: europeas vs americanas vs asiáticas", back: "Europeas: se ejercen solo al vencimiento. Americanas: se ejercen en cualquier momento hasta el vencimiento. Asiáticas: precio de ejercicio basado en promedio del subyacente." },
    { id: 'fc54', cat: 'derivados', front: "CDS (Credit Default Swap)", back: "Derivado de crédito. El comprador paga primas periódicas; si ocurre default del emisor, el vendedor compensa. En Colombia los residentes pueden celebrarlos pero NO emitirlos." },
    { id: 'fc55', cat: 'analisis_economico', front: "PIB: métodos de cálculo", back: "1) Producción (bienes finales), 2) Valor agregado (ventas - insumos), 3) Ingresos (salarios + intereses + arriendos + utilidades), 4) Gasto (consumo + inversión + gasto público)." },
    { id: 'fc56', cat: 'analisis_economico', front: "IPC vs IPP", back: "IPC: mide cambio en precios de la canasta familiar (443 artículos, 38 ciudades, elaborado por DANE). IPP: mide precios a nivel de producción/mayorista." }
,
    { id: 'fc57', cat: 'matematicas', front: "Interés simple vs compuesto", back: "Simple: I = VP × ip × n (intereses solo sobre capital). Compuesto: VF = VP × (1+ip)^n (intereses sobre intereses). La reinversión genera mayor rentabilidad." },
    { id: 'fc58', cat: 'matematicas', front: "Conversión nominal → periódica → EA", back: "1) ip = Nominal/n. 2) EA = (1+ip)^(Base/días) - 1. Ejemplo: 6% NATV → ip=1,5% → EA = (1,015)^4 - 1 = 6,136%." },
    { id: 'fc59', cat: 'matematicas', front: "Tasa anticipada (ipa) ↔ vencida (ipv)", back: "ipv = ipa/(1-ipa). ipa = ipv/(1+ipv). Ejemplo: 2% T.A. = 2,04% T.V. La anticipada siempre es menor numéricamente que la vencida equivalente." },
    { id: 'fc60', cat: 'matematicas', front: "Fórmula de la TIR", back: "TIR = (VF/VP)^(Base/n) - 1. Donde VF=valor futuro, VP=valor presente, Base=365 o 360, n=días al vencimiento." },
    { id: 'fc61', cat: 'matematicas', front: "Tasa combinada (Fisher) para indicadores indexados", back: "Tasa total = (1+indicador) × (1+margen) - 1. Ej: UVR+6% con IPC 3,27% → (1,06)(1,0327)-1 = 9,47%. NO se suman aritméticamente." },
    { id: 'fc62', cat: 'matematicas', front: "Componentes de la tasa de interés (CFA)", back: "ic = (1+ir)(1+if)(1+ip)(1+il)(1+iv) - 1. ir=real, if=inflación, ip=crédito, il=liquidez, iv=vencimiento." },
    { id: 'fc63', cat: 'matematicas', front: "Anualidad vencida: fórmula de cuota", back: "A = VP × [i(1+i)^n / ((1+i)^n - 1)]. Primero convertir EA a tasa periódica. Ej: 20% EA → ip mensual = (1,20)^(1/12)-1 = 1,53%." },
    { id: 'fc64', cat: 'matematicas', front: "Regla para sumar spreads", back: "Solo se pueden sumar tasas en la MISMA periodicidad y naturaleza. DTF 4,34% T.A. + spread 4% T.A. = 8,34% N.A.T.A. Si están en distintas periodicidades, primero convertir." }
,

    { id: 'fc65', cat: 'regulacion', front: "Repo vs Simultánea vs TTV", back: "Repo: venta con recompra, HAY transferencia de propiedad. Simultánea: compraventa con retroventa, NO hay transferencia de propiedad. TTV: préstamo temporal de valores con contraprestación." },
    { id: 'fc66', cat: 'regulacion', front: "Valores nominativos vs a la orden vs al portador", back: "Nominativos: endoso + registro emisor. A la orden: endoso + entrega. Al portador: solo entrega. Cada tipo tiene diferente mecanismo de transferencia." },
    { id: 'fc67', cat: 'regulacion', front: "Operación sospechosa (SARLAFT)", back: "Aquella que no guarda relación con la actividad económica del cliente o se aparta de patrones habituales, y tras análisis, carece de explicación económica o jurídica." },
    { id: 'fc68', cat: 'autorregulacion', front: "Proceso disciplinario AMV - Etapas", back: "1) Indagación preliminar, 2) Investigación formal, 3) Formulación de cargos, 4) Descargos, 5) Pruebas, 6) Alegatos, 7) Fallo del Tribunal Disciplinario." },
    { id: 'fc69', cat: 'etica', front: "Front running vs Churning", back: "Front running: operar por cuenta propia ANTES que el cliente usando su info. Churning: rotar excesivamente el portafolio del cliente para generar comisiones innecesarias." },
    { id: 'fc70', cat: 'etica', front: "Murallas chinas (Chinese Walls)", back: "Barreras organizacionales que impiden flujo de información privilegiada entre áreas de la entidad (ej: banca de inversión vs trading). Previenen conflictos de interés." },
    { id: 'fc71', cat: 'renta_variable', front: "MSCI COLCAP", back: "Principal índice bursátil de Colombia. Mide desempeño de acciones más líquidas y de mayor capitalización de la BVC. Reemplazó al antiguo IGBC." },
    { id: 'fc72', cat: 'renta_variable', front: "RPG, Dividend Yield y UPA", back: "RPG = Precio/UPA (veces utilidad). Dividend Yield = Dividendo/Precio (%). UPA = Utilidad neta / Acciones en circulación. Los 3 son múltiplos comparables clave." },
    { id: 'fc73', cat: 'derivados', front: "Nemotécnicos futuros BVC - Meses", back: "F=Ene, G=Feb, H=Mar, J=Abr, K=May, M=Jun, N=Jul, Q=Ago, U=Sep, V=Oct, X=Nov, Z=Dic. Ej: TRMZ24F = futuro TRM diciembre 2024." },
    { id: 'fc74', cat: 'derivados', front: "Griegas de opciones: Delta, Gamma, Theta, Vega", back: "Delta: sensibilidad al precio. Gamma: tasa de cambio de delta. Theta: decaimiento temporal. Vega: sensibilidad a volatilidad. Rho: sensibilidad a tasa de interés." },
    { id: 'fc75', cat: 'derivados', front: "In/At/Out of the Money", back: "ITM: valor intrínseco > 0 (Call: S>K, Put: S<K). ATM: S≈K. OTM: sin valor intrínseco (Call: S<K, Put: S>K). Solo ITM tiene sentido ejercer." },
    { id: 'fc76', cat: 'renta_fija', front: "Curva de rendimientos", back: "Normal: pendiente positiva (largo plazo > corto). Invertida: pendiente negativa (señal de recesión). Plana: tasas iguales en todos los plazos." },
    { id: 'fc77', cat: 'renta_fija', front: "Calificaciones crediticias", back: "AAA (máxima calidad) → AA → A → BBB (último grado inversión) → BB → B → CCC → CC → C → D (default). BBB- o superior = grado de inversión." },
    { id: 'fc78', cat: 'divisas', front: "Posición propia vs PBA", back: "Posición propia: activos ME - pasivos ME (neta). PBA: (derechos + obligaciones derivados ME) / patrimonio técnico (bruta). Ambas tienen límites regulatorios." },
    { id: 'fc79', cat: 'portafolios', front: "Sharpe vs Treynor vs Jensen", back: "Sharpe: (Rp-Rf)/σ (riesgo total). Treynor: (Rp-Rf)/β (riesgo sistemático). Jensen: α = Rp - [Rf+β(Rm-Rf)] (retorno excedente vs CAPM)." },
    { id: 'fc80', cat: 'fondos', front: "ETF (Exchange Traded Fund)", back: "Fondo que cotiza en bolsa como una acción y replica un índice. Combina diversificación de FIC con liquidez y transparencia de acciones. Comisiones generalmente bajas." },
    { id: 'fc81', cat: 'fondos', front: "Renta vitalicia vs Retiro programado", back: "Renta vitalicia: capital se transfiere a aseguradora, mesada fija de por vida. Retiro programado: se mantiene en AFP, mesada variable según rendimiento del fondo." },
    { id: 'fc82', cat: 'riesgos', front: "VaR: paramétrico vs histórico vs Montecarlo", back: "Paramétrico: asume distribución normal. Histórico: usa rendimientos pasados reales. Montecarlo: simula miles de escenarios aleatorios. Cada uno tiene ventajas/limitaciones." },
    { id: 'fc83', cat: 'riesgos', front: "Duración modificada", back: "DM = Duración / (1+y). Estima ΔP/P ≈ -DM × Δy. Bono con DM=5 cae ~5% si tasas suben 100bps. A mayor DM, mayor sensibilidad a tasa." },
    { id: 'fc84', cat: 'analisis_economico', front: "Política monetaria: expansiva vs contractiva", back: "Expansiva: baja tasas, aumenta liquidez → estimula economía. Contractiva: sube tasas, reduce liquidez → controla inflación. Herramienta principal del Banco Central." },
    { id: 'fc85', cat: 'analisis_economico', front: "Indicadores adelantados vs rezagados", back: "Adelantados: anticipan ciclo (permisos construcción, pedidos, confianza). Rezagados: confirman tendencia (desempleo, inflación, crédito). Coincidentes: miden el momento actual (PIB, producción)." },
    { id: 'fc86', cat: 'analisis_economico', front: "Balanza de pagos - Componentes", back: "Cuenta corriente (bienes, servicios, rentas). Cuenta de capital (transferencias de capital). Cuenta financiera (inversión directa, portafolio, reservas). Suma = 0." }

,

    {id:'fc87',cat:'regulacion',front:"BOCEAS vs Bonos facultativamente convertibles",back:"BOCEAS: al vencimiento se pagan OBLIGATORIAMENTE en acciones. Facultativos: la conversión es DECISIÓN del inversionista. Ambos requieren acciones en reserva."},
    {id:'fc88',cat:'regulacion',front:"Titularización - Partes clave",back:"Originadora: transfiere activos. Agente de manejo: vocero del patrimonio, gestiona emisión. Administradora: custodia activos. Colocadora (opcional): distribuye títulos al mercado."},
    {id:'fc89',cat:'regulacion',front:"Tipos de títulos en titularización",back:"Participación: derecho patrimonial sobre activos. Contenido crediticio: derecho a capital+rendimientos fijos. Mixtos: combinan participación con amortización o rentabilidad mínima."},
    {id:'fc90',cat:'regulacion',front:"Principio de finalidad",back:"Art. 10 Ley 964/2005: operación aceptada por sistema de compensación = firme, irrevocable, exigible y oponible. NO puede ser impugnada, anulada ni suspendida."},
    {id:'fc91',cat:'regulacion',front:"TES Clase A vs Clase B",back:"Clase A: sustituyen deuda en OMAS y deuda con BanRep. Clase B: captan recursos para presupuesto, operaciones tesorería. Clase B genera curva de rendimientos."},
    {id:'fc92',cat:'regulacion',front:"Mercado principal vs Segundo mercado",back:"Principal: todos los inversionistas, requisitos estrictos de emisión. Segundo: solo inversionistas calificados/profesionales, requisitos menos estrictos."},
    {id:'fc93',cat:'renta_variable',front:"Valor nominal, patrimonial y de mercado",back:"Nominal = Capital social / # acciones (fijo). Patrimonial = Patrimonio neto / # acciones (variable contable). De mercado = Precio en bolsa × # acciones (capitalización bursátil)."},
    {id:'fc94',cat:'renta_variable',front:"Operaciones de contado T+2",back:"Acciones: cumplimiento en T+2 hasta 4:30pm. BOCEAS: T+0 hasta 7:00pm. Circuit breaker: caída 10% COLCAP = suspensión 30min; 5% adicional = suspensión definitiva."},
    {id:'fc95',cat:'renta_variable',front:"Período exdividendo",back:"Entre primer día hábil de pago y 4 días hábiles antes: comprador NO recibe dividendos pendientes. Propósito: dar tiempo al emisor para actualizar libro de accionistas."},
    {id:'fc96',cat:'renta_variable',front:"ADR vs GDR vs MGC",back:"ADR: acciones extranjeras negociadas en EEUU (NYSE/NASDAQ). GDR: en otros mercados internacionales. MGC: acciones extranjeras negociadas en COP a través de BVC."},
    {id:'fc97',cat:'derivados',front:"Base en futuros: Contango vs Backwardation",back:"Base = Futuro - Spot. Contango: Base > 0 (futuro > spot). Backwardation: Base < 0 (futuro < spot). Contango es normal cuando hay costos de acarreo."},
    {id:'fc98',cat:'derivados',front:"Valor intrínseco vs Valor temporal en opciones",back:"Valor intrínseco: Max(0, S-K) para call, Max(0, K-S) para put. Valor temporal: Prima - V. intrínseco. Refleja posibilidad de que la opción gane valor antes del vencimiento."},
    {id:'fc99',cat:'derivados',front:"CRCC - Cámara de Riesgo Central de Contraparte",back:"Se interpone como contraparte de ambas partes. Elimina riesgo de contraparte. Exige márgenes iniciales y de mantenimiento. Realiza MTM diario y margin calls."},
    {id:'fc100',cat:'renta_fija',front:"Tasa facial vs TIR en bonos",back:"Tasa facial/cupón: fija desde emisión, determina pagos periódicos. TIR: tasa que iguala VP flujos con precio actual, varía con el mercado. Precio = Nominal → facial = TIR."},
    {id:'fc101',cat:'renta_fija',front:"Bono cupón cero vs Bono con cupón",back:"Cupón cero: se compra con descuento, paga nominal al vencimiento. No reinversión de cupones. Con cupón: paga intereses periódicos + nominal al final. Duration cupón cero = plazo."},
    {id:'fc102',cat:'divisas',front:"Operaciones cambio obligatorias vs libres",back:"Obligatorias (por IMC/cta compensación): importaciones, exportaciones, IED, deuda externa, inversiones. Libres: turismo, transferencias menores, donaciones, servicios."},
    {id:'fc103',cat:'portafolios',front:"CAPM: E(Ri) = Rf + β(Rm-Rf)",back:"Rf: tasa libre riesgo. β: riesgo sistemático. (Rm-Rf): prima de mercado. SML: aplica a TODO activo. CML: solo portafolios eficientes. α de Jensen: exceso vs CAPM."},
    {id:'fc104',cat:'portafolios',front:"Correlación y diversificación",back:"Correlación -1: diversificación perfecta. Correlación +1: sin beneficio. Entre -1 y +1: el portafolio reduce riesgo respecto a activos individuales. Clave: buscar baja correlación."},
    {id:'fc105',cat:'fondos',front:"FIC abierto vs cerrado vs escalonado",back:"Abierto: entrada/salida libre. Cerrado: redención solo al vencimiento o condiciones del reglamento. Escalonado (fund of funds): invierte en participaciones de otros FIC."},
    {id:'fc106',cat:'fondos',front:"Rentabilidad mínima en pensiones obligatorias",back:"Piso de rendimiento que cada AFP debe garantizar. Si no lo alcanza: se cubre con reserva de estabilización + patrimonio de la AFP. Calculada sobre benchmarks definidos por SFC."},
    {id:'fc107',cat:'riesgos',front:"Tipos de riesgo financiero",back:"Mercado (SARM): precios/tasas. Crédito (SARC): incumplimiento. Liquidez (SARL): fondeo. Operativo (SARO): procesos/personas/sistemas. Legal: contratos/regulación. Contraparte."},
    {id:'fc108',cat:'riesgos',front:"VaR vs Expected Shortfall (CVaR)",back:"VaR: pérdida máxima con X% confianza. No dice qué tan malo puede ser si se excede. CVaR: pérdida promedio CUANDO se excede el VaR. CVaR siempre ≥ VaR. CVaR es más conservador."},
    {id:'fc109',cat:'etica',front:"KYC (Know Your Customer) - Elementos",back:"1) Identificación del cliente. 2) Actividad económica y origen de fondos. 3) Perfil de riesgo. 4) Transaccionalidad esperada. Base para SARLAFT y perfilamiento de inversión."},
    {id:'fc110',cat:'etica',front:"Prevalencia del interés del cliente",back:"Las órdenes del cliente SIEMPRE tienen prelación sobre operaciones por cuenta propia del intermediario. Si hay conflicto de interés, debe revelarse y nunca perjudicar al cliente."},
    {id:'fc111',cat:'autorregulacion',front:"Sanciones AMV: escala de gravedad",back:"1) Amonestación (leve). 2) Multa (hasta 100 SMMLV personas naturales). 3) Suspensión temporal del RNPMV. 4) Expulsión permanente (más severa). Proporcional a la infracción."},
    {id:'fc112',cat:'analisis_economico',front:"Regla de Taylor",back:"i = r* + π + α(π-π*) + β(y-y*). Banco central sube tasa si: inflación > meta (π>π*) o PIB real > potencial (y>y*). Guía para decisiones de política monetaria."},
    {id:'fc113',cat:'analisis_economico',front:"Multiplicador bancario",back:"Multiplicador = 1/Encaje. Encaje 10% → multiplicador 10x. Cada peso depositado genera hasta 10 pesos en créditos. BanRep puede modificar encaje como herramienta de política monetaria."},
    {id:'fc114',cat:'matematicas',front:"Tasa forward implícita",back:"f(1,2) = [(1+r2)²/(1+r1)] - 1. Tasa esperada del período futuro entre año 1 y 2. Si r2 > r1, la forward > r2 (curva con pendiente positiva implica tasas futuras crecientes)."},
    {id:'fc115',cat:'matematicas',front:"Duration de Macaulay vs Duración modificada",back:"Macaulay: promedio ponderado de plazos por VP de flujos. Modificada = Macaulay/(1+y). DM estima ΔP/P ≈ -DM × Δy. Bono cupón cero: Duration = plazo exacto."}

];
