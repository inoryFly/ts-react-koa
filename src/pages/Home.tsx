import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addTodo,getUser} from '../store/action'
import * as styles from './index.less'
console.log(styles)

interface Person{
    text:string
    id:number
    completed:boolean
}
interface User{
    username:string
    userid:number
    sex:"男"|"女"
}
interface HomeProps{
    todos:Array<Person>
    user:User
    dispatch:any
}

interface HomeState{
    todos:Array<Person>;
    status:boolean;
}
// @connect(({todos,user})=>({
//     todos,
//     user
// }))
class Home extends React.Component<HomeProps,HomeState>{
    
    componentDidMount(){
        const {dispatch}=this.props
        dispatch(getUser())
    }
    state={
        todos:[{id:0,text:"gg",completed:false}],
        status:false
    }
    changeTodos=()=>{
        const {dispatch}=this.props
        const {status}=this.state
        if(status){
            // let add=toggleTodo('2')
            this.setState({
                status:false
            },()=>{

            })
            dispatch(addTodo("children"))
        }else{
            this.setState({
                todos:[],
                status:true
            })
            dispatch(addTodo("chid"))
        }
    }
    getUser=()=>{
        const {dispatch}=this.props
        dispatch(getUser())
    }
    render(){
        const {todos,user}=this.props
        const {status}=this.state
        return <div>
            <Link to="/tse">点我跳转</Link>
            {
                todos.map(ele=><div key={ele.id}>我是{ele.text},今年{ele.id}岁了</div>)
            }
            <div onClick={this.changeTodos}>点我修改props</div>
            <div>{status?"true":"false"}</div>
            用户信息：
            <div className={styles.test}>姓名：{user.username}</div>
            <div>编号：{user.userid}</div>
            <div>性别：{user.sex}</div>
            <div onClick={this.getUser}>点我获取用户</div>
        </div>
    }
}
function mapStateToProps(state){
    return {
        todos:state.todos,
        user:state.user
    }
}

// function mapDispatchToProps(dispatch:Dispatch){
//     return bindActionCreators(addTodo,dispatch)
// }
export default connect(mapStateToProps)(Home)