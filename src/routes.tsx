import * as React from 'react'
// import * as ReactDom from 'react-dom'
import {  Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
// import renderCtrl from '../controller/renderCtrl';

class Routes extends React.Component {
    render() {
        return <Switch>
            <Route exact path="/" component={() => <Redirect to={"/a/b"} />} />
            <Route exact path="/a/b" component={Home} />
            <Route exact path="/:list" component={TodoList} />
        </Switch>
    }
}

export default Routes

