import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import Routes from '../../src/routes'
import configureStore from '../../src/store'



const store = configureStore()
export default {
    render(ctx, context) {
        return {
            html:renderToString(<div>
                <Provider store={store}><StaticRouter location={ctx.url} context={context}>
                    <Routes />
                </StaticRouter>
                </Provider>
           </div>),
           store
        }
    },
}