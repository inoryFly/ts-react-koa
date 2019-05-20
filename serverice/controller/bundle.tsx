import * as React from 'react'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../../src/routes'
import store from '../../src/store'

export default {
    render(ctx,context){
        console.log(ctx.url)
        return renderToString(<Provider store={store}>
            <StaticRouter location={ctx.url} context={context}>
                <Routes />
            </StaticRouter>
        </Provider>)
    },
    initState:store.getState()
}