import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import todoApp from './reducers'
import rootSaga from './saga/index'

// const sagaMiddleWare=createSagaMiddleWare()
// let store=createStore(todoApp,applyMiddleware(sagaMiddleWare))
// sagaMiddleWare.run(rootSaga)
// export default store

let configureStore=(initState?:object)=>{
    const sagaMiddleWare=createSagaMiddleWare()
    const store=createStore(todoApp,initState,applyMiddleware(sagaMiddleWare))
    sagaMiddleWare.run(rootSaga)
    return store
}
export default configureStore
