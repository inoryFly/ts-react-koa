import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Home from './pages/Home'

/**
 * hydrate主要是用于给服务端渲染出的html结构注水，由于新版本中ssr出的dom节点不再带有data-react，
 * 为了能尽可能复用ssr的html内容，所以需要使用新的hydrate方法进行事件绑定等客户端独有的操作
 */
ReactDOM.hydrate(
    <Home age={12} name={"inory"}/>,
    document.getElementById("root")
)
