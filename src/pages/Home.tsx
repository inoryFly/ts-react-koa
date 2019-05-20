import * as React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {toggleTodo} from '../store/action'

function mapStateToProps(state:any){
    return {
        todos:[{name:"inory",age:12},{name:"fly",age:20 }]
    }
}

function mapDispatchToProps(dispatch:any){
    return bindActionCreators(toggleTodo,dispatch)
}

interface Props{
    todos:Array<any>
}

class Home extends React.Component<Props,object>{
    render(){
        const {todos}=this.props
        return <span>
            <Link to="/tse">点我跳转</Link>
            {
                todos.map(ele=><div key={ele.age}>我是{ele.name},今年{ele.age}岁了</div>)
            }
        </span>
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)