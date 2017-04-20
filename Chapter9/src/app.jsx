import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

require('Source/less/theme.less')

import Index from 'Source/components/Index.jsx'
import User from 'Source/components/User.jsx'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Index} />
            <Route exact path="/user/:name" component={User} />
        </div>
    </BrowserRouter>
    ), document.querySelector('#app')
)
