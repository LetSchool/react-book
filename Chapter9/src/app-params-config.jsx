import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

require('Source/less/theme.less')

import Index from 'Source/components/Index.jsx'
import User from 'Source/components/User.jsx'

const routes = [
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/user/:name',
        exact: true,
        component: User
    }
]

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.querySelector('#app')
)
