import * as Koa from 'koa'

import baseConfig from './config'

let app=new Koa()

app.listen(baseConfig.port,()=>{
    console.log(`koa server started successfully at port ${baseConfig.port}`)
})