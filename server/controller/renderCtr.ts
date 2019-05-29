import { ComponentType } from 'react'
import { matchRoutes } from 'react-router-config'
import bundle from './bundle'
import router from '../../src/config/routes.config'
import configureStore from '../../src/store'



interface SelfType {
    fetchs: (store: any) => any | null
}

type SsrType<T> = T & SelfType

export default async (ctx, next) => {
    let store = configureStore()
    let content = {}
    const branch = matchRoutes(router, ctx.url)
    const promises = branch.map(({ route }) => {
        const fetchs = (route.component as SsrType<ComponentType>).fetchs
        //不是所有的组件都有fetchs的
        return fetchs instanceof Function ?fetchs(store):Promise.resolve(null)
    })
    //实际执行到第一个action就结束了，没有监听到saga,
    //更换成redux-thunk无此类问题。
    await Promise.all(promises).catch(err => {
        console.log(err)
    })
     await ctx.render('index', {
        title: "测试页面",
        app: bundle.render(ctx,content,store),
        initState: store.getState(),
        ssr:true
    })
}