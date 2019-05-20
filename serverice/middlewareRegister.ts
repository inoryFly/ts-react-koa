import * as Koa from 'koa'
import * as views from 'koa-views'
import * as compress from 'koa-compress'
import * as favicon from 'koa-favicon'
import * as path from 'path'

import routes from './routes'

let templatePath=path.join(__dirname,'./template')
let publicPath=path.join(__dirname,"../public/favicon.ico")

export default (app:Koa)=>{
    app.use(favicon(publicPath))
    app.use(views(templatePath,{extension: 'ejs'}))
    
    app.use(routes)
    // app.use(compress) //开启gzip压缩
}