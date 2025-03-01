# Lit Web Components MPA with Hono

This project demonstrates how to develop TypeScript-friendly Web Components using [Lit](https://lit.dev/) and serve them as an MPA (Multi-Page Application) with [Hono](https://hono.dev/). It includes integrations for React, Vue, Angular, and Svelte to ensure cross-framework compatibility.

## Features
- ✅ **Lit-based Web Components**: Lightweight and efficient Web Components.
- ✅ **MPA Architecture**: Served with Hono for fast, simple deployment.
- ✅ **Framework Integrations**: Test components in React, Vue, Angular, and Svelte.
- ✅ **TypeScript Support**: Strong typing and better development experience.

## Getting Started
### Prerequisites
- Node.js (>= 18)
- pnpm (preferred) or npm/yarn

### Installation
```sh
pnpm install
```

### Development Server
```sh
pnpm dev
```
This will start the Hono server and serve the MPA with Web Components.

### Building the Project
```sh
pnpm build
```
This compiles the Lit components and prepares the static files for deployment.

### Running in Different Frameworks
Each framework is included in the `/frameworks` directory. You can test the Web Components in React, Vue, Angular, and Svelte by navigating to the respective folders and running:
```sh
pnpm dev
```

## Project Structure
```
/
├── src/
│   ├── components/        # Lit Web Components
│   ├── pages/             # HTML pages for MPA
│   ├── server.ts          # Hono server setup
│   ├── index.html         # Main entry point
├── frameworks/            # React, Vue, Angular, Svelte demos
├── public/                # Static assets
├── dist/                  # Build output
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Deployment
To deploy the app, build the project and use any static file server.
```sh
pnpm build
pnpm start
```

## License
This project is licensed under the MIT License.

