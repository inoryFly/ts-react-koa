import * as Koa from 'koa'
import * as webpack from 'webpack'

import webpackClientConfig from './client'
import koaWebpackDevMiddleWare from './koa-webpack-dev-middleware'

export default (app:Koa)=>{
    const client=webpack(webpackClientConfig.development)
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