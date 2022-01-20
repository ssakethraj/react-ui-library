# React Component Library for web applications


This Library was created using the following technologies

- [Rollup](https://github.com/rollup/rollup)
- [Styled components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)

It also features:

- [Storybook](https://storybook.js.org/) to create and show off components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export Storybook as static files:

```
npm run storybook:export
```

Use `storybook-static` folder to host it in cloud server.

### Generating New Components

Run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.style.ts
```

The default templates for each file can be modified under `util/templates`.

### Installing Component Library Locally

In your react application, you can run:

```
npm i --save <relative-path-to-your-library>
```

which will install the local component library as a dependency in react application. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "react-component-library": "file:../react-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

## Usage

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { TestComponent } from "react-ui-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent mode="dark" />
  </div>
);

export default App;
```
