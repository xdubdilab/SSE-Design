import React, { Component } from 'react'
import { Icon } from 'antd'
import './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sse-header default">
        <img className="logo" src={require("./logo-171x40.png")} />
        <div className="userinfo">
          <Icon type="user" className="userImage"/>
          <span className="username">温艳琪</span>
        </div>
      </div>
    )
  }
}
