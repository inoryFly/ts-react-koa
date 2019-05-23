import bundle from './bundle'
export default async (ctx,next)=>{
    let content={} 
    // await ctx.render('index',{
    //     title:"我就是测试的",
    //     app:bundle.render(ctx,content),
    //     initState:bundle.initState
    // })
    let base=bundle.render(ctx,content)
    console.log(base)
    ctx.body=`<!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>gda</title>
        <style>${[...base.css].join("")}</style>
    </head>
    <body>
        <div id="root">${base.body}</div>
        <script>
            try{
                window.__REDUX_STATE__= <%- JSON.stringify(initState) %>
            }catch(e){
                console.warn("error in getting server redux data")
            }
        </script>
         <script src="/assets/vendor.js"></script>
         <script src="/assets/client.js"></script>
    </body>
    
    </html>`
}