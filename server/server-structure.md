# order-tracker — project structure after setup

This is what your folder looks like after running:
```
npm init -y
npm install express
npm install -D nodemon
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
npx prisma migrate dev --name init
```

```
order-tracker/
├── node_modules/              # installed packages (auto-generated, never edit)
├── prisma/
│   ├── schema.prisma          # your data model (Salesperson, Order)
│   └── migrations/
│       └── 20260707120000_init/
│           └── migration.sql  # the actual SQL Prisma generated and ran
├── public/
│   └── images/                # salesperson profile images will live here (added later)
├── .env                       # DATABASE_URL and other secrets — never commit this
├── .gitignore                 # created by prisma init, ignores node_modules and .env
├── package.json               # project metadata + dependency list
├── package-lock.json          # exact locked dependency versions (auto-generated)
└── index.js                   # your Express entry point (you create this by hand)
```

## What you haven't created yet

- `index.js` — the actual Express server file (entry point). Nothing generates this for you — you write it.
- `public/images/` — the folder for profile images. Doesn't exist until you create it or the app writes to it.

## What each existing piece is for

| File/folder | Purpose |
|---|---|
| `prisma/schema.prisma` | Single source of truth for your database structure — models, fields, relations |
| `prisma/migrations/` | History of every schema change, as real SQL — lets you (or teammates) recreate the database from scratch |
| `.env` | Holds `DATABASE_URL` — the connection string Prisma uses to reach Postgres. Keep this out of git |
| `node_modules/@prisma/client` | The auto-generated, typed client you'll import as `require('@prisma/client')` |
| `package.json` | Lists `express`, `prisma`, `@prisma/client`, `nodemon` as dependencies, plus any npm scripts you add |

## Suggested next addition — a `src/` folder

Once you start writing routes, it's common to reorganize slightly so `index.js` doesn't hold everything:

```
order-tracker/
├── prisma/
├── public/images/
├── src/
│   ├── index.js            # starts the server
│   ├── routes/
│   │   ├── salespersons.js
│   │   └── orders.js
│   └── prisma.js           # exports a single shared PrismaClient instance
├── .env
└── package.json
```

Not required for step 1 — a single `index.js` is fine while you're first getting the server running. Restructuring into `src/routes/` becomes worth it once you have more than one or two route files.
