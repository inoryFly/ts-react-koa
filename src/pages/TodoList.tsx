import * as React from 'react'
import {Link} from 'react-router-dom'

class TodoList extends React.Component{
    componentDidMount(){
        console.log("为什么会执行")
    }
    render(){
        return <div><Link to="/a/b">点我跳转</Link>这是我的TODOLIST测试页面</div>
    }
}

export default TodoList