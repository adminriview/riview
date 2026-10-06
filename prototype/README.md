# RiView investor prototype

A responsive, dependency-free frontend prototype for demonstrating RiView's security exposure workflow. It runs as a static site and is ready to publish from this folder with Azure Static Web Apps. All displayed records are illustrative demo data; no integrations or backend services are connected.

## Demo access

The sign-in form is prefilled with username `Admin` and password `Password123$`. Enterprise SSO is simulated. The sign-up form is a visual flow only; authentication and account creation are not connected to an identity provider.

## Run locally

Open `index.html` in a browser or serve this folder with any static file server. ES modules work best over HTTP, for example `npx serve .` from this directory.

## Azure Static Web Apps

Create an Azure Static Web App and deploy the `prototype` folder as the app artifact. Since there is no build step, set the app location to `prototype`, the API location to blank, and the output location to blank. `staticwebapp.config.json` provides client-side route fallback and baseline response headers. Link a GitHub repository in Azure to generate the deployment workflow and supply its deployment secret in GitHub Actions.

## Production reuse

The folders separate UI primitives, page views, domain data, and navigation state. The CSS custom properties are the design tokens; `src/components.js` holds reusable shell, table, badge and card renderers; `src/data.js` defines demo domain records. In the production app, keep these concepts and replace the in-memory data functions with typed API clients and real authentication/authorization. Do not reuse the demo credentials in a real deployment. Avoid connecting vendor integrations directly from a public static browser client: keep credentials and ingestion behind authenticated backend services.
