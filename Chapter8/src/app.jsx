import React from 'react'
import ReactDOM from 'react-dom'

require('./less/theme.less')

import LandingPage from './components/LandingPage.jsx'

ReactDOM.render((
    <LandingPage />
    ), document.querySelector('#app')
)
