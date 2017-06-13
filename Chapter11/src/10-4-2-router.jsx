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

export default routes
