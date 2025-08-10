# devDash project

![App Screenshot](assets/project.png)

# React + Vite project

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Testing

This project uses **Vitest** as the test runner along with **React Testing Library** to test React components in a way that closely resembles user interactions.

### Running tests

```bash
npm run test
yarn test
```

## Test setup

- Tests are written using **Vitest**, which provides a fast and easy-to-use testing environment.
- React components are tested using **React Testing Library**, focusing on testing components from the user’s perspective.
- Mocking utilities like `vi.mock` (Vitest’s equivalent of Jest mocks) are used for mocking functions and modules.
