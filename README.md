# AMV Operador Basico - Study App

App de estudio interactiva para preparar el examen de certificacion **Operador** del Autorregulador del Mercado de Valores de Colombia (AMV), incluyendo componente basico y especialidades.

![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Preguntas](https://img.shields.io/badge/Preguntas-485-00C853)
![Flashcards](https://img.shields.io/badge/Flashcards-143-2979FF)

## Caracteristicas

- Dashboard de estudio con recomendacion de que practicar hoy.
- Practica por tema con retroalimentacion inmediata.
- Lector lateral de guias AMV en practica por tema y durante el quiz.
- Simulacro de Operador con estructura visible AMV: 170 preguntas, 3h40m y 70% para aprobar.
- Practicas de especialidad para Renta Fija, Renta Variable, Derivados y Divisas.
- Flashcards para repaso rapido.
- Repaso de errores guardado en localStorage.
- Continuidad de sesion para reanudar una practica pendiente.
- Interfaz dark sobria y responsive.

## Contenido actual

Banco actual: **485 preguntas + 143 flashcards**.

La app no declara 100% de cobertura de las guias AMV todavia. La cobertura se esta manejando como una matriz trazable por componente, guia y seccion en `src/data/coverage_manifest.js`, con registro item por item en `src/data/item_traceability.js`.

| Categoria | Preguntas | Flashcards |
|---|---:|---:|
| Regulacion | 74 | 17 |
| Autorregulacion | 34 | 8 |
| Etica | 31 | 10 |
| Analisis Economico | 31 | 7 |
| Riesgos | 45 | 18 |
| Matematicas Financieras | 48 | 12 |
| Renta Fija | 37 | 11 |
| Renta Variable | 41 | 10 |
| Derivados | 47 | 16 |
| Divisas | 32 | 12 |
| Portafolios | 30 | 12 |
| Fondos | 35 | 10 |

## Estructura AMV visible

- Operador: 170 preguntas, 3h40m, 70% para aprobar.
- Especialidades individuales: 40 preguntas, 60 min.
- Si una especialidad no tiene 40 preguntas disponibles en el banco actual, la app la muestra como practica de especialidad, no como simulacro oficial completo.

## Lector de guias

La vista `Practica por tema` incluye un boton `Guia` por categoria. El lector se abre como sidebar ocultable y preselecciona la guia oficial asociada al tema. Durante el quiz tambien aparece `Consultar guia de <tema>`.

Cuando la fuente es un PDF directo, la app intenta mostrarlo embebido. Si el navegador embebido bloquea el visor remoto, usa `Abrir guia`; en Chrome/Edge los PDFs directos suelen abrir correctamente.

## Instalacion

Requisitos:

- Node.js compatible con Vite 7: `^20.19.0 || >=22.12.0`.
- En Windows/PowerShell se recomienda usar `npm.cmd`.

```powershell
git clone https://github.com/mambatoshi/OperadorBasicoAMV_APP.git
cd OperadorBasicoAMV_APP
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 5173
```

Abre:

```text
http://127.0.0.1:5173/
```

Mantener `--host 127.0.0.1` evita exponer el servidor de desarrollo en la red local.

## Scripts

```powershell
npm.cmd run dev -- --host 127.0.0.1 --port 5173
npm.cmd run build
npm.cmd run preview:local
npm.cmd run verify:data
npm.cmd run coverage:report
npm.cmd run audit
npm.cmd run check
```

## Seguridad del toolchain

La app usa Vite 7.3.x para evitar un salto mayor a Vite 8. El lockfile debe resolver dependencias sin vulnerabilidades conocidas en `npm audit`.

Validacion recomendada antes de publicar cambios:

```powershell
npm.cmd audit
npm.cmd run check
git diff --check
```

## Cobertura y calidad de datos

La ruta hacia 100% de data utilization es incremental:

1. Mapear cada capitulo/seccion de guia AMV en `coverage_manifest.js`.
2. Mantener la trazabilidad item por item en `item_traceability.js` con `source`, `guideSection`, `component`, `traceStatus` y `traceConfidence`.
3. Revisar primero los items de confianza media o baja antes de afirmar cobertura validada.
4. Evitar preguntas de relleno: cada item nuevo debe estar vinculado a una guia o a un objetivo de examen.
5. Mantener el banco validado con `npm.cmd run verify:data` y auditar cobertura con `npm.cmd run coverage:report`.

El verificador falla si una pregunta o flashcard queda sin trazabilidad. Las advertencias se reservan para baja confianza, items que requieren revision o especialidades que no llegan al minimo de 40 preguntas utilizables.

## Fuentes oficiales

- [AMV Operador](https://amvcolombia.org.co/en-que-se-puede-certificar/operador/)
- [Guia de Estudio Regulacion Operador](https://amvcolombia.org.co/wp-content/uploads/2021/09/GuiaRegulacion-OPERADOR.pdf)
- [Guia de Estudio Etica e Integridad](https://amvcolombia.org.co/wp-content/uploads/2025/09/ETIC-001-2025-08-29-Ajustada_compressed.pdf)
- [Guia de Estudio Analisis Economico y Matematicas Financieras](https://www.amvcolombia.org.co/wp-content/uploads/2019/12/Gu%C3%83%C2%ADa-An%C3%83%C2%A1lisis-Econ%C3%83%C2%B3mico-y-Matem%C3%83%C2%A1ticas-financieras-Asesor-Financiero-Operador-y-Directivo.pdf)
- [Guia de ejercicios de Matematicas Financieras](https://amvcolombia.org.co/wp-content/uploads/2025/04/Guia-de-ejercicios-Matematicas-financieras.pdf)
- [Guia de Estudio Fondos de Inversion Colectiva](https://www.amvcolombia.org.co/wp-content/uploads/2019/08/Gu%C3%ADa-FIC-Operador.pdf)
- [Guia de Estudio Administracion de Portafolios](https://www.amvcolombia.org.co/wp-content/uploads/2019/08/Gu%C3%ADa-Administraci%C3%B3n-de-Portafolios.pdf)
- [Guia de Estudio Renta Fija](https://www.amvcolombia.org.co/wp-content/uploads/2019/08/Guia-Renta-Fija-.pdf)
- [Guia de Estudio Renta Variable](https://www.amvcolombia.org.co/wp-content/uploads/2022/06/9.2-Guia-Renta-Variable-Operador-V.-2022-06-07.pdf)
- [Guia de Estudio de Autorregulacion](https://amvcolombia.org.co/wp-content/uploads/2025/08/AAMV-002-2025-08-26.pdf)

## Licencia

Proyecto de uso educativo y personal. Consulta siempre las guias oficiales de AMV para preparacion completa y validacion normativa.
