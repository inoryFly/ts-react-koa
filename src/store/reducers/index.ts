import {combineReducers} from 'redux'
import todos from './todos'
import visibleFilter from './visible'
import user from './user'

const todoApp=combineReducers({
    visibleFilter,
    todos,
    user
})
export default todoApp