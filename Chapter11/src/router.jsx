import LandingPage from 'Source/components/LandingPage.jsx'
import Blog from 'Source/components/Blog.jsx'

const routes = [
    {
        path: '/',
        exact: true,
        component: LandingPage
    },
    {
        path: '/blog',
        exact: true,
        component: Blog
    }
]

export default routes
