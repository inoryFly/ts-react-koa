import * as Router from 'koa-router'

import indexCtrl from '../controller/indexCtr'
import userCtrl from '../controller/userCtr'

const router =new Router()

router.prefix("/api")

router.get("/",indexCtrl)
router.get("/index",userCtrl)

export default router