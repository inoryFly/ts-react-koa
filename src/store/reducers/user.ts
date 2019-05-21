const user=(state={},{payload,type})=>{
    switch (type){
        case 'GET_USER_SUCCESS':
            return Object.assign({},state,payload)
        default:
            return state
    }
}

export default user