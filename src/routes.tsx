import * as React from 'react'
// import * as ReactDom from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Home from './pages/Home'
// import TodoList from './pages/TodoList'
// import renderCtrl from '../controller/renderCtrl';
import router from './config/routes.config'

class Routes extends React.Component {
    render() {
        return <Switch>
            {
                router.map(ele => <Route key={ele.path} exact={ele.exact} component={ele.component} />)
            }
        </Switch>
    }
}

export default Routes

