import React from 'react'
import ReactDOM from 'react-dom'

require('Source/less/theme.less')

import LandingPage from 'Source/components/LandingPage.jsx'

var serviceName = 'React'

ReactDOM.render((
    <LandingPage serviceName={serviceName} />
    ), document.querySelector('#app')
)
