# KRIFFEonline Frontend

A React frontend for a Christian marketplace and events platform. It includes product browsing and detail pages, events and ticket selection, a checkout interface, sign-in/sign-up pages, account settings, and company/contact pages.

Built with React 18, Vite, React Router, Material UI, React Query, Jotai, Formik, Zod, and Axios.

## Local development

```sh
git clone https://github.com/Zoiku/kriffeonline.com.git
cd kriffeonline.com
npm install
```

Create `.env.local`:

```dotenv
VITE_BACKEND_URL=https://your-development-api.example
```

```sh
npm run dev
```

Open the address printed by Vite. Node.js and npm are required.

## API configuration

`src/services/axios.js` reads `VITE_BACKEND_URL` and attaches the token saved in local storage under `kriffe_auth`. The backend is not included; account, catalogue, and other data-driven flows require a compatible API.

The ticket checkout hook manages quantities, contact information, and totals. The presence of checkout screens does not by itself verify a completed payment flow.

Vite environment values are embedded in browser assets. Set the API address before building and keep private credentials out of frontend configuration.

## Commands and deployment

- `npm run build`: production output in `dist/`.
- `npm run preview`: preview the production build.
- `npm run lint`: ESLint with warnings treated as failures.

No test script is declared. Deploy `dist/` with an `index.html` fallback for client-side routes. `public/_redirects` contains hosting redirect configuration.

## Code guide

- `src/routes/Index.jsx`: public and account routes.
- `src/pages/`: marketplace, events, checkout, and account screens.
- `src/hooks/`: data, state, and form logic.
- `src/services/axios.js`: shared HTTP client.
- `src/utils/`: display content and helpers.
- `src/components/`, `src/styles/`: UI and styling.

Verify catalogue loading, account flows, event selection, checkout behavior, and direct nested-route navigation against a development API.
