import views from 'koa-views'
import path from 'path'

let templatePath=path.join(__dirname,'./template')

export default app=>{
    app.use(views(templatePath,{extension: 'ejs'}))
}