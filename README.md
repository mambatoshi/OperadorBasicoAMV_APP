# 📊 AMV Operador Básico — Study App

App de estudio interactiva para preparar el examen de certificación **Operador Básico** del Autorregulador del Mercado de Valores de Colombia (AMV).

![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Questions](https://img.shields.io/badge/Preguntas-326-00C853)
![Flashcards](https://img.shields.io/badge/Flashcards-86-2979FF)

---

## ✨ Características

- 🎯 **Modo Práctica** — Practica por tema con retroalimentación inmediata
- 📝 **Simulacro de Examen** — 130 preguntas aleatorias con temporizador de 2h40m (formato real AMV)
- 🃏 **Flashcards 3D** — Tarjetas con efecto flip para memorización rápida
- ❌ **Repaso de Errores** — Revisa y practica solo las preguntas que fallaste
- 📈 **Tracking de Progreso** — Estadísticas guardadas localmente (localStorage)
- 🌙 **Diseño Dark Mode Premium** — Interfaz financiera profesional
- 📱 **100% Responsive** — Funciona en desktop, tablet y móvil

## 📚 Contenido

**326 preguntas + 86 flashcards** (~50% de cobertura de las guías oficiales AMV):

| Categoría | Preguntas | Temas Clave |
|---|---|---|
| 📜 Regulación | 35 | Ley 964, SIMEV, OPV, repo/simultáneas/TTV, SARLAFT, defensoría |
| ⚖️ Autorregulación | 15 | AMV, tribunal disciplinario, sanciones, certificación |
| 🤝 Ética | 13 | Información privilegiada, front running, churning, murallas chinas |
| 📊 Análisis Económico | 15 | Política monetaria/fiscal, PIB, ciclos, balanza de pagos |
| ⚠️ Riesgos | 14 | VaR, duración, backtesting, stress testing, SARL |
| 🔢 Matemáticas Financieras | 41 | Tasas, TIR/VPN, anualidades, conversiones, Fisher |
| 📄 Renta Fija | 15 | TES, bonos, yield curve, calificaciones, OMAS, convexidad |
| 📈 Renta Variable | 24 | Acciones, COLCAP, RPG, capitalización, valoración DCF |
| 🔄 Derivados | 18 | Futuros, forwards, opciones, griegas, swaps, nemotécnicos |
| 💱 Divisas | 11 | TRM, mercado cambiario, posición propia, NDF |
| 💼 Portafolios | 12 | Frontera eficiente, Sharpe, Treynor, Jensen, asset allocation |
| 🏦 Fondos | 13 | FIC, multifondos, ETF, pensiones, bono pensional |

## 🚀 Instalación

### Requisitos
- [Node.js](https://nodejs.org/) v18+ 

### Setup

```bash
# Clonar el repositorio
git clone https://github.com/mambatoshi/OperadorBasicoAMV_APP.git
cd OperadorBasicoAMV_APP

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

### Build de producción

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** — Build tool ultrarrápido
- **Vanilla JS** — Sin frameworks, máximo rendimiento
- **CSS3** — Glassmorphism, gradientes, animaciones
- **localStorage** — Persistencia de progreso sin backend

## 📁 Estructura

```
├── index.html              # Entry point
├── package.json
├── src/
│   ├── main.js             # Lógica principal de la app
│   ├── style.css           # Diseño dark mode premium
│   ├── data/
│   │   └── questions.js    # Banco de preguntas y flashcards
│   └── modules/
│       └── storage.js      # Módulo de persistencia
└── public/
    └── vite.svg
```

## 📖 Sobre el Examen AMV

El examen de **Operador Básico** del AMV evalúa la idoneidad profesional para operar en el mercado de valores colombiano. Consta de **130 preguntas** en **2 horas y 40 minutos**, cubriendo regulación, ética, instrumentos financieros, riesgos y matemáticas financieras.

> ⚠️ Esta app es una herramienta de estudio complementaria. Consulta siempre las [guías oficiales de AMV](https://www.amvcolombia.org.co/) para la preparación completa.

## 📄 Licencia

Este proyecto es de uso educativo y personal. El contenido se basa en las guías de estudio publicadas por AMV bajo licencia CC BY-NC-ND 4.0.
