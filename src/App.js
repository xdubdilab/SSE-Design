import React, { Component } from 'react'
import { Link } from 'react-router'
import { Breadcrumb } from 'antd'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import './common/layout.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sse-layout">

        <Header>
        
        </Header>

        <div className="sse-layout-sider">
          <Navigation />
        </div>

        <div className="sse-layout-content">
          <div className="sse-layout-breadcrumb">
            <Breadcrumb className="sse-layout-breadcrumb" {...this.props} />
          </div>

          <div className="sse-layout-container">
            {this.props.children}
          </div>

        </div>

      </div>
    )
  }
}
