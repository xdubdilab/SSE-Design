import React, { Component } from 'react'
import { Link } from 'react-router'
import { Icon, Dropdown, Menu } from 'antd'
import './Header.css'
import headerInfo from './Header.json'


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.logo = "";
    this.userlist = [];
  }

  getHeaderInfo(headerinfo) {
    this.logo = headerinfo.logo;
    this.userlist = headerinfo.userlist;
  }

  generateUserList() {
    this.getHeaderInfo(headerInfo);

    let userNav = new Array();
    _.each(this.userlist, function(item) {

      userNav.push(
        <Menu.Item key={item.key} >
          <Link rel="noopener noreferrer" to={item.href} >
            {item.icon == null ? item.text: (<span><Icon type={item.icon}></Icon><span>{item.text}</span></span>)}
          </Link>
        </Menu.Item>
      );
    });

    return (<Menu>{userNav}</Menu>);
  }

  render() {
    const userNav = this.generateUserList();

    return (
        <div className="sse-header default">
          <img className="logo" src={require(this.logo)} />
          <Dropdown overlay={userNav}>
            <div className="userinfo">
                <Icon type="user" className="userImage"/>
                <span className="username">温艳琪</span>
            </div>
          </Dropdown>
        </div>
    )
  }
}
