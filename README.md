<sub>[my-react-lib-plus](https://github.com/moatorres/my-react-lib-plus)</sub>

## 🗃 React Component Lib Boilerplate w/ Storybook

Boilerplate app for building your own React library with Storybook UI Component Explorer

### Scripts

Run `yarn` to install the dependencies

Run `yarn start` to start the application or `yarn storybook` to start the UI explorer

Once you're ready to publish run `yarn compile` and `yarn publish` to share your library.

If you'd like to use the library locally:

[1] Run `yarn link`
[2] Go to your project's folder `cd into-your-project-folder`
[3] Run `yarn link 'my-react-lib-plus'

This will create a symlink named _your-project-folder/node_modules/my-react-lib-plus_ that links to your local copy of the `my-react-lib-plus` project. 🎉

### Usage

Create a new folder inside 📂 `src/components` with an `index.js` file and start building your React component.

Make sure to export it from `src/components/index.js` 🔌

@ src/components/index.js

```jsx
export { default as MyComponent } from './components/YOUR-COMPONENT'
```

@ src/App.js

```jsx
import { MyComponent } from 'my-react-lib-plus'
```

<sub><sup>Made with ❤️ by [Moa](https://github.com/moatorres) at [Hoxlux®](https://github.com/hoxlux)</sup></sub>
