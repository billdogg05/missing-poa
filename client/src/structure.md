missing-poa/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── styles/                          # Global SCSS (non-module)
│   │   ├── _variables.scss
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   └── main.scss                    # imports all 3 above
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.scss
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.scss
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Button.module.scss
│   │       ├── InputField.jsx
│   │       ├── InputField.module.scss
│   │       ├── Table.jsx
│   │       ├── Table.module.scss
│   │       ├── SalespersonCard.jsx
│   │       └── SalespersonCard.module.scss
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.scss
│   │   │
│   │   ├── AddEdit/
│   │   │   ├── AddEdit.jsx
│   │   │   └── AddEdit.module.scss
│   │   │
│   │   ├── ReceivedPoA/
│   │   │   ├── ReceivedPoA.jsx
│   │   │   └── ReceivedPoA.module.scss
│   │   │
│   │   └── Salespersons/
│   │       ├── Salespersons.jsx
│   │       └── Salespersons.module.scss
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx                # all react-router routes in one place
│   │
│   ├── hooks/                           # custom hooks (e.g. usePoa, useSalespersons)
│   │   └── usePoa.js
│   │
│   ├── services/                        # API calls to your Express backend
│   │   ├── poaService.js
│   │   └── salespersonService.js
│   │
│   ├── App.jsx
│   └── main.jsx                         # imports src/styles/main.scss
│
├── .env
├── index.html
├── vite.config.js
└── package.json