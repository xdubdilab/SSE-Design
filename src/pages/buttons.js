import React, { Component } from React
import { Button } from 'antd'

export default class ButtonsPage extends Component{
  constructor() {

  }

  render() {
    <div class="sse-content">
      <p>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。</p>
      <p>通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，默认为次按钮</p>
      <Button type="primary">主按钮</Button>
      <Button>次按钮</Button>
      <Button type="ghost">幽灵按钮</Button>
      <Button type="dashed">虚线按钮</Button>
    </div>
  }
}
