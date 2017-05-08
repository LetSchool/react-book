import LandingPage from 'Source/components/LandingPage.jsx'
import Blog from 'Source/components/Blog.jsx'
import Article from 'Source/components/Article.jsx'

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
    },
    {
        path: '/blog/:id',
        exact: true,
        component: Article
    }
]

export default routes
