import * as React from 'react'

interface HomeProps{
    name:string;
    age:number;
}

class Home extends React.Component<HomeProps,{}>{
    render(){
        const {name,age}=this.props
        return <div>你好啊，{name},今年{age}岁了嘛？</div>
    }
}

export default Home