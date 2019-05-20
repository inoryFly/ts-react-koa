import * as Koa from 'koa'

import baseConfig from './config'
import middleWareRegister from './middlewareRegister'
import webpackDevServer from '../build/webpack-dev-server'

let app=new Koa()

if(baseConfig.isDev){
    //TODO 开发环境的服务器配置，热更新等等
    webpackDevServer(app)
}

middleWareRegister(app)



app.listen(baseConfig.port,()=>{
    console.log(`koa server started successfully at port ${baseConfig.port}`)
})