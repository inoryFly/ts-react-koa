import * as Router from 'koa-router'

import indexCtrl from '../controller/indexCtr'

const router =new Router()

router.prefix("/api")

router.get("/",indexCtrl)

export default router