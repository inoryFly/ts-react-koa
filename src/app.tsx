import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import configureStore from './store'

declare global {
    interface Window {
        __REDUX_STATE__: any
    }
}
// const store =createStore( todoApp,window.__REDUX_STATE__)
/**
 * hydrate主要是用于给服务端渲染出的html结构注水，由于新版本中ssr出的dom节点不再带有data-react，
 * 为了能尽可能复用ssr的html内容，所以需要使用新的hydrate方法进行事件绑定等客户端独有的操作
 */
const store = configureStore(window.__REDUX_STATE__)
ReactDOM.hydrate(
    <div>
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Routes />
            </BrowserRouter>
        </Provider>
    </div>
    ,
    document.getElementById("root")
)


/**
 * 注意：为什么使用hydrate会用警告，如下：
 *     Warning: Did not expect server HTML to contain the text node "         " in <div>
 *
 * 网上说是因为模块热更新的问题，所以就是开发环境用render,正式环境用hydrate？
 */