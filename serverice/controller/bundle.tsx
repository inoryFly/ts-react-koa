import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../../src/routes'
import configureStore from '../../src/store'
import TodoList from '../../src/pages/TodoList'

const store = configureStore()
export default {
    render(ctx, context) {
        return renderToString(<div><StaticRouter location={ctx.url} context={context}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </StaticRouter>
            </div>
        )
    },
    initState: store.getState()
}