import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios'


function * fetchUser(action){
    const p=function(){
        return axios.get("http://localhost:3344/api/index")
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