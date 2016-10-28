import React, { Component } from 'react'
import { Router, Route, browserHistory} from 'react-router'
import App from './App'
import page1 from './pages/page1'
import buttonPage from './pages/Buttons/buttons'

export default class route extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} breadcrumbName="Home">
          <Route path="/page1" component={page1} breadcrumbName="page1"></Route>
          <Route path="/page2" component={page1} breadcrumbName="page2"></Route>
          <Route path="/buttons" component={buttonPage} breadcrumbName="Buttons"></Route>
        </Route>

      </Router>
    )
  }
}
