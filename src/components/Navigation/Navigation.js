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

    this.mapPath = {};
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
  generateNav(menu, tempPath) {

    let that = this,
        result = [],
        text ;

    _.each(menu, function(item, i){

      tempPath.push(item.key);
      that.mapPath[item.key] = tempPath.slice();

      if (item.icon != null) {
        text = <span><Icon type={item.icon} /><span>{item.text}</span></span>;
      } else {
        text = item.text;
      }

      if (item.children != null) {
        result.push(
          <SubMenu key={item.key} title={text} >
              {that.generateNav(item.children, tempPath)}
          </SubMenu>
        );
      } else {
        result.push (
          <Menu.Item key={item.key} ><Link to={item.href}>{text}</Link></Menu.Item>
        );
      }

      tempPath.pop();

    });
    return result;
  }

  handleClick(e) {
    let state = _.assign(this.state, {current: e.key});
    this.setState(state);
  }

  onOpenChange(openKeys) {
   const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));

  //  console.log(this.getKeyPath(latestOpenKey));
   this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
  }

   getKeyPath(key) {

     return this.mapPath[key] || [];
   }

  render() {


    return (

      <Menu
         mode="inline"
         openKeys={this.state.openKeys}
         selectedKeys={[this.state.current]}
         style={{ width: 240 }}
         onOpenChange={this.onOpenChange}
         onClick={this.handleClick}>
        {this.generateNav(json, new Array())}
      </Menu>
    )
  }
}
