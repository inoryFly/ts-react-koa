import router from './api'
import renderCtrl from '../controller/renderCtr'

export default async (ctx,next)=>{
    if(ctx.path.match(/^\/api/)){
        return await router.routes()(ctx,next)
    }else{
        return await renderCtrl(ctx,next)
    }
}
