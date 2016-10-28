import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import "./buttons.css"

export default class ButtonsPage extends Component{

  render() {
    return (
      <div >
        <h3>按钮类型</h3>
        <div className="description">

          <p>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。</p>
          <p>通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，默认为次按钮</p>
        </div>
        <div className="displayArea">
          <Button type="primary">主按钮</Button>
          <Button>次按钮</Button>
          <Button type="ghost">幽灵按钮</Button>
          <Button type="dashed">虚线按钮</Button>
        </div>
        <h3>按钮图标</h3>
        <div className="description">

          <p>当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。</p>
          <p>如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。</p>
        </div>
        <div className="displayArea">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button type="ghost" shape="circle-outline" icon="search" />
          <Button type="ghost" icon="search">Search</Button>
        </div>

        <h3>按钮组合</h3>
        <div className="description">

          <p>可以将多个 Button 放入 Button.Group 的容器中。</p>

        </div>
        <div className="displayArea">
          <p>Basic</p>
          <Button.Group>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button type="ghost">M</Button>
            <Button type="dashed">R</Button>
          </Button.Group>
          <p>With Icon</p>
          <Button.Group>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </Button.Group>
        </div>

        <h3>其他属性</h3>
        <div className="description">

          <p>增加loading属性，按钮就会有loading效果</p>
          <p>增加disabled属性，按钮就会被禁用</p>
          <p>通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。</p>
        </div>
        <div className="displayArea">
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" disabled>
            disabled
          </Button>
          <Button type="primary" size="large">
            large
          </Button>
          <Button type="primary" size="small">
            small
          </Button>
        </div>

      </div>
    )

  }
}
