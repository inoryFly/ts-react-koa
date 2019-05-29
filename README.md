# ts-react-koa

## 1.简介

  在我们刚接触到React、VUE、Angular这三大主流框架的时候，一直被挂在耳边的不是他们如何如何的了不起，而是不利于SEO， 所以才会有了服务端渲染。本项目是我搭建本地环境的总结，只有最基础的，后续有什么建议可以给我提issue。

## 2.优势与缺点
优点<br />

- 利于SEO
- 加快首屏渲染，减少首屏加载时的请求数量<br/>

缺点<br />

- 增加了服务器的压力
- 整体设计难度提高

## 3.技术栈

- React
- React-redux
- Typescript
- webpack
- koa

（ps:因为使用了typescript，所以我也不用去配置babel，节约了很多时间哦）

## 4.项目运行

执行命令
> npm run start 

这里我是使用koa直接运行的打包后的客户端代码，所以需要严格控制代码打包的顺序，用到的黑科技也比较多。网上有很多教程都是先打包客户端，再运行的服务端，这是一个比较大的区别。

## 5.路由同构

服务端渲染与客户端渲染的不同之处在于其路由是没有状态的，所以我们需要通过一个无状态的router组件 来包裹APP，通过服务端请求的url来匹配到具体的路由数组和其相关属性。 所以我们在客户端使用 BrowserRouter，服务端则使用无状态的 StaticRouter。

- BrowserRouter 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步
- StaticRouter 是一个不会改变地址的router组件 

## 6.redux服务端同构

处理步骤如下：

1. 根据服务端请求API得到对应的异步数据。因为服务端没有完整的生命周期，走到componentWillMount就结束了，所以页面的请求写在componentDidMount是行不通的，这边我结合了 `react-router-config`，给每个组件添加了静态方法 `fetchs(store)`。在后续客户端接管时，
我们还需要判断是否需要请求，避免请求重复，造成资源浪费。
1. 使用异步数据初始化生成一个store `const store=createStore(redux,initState)`
1. 调用 `const initState=store.getState()`获取到store初始化的state
1. 将初始化的initState作为参数传递到客户端 `window.__REDUX_STATE__= <%- JSON.stringify(initState) %>`
1. 客户端初始化的时候回去获取`window.__REDUX_STATE__`的值，然后初始化客户端的store,否则两边状态不等，会引起重新渲染（可能是警告）。


## 7.完结待续……

本项目只是基础环境搭建，还有很多需要完善的地方,欢迎大家提issue。搭建过程遇到的一些坑我记录在了<a href="./开发备注.text">开发备注</a>
