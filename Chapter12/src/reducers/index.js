import { combineReducers } from 'redux'

import service from './service'
import blog from './blog'

const app = combineReducers({
    service,
    blog
})

export default app
