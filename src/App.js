import React, { Fragment } from 'react'

import './App.css'

const App = () => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <p>#my-react-lib-plus</p>
          <h1>
            <span role="img" aria-label="archive">
              🗃{' '}
            </span>
            React Component Library
          </h1>
          <h3>Bootstrapped with Create React App</h3>
          <sub>
            <sup>
              Made with{' '}
              <span role="img" aria-label="heart">
                ❤️{' '}
              </span>
              by <a href="https://github.com/moatorres">Moa</a> at{' '}
              <a href="https://hoxlux.com">Hoxlux®</a>
            </sup>
          </sub>
        </div>
      </section>
    </Fragment>
  )
}

export default App
