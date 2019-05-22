import * as Koa from 'koa'
import * as path from 'path'
import baseConfig from './config'
import middleWareRegister from './middlewareRegister'
import webpackDevServer from '../build/webpack-dev-server'

let app=new Koa()
let bundle
const bundleFile=path.join(__dirname,"../bundle/server-bundle.js")

if(baseConfig.isDev){
    //TODO 
    //开发环境的服务器配置，热更新等等
    webpackDevServer(app,()=>{
        delete require.cache[require.resolve(bundleFile)];
        bundle = require(bundleFile).default;
    })
}

//中间件注册
middleWareRegister(app)



app.listen(baseConfig.port,()=>{
    console.log(`koa server started successfully at port ${baseConfig.port}`)
})