let nextTodoId=0

export const addTodo=text=>{
    return {
        type:"ADD_TODO",
        payload:{
            text,
            id:nextTodoId++
        }
    }
}

export const setVisible=filter=>{
    return {
        type:"SET_VISIBLE",
        payload:{
            filter
        }
    }
}

export const toggleTodo=id=>{
    return {
        type:"TOGGLE_TOD",
        payload:{
            id
        }
    }
}

export const getUser=()=>{
    return {
        type:"GET_USER"
    }
}

export const getUserSuccess=(user)=>{
    return {
        type:"GET_USER_SUCCESS",
        payload:user
    }
}