import bundle from './bundle'
export default async (ctx,next)=>{
    let content={}
    await ctx.render('index',{
        title:"我就是测试的",
        app:bundle.render(ctx,content),
        initState:bundle.initState
    })
}