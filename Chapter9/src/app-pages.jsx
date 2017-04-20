import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

require('Source/less/theme.less')

import Home from 'Source/components/Home.jsx'
import About from 'Source/components/About.jsx'
import Topic from 'Source/components/Topic.jsx'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/topic" component={Topic} />
        </div>
    </BrowserRouter>
    ), document.querySelector('#app')
)
