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

export default routes
