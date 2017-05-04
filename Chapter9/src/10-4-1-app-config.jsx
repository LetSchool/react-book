import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

require('Source/less/theme.less')

import Home from 'Source/components/Home.jsx'
import About from 'Source/components/About.jsx'
import Topic from 'Source/components/Topic.jsx'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/topic',
        exact: true,
        component: Topic
    }
]

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.querySelector('#app')
)
