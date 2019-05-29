/**
 * ts里面不能使用jsx语法，所以需要写一个bundle文件来实现入口与兼容。
 */
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import Routes from '../../src/routes'

export default {
    render(ctx, context,store) {
        return renderToString(<div>
                <Provider store={store}><StaticRouter location={ctx.url} context={context}>
                    <Routes />
                </StaticRouter>
                </Provider>
           </div>)
    },
}