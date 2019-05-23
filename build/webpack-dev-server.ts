import * as Koa from 'koa'
import * as webpack from 'webpack'
import webpackClientConfig from './client'
import webpackServerConfig from './server'
import koaWebpackDevMiddleWare from './koa-webpack-dev-middleware'


export default (app:Koa,serverComplieDone:()=>void)=>{
    console.log(webpackClientConfig.development.module.rules)
    // 
    const client=webpack(webpackClientConfig.development)
    client.hooks.done.tap('Mytest',params=>{
        const server=webpack(webpackServerConfig.development)
        server.hooks.done.tap("ServerDone",serverComplieDone)
        server.hooks.run.tapAsync("asyncServer",(complier,callback)=>{
            console.log("异步")
            callback()
        })
    })
    // client.plugin('done',()=>{
    //     const server=webpack(webpackServerConfig.development)
    //     server.plugin("done",serverComplieDone)
    //     server.run((err,stats)=>{
    //         if(err){
    //             console.error(stats)
    //         }
    //     })
    // })
    
    const {output}=webpackClientConfig.development
    const devMiddlewareOptions={
        publicPath:output.publicPath,
        stats:{
            chunks:false,
            colors:true
        }
    }
    app.use(koaWebpackDevMiddleWare(client,devMiddlewareOptions))
}