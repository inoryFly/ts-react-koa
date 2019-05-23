import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../../src/routes'
import configureStore from '../../src/store'



const store = configureStore()
export default {
    render(ctx, context) {
        const css = new Set()
        const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
        return {
            body:renderToString(<div>
                <Provider store={store}><StaticRouter location={ctx.url} context={context}>
                    <Routes />
                </StaticRouter>
                </Provider>
           </div>),
            css
        }
    },
    initState: store.getState()
}