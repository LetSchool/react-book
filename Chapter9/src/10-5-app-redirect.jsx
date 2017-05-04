import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

require('Source/less/theme.less')

import routes from 'Source/router.jsx'

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.querySelector('#app')
)
