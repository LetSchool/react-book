import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

require('Source/less/theme.less')

import Start from 'Source/components/Start.jsx'
import Timer from 'Source/components/Timer.jsx'
import TimeUp from 'Source/components/TimeUp.jsx'

const routes = [
    {
        path: '/',
        exact: true,
        component: Start
    },
    {
        path: '/timer',
        exact: true,
        component: Timer
    },
    {
        path: '/timeup',
        exact: true,
        component: TimeUp
    }
]

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
), document.querySelector('#app')
)
