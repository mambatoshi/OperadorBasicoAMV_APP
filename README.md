# AMV Estudio · Operador

App para preparar la certificación de **Operador** del Autorregulador del Mercado de Valores de Colombia (AMV), incluyendo las especialidades de negociación. Funciona en el navegador y se instala en el iPhone como app a pantalla completa, con uso sin conexión.

**Banco actual:** 485 preguntas y 143 tarjetas, cada una trazada a su guía oficial.

## Cómo estudia

- **Sesión de hoy:** junta los repasos que vencen hoy con preguntas nuevas, repartidas según cuántas preguntas trae el examen de cada tema y cuánto te falta dominarlo. Los temas se intercalan.
- **Repetición espaciada (Leitner):** cada pregunta y cada tarjeta sube de caja al acertar (1, 3, 7, 16 y 35 días) y vuelve a la caja 0 al fallar, así que reaparece en 10 minutos.
- **Metacognición:** al acertar eliges "Lo sabía" o "Dudé o adiviné". Un acierto con duda vuelve antes.
- **Opciones barajadas:** en el banco la respuesta correcta era la B en el 80% de las preguntas. Ahora el orden se baraja, salvo en las que dicen "todas las anteriores" o "A y B".
- **Fuente en cada explicación:** cada pregunta cita su guía y sección, con enlace al PDF oficial.
- **Simulacros con la estructura oficial:** Operador (170 preguntas en 3 h 40 min, con la misma cantidad por tema y 70% exigido en cada componente), Operador corto, las cuatro especialidades y el Maestro de Negociación. Se guardan en cada respuesta, así que sobreviven si iOS cierra la app. Al final muestran el resultado por componente y por tema y la revisión pregunta por pregunta.
- **Tarjetas:** autoevaluación en cuatro niveles, con el próximo repaso a la vista.
- **Consulta:** conversor de tasas (EA, nominales y periódicas, vencidas y anticipadas) que muestra el paso a paso, y una hoja de fórmulas.
- **Progreso:** roseta de dominio por tema, preparación por componente ponderada por el examen, calendario de actividad y respaldo en JSON para pasar tu progreso entre dispositivos.

## Estructura oficial del examen

Según la [página de AMV](https://amvcolombia.org.co/en-que-se-puede-certificar/operador/):

| Componente | Preguntas | Para aprobar |
|---|---|---|
| Básico: Regulación 30, Autorregulación 15, Ética 15, Análisis económico 15, Riesgos 25, Matemáticas 10 | 110 | 77 |
| Complementario: Fondos de pensiones 20, FIC 20, Portafolios 20 | 60 | 42 |
| Cada especialidad (Renta fija, Renta variable, Derivados, Divisas) | 40 | 28 |
| Maestro de Negociación: Renta fija 34, Renta variable 33, Derivados 33 | 100 | 70 |

Si el banco no tiene suficientes preguntas de un tema (hoy: FIC y las especialidades de Renta fija y Divisas), el simulacro usa las que hay y ajusta el tiempo para mantener el ritmo del examen real. La app lo indica antes de empezar.

## Desarrollo

Requiere Node.js `^20.19.0 || >=22.12.0`. En Windows/PowerShell se recomienda `npm.cmd`.

```powershell
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 5173
```

Mantener `--host 127.0.0.1` evita exponer el servidor de desarrollo en la red local.

| Script | Qué hace |
|---|---|
| `run build` | Build de producción en `dist/`, con el service worker generado |
| `run preview:local` | Sirve el build en `127.0.0.1:4173` |
| `run verify:data` | Valida el banco y su trazabilidad |
| `run coverage:report` | Reporte de cobertura por guía y sección |
| `run check` | `verify:data` y `build` |
| `run audit` | `npm audit` |

Antes de publicar: `npm.cmd audit`, `npm.cmd run check` y `git diff --check`.

## Publicar e instalar en el iPhone

La app se publica en **Cloudflare Pages**, conectado a este repositorio: cada push a `main` genera un despliegue nuevo.

| Ajuste | Valor |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variable de entorno | `NODE_VERSION` = `22` |

`public/_headers` evita que el service worker y el `index.html` queden en caché, para que cada actualización llegue a la app instalada.

En el iPhone: abre la URL en Safari, toca **Compartir** y luego **Agregar a pantalla de inicio**. Se abre a pantalla completa y funciona sin conexión.

El progreso se guarda en el dispositivo (localStorage). Para pasarlo de un dispositivo a otro, usa **Progreso → Guardar respaldo** en uno y **Restaurar respaldo** en el otro.

## Cobertura y calidad de datos

La ruta hacia cobertura completa es incremental:

1. Mapear cada capítulo o sección de las guías en `src/data/coverage_manifest.js`.
2. Mantener la trazabilidad ítem por ítem en `src/data/item_traceability.js` con `source`, `guideSection`, `component`, `traceStatus` y `traceConfidence`.
3. Revisar primero los ítems de confianza media o baja antes de afirmar cobertura validada.
4. Evitar preguntas de relleno: cada ítem nuevo debe estar vinculado a una guía o a un objetivo de examen.
5. Validar con `verify:data` y auditar con `coverage:report`.

El verificador falla si una pregunta o tarjeta queda sin trazabilidad.

## Estructura del código

```
src/
├── main.js              # router y barra de pestañas
├── style.css            # sistema visual (claro y oscuro)
├── data/                # banco, manifiesto de cobertura y trazabilidad
├── lib/
│   ├── bank.js          # normaliza el banco y lo une con sus fuentes
│   ├── store.js         # persistencia, repetición espaciada y migración
│   ├── sessions.js      # sesión diaria, práctica por tema y errores
│   ├── exams.js         # estructura oficial de los exámenes
│   └── nav.js, util.js
├── ui/                  # plantillas, íconos y roseta
└── views/               # hoy, temas, práctica, tarjetas, simulacro, progreso, consulta
```

## Licencia

Proyecto con fines educativos y de uso personal, sin ánimo de lucro.

- **Código:** [MIT](LICENSE).
- **Contenido de estudio** (`src/data/`): basado en las guías de estudio de AMV, que se publican bajo [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es). No está cubierto por la licencia MIT, no puede usarse con fines comerciales y sus derechos pertenecen a AMV.

Proyecto independiente, sin afiliación ni aval de AMV. Consulta siempre las guías oficiales para la preparación completa y la validación normativa.
