import React, { Component } from 'react'
import { Router, Route, hashHistory} from 'react-router'
import App from './App'
import Navigation from './components/Navigation/Navigation'
import page1 from './pages/page1'

export default class route extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} breadcrumbName="Home">
          <Route path="/page1" component={page1} breadcrumbName="page1"></Route>
          <Route path="/page2" component={page1} breadcrumbName="page2"></Route>
        </Route>

      </Router>
    )
  }
}
