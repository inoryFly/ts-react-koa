import {ComponentType} from 'react'
import {matchRoutes} from 'react-router-config'
import bundle from './bundle'
import router from '../../src/config/routes.config'



interface SelfType{
    fetchs:(store:any)=>any
}

type SsrType<T>=T & SelfType

export default async (ctx,next)=>{
    let content={},{html,store}=bundle.render(ctx,content)
    const branch=matchRoutes(router,ctx.url)
    const promises=branch.map(({route})=>{
        const fetchs=(route.component as SsrType<ComponentType>).fetchs
        return fetchs(store)
    })
    await Promise.all(promises).catch(err=>{
        console.log(err)
    })
    await ctx.render('index',{
        title:"我就是测试的",
        app:html,
        initState:store.getState()
    })
}