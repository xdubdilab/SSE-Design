import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import json from './Navigation.json'
import { Menu, Icon} from 'antd'

const SubMenu = Menu.SubMenu;


export default class Navigation extends Component{

  constructor(props) {
    super(props);
    this.initState();

    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  initState() {
    this.state = {
      current: '1',
      openKeys: []
    }
  }

  initKeyPath(menu) {
    //设计算法实现getKeyPath的功能，不需要再配置

  }
  //
  // generateNav(menu) {
  //   let result = [];
  //   let that = this;
  //   _.each(menu, function(item, i){
  //     if(item.children != null) {
  //       result.push(
  //         <SubMenu key={item.key} title={item.text} >
  //             {that.generateNav(item.children)}
  //         </SubMenu>
  //       );
  //     } else {
  //       result.push (
  //         <Menu.Item key={item.key} >{item.text}</Menu.Item>
  //       );
  //     }
  //   });
  //   return result;
  // }

  handleClick(e) {
    let state = _.assign(this.state, {current: e.key});
    this.setState(state);
  }

  onOpenChange(openKeys) {
   const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
   this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
  }

   getKeyPath(key) {

     const map = {
       sub1: ['sub1'],
       sub2: ['sub2'],
       sub3: ['sub2', 'sub3'],
       sub4: ['sub4'],
     };
     return map[key] || [];
   }

  render() {

    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ width: 240 }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="1"><Link to="">Option 1</Link></Menu.Item>
          <Menu.Item key="2"><Link to="">Option 2</Link></Menu.Item>
          <Menu.Item key="3"><Link to="">Option 3</Link></Menu.Item>
          <Menu.Item key="4"><Link to="">Option 4</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5"><Link to="">Option 5</Link></Menu.Item>
          <Menu.Item key="6"><Link to="">Option 6</Link></Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7"><Link to="">Option 7</Link></Menu.Item>
            <Menu.Item key="8"><Link to="">Option 8</Link></Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9"><Link to="">Option 9</Link></Menu.Item>
          <Menu.Item key="10"><Link to="">Option 10</Link></Menu.Item>
          <Menu.Item key="11"><Link to="">Option 11</Link></Menu.Item>
          <Menu.Item key="12"><Link to="">Option 12</Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}
