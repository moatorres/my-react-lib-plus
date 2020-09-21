<sub>[my-react-lib-plus](https://github.com/moatorres/my-react-lib-plus)</sub>

## 🗃 React Component Lib Boilerplate w/ Storybook

Boilerplate app for building your own React library with Storybook UI Component Explorer

### Scripts

Run `npm run i-all` to install dependencies and then `npm run dev` to start the application 🎮

### Usage

Create a new folder inside 📂 `src/components` with an `index.js` file and start building your React component.

Make sure to export it from `src/index.js` 🔌

@ src/index.js

```jsx
export { default as MyComponent } from './components/YOUR-COMPONENT/index.js'
```

Import your component inside the Playground App and open `http://localhost:3000` to view it live.

@ src/playground/src/App.js

```jsx
import { MyComponent } from 'my-react-lib-plus'
```

<sub><sup>Made with ❤️ by [Moa](https://github.com/moatorres) at [Hoxlux®](https://github.com/hoxlux)</sup></sub>
