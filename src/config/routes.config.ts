import Home from '../pages/Home'
import TodoList from '../pages/TodoList'

const router=[
    {
        path:'/a/b',component:Home,exact:true
    },
    {
        path:'/tse',component:TodoList,exact:true
    }
]
export default router