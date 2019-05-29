import thunkMiddleware from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import todoApp from './reducers'


let configureStore=(initState?:object)=>{
    const store=createStore(todoApp,initState,applyMiddleware(thunkMiddleware))
    return store
}
export default configureStore
