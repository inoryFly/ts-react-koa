import {combineReducers} from 'redux'
import todos from './todos'
import visibleFilter from './visible'

const todoApp=combineReducers({
    visibleFilter,
    todos
})
export default todoApp