import * as React from 'react'
import {Link} from 'react-router-dom'
import * as styles from './Todo.less'

class TodoList extends React.Component{
    componentDidMount(){
        if(window.__SSR__){
            window.__SSR__=false
        }
    }
    render(){
        return <div className={styles.root}><Link to="/a/b">点我跳转</Link>这是我的TODOLIST测试页面</div>
    }
}

export default TodoList