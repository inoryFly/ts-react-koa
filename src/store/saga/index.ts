import {call,put,takeEvery} from 'redux-saga/effects'


function * fetchUser(action){
    const p=function(){
        return fetch("http://localhost:3344/api/index",{
            method:'GET'
        })
        .then(res=>res.json())
        .then(res=>{
            return res
        })
    }
    const res=yield call(p)

    yield put({
        type:"GET_USER_SUCCESS",
        payload:res
    })
}

function * rootSaga(){
    yield takeEvery("GET_USER",fetchUser)
}

export default rootSaga