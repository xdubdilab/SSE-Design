import React, { Component } from 'react'
import { Icon } from 'antd'
import './icons.css'
import '../../common/style.css'

export default class iconsPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>图标的命名规范</h3>
          <div className="discription">
            我们为每个图标赋予了语义化的命名，命名规则如下:
            <ul>
              <li>实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；</li>
              <li>命名顺序：[icon名]-[形状可选]-[描线与否]-[方向可选]。</li>
            </ul>
          </div>
        </div>
        <br />
        <div>
          <h3>如何使用</h3>
          <div className="discription">
              使用<strong>Icon</strong>标签声明组件，指定图标对应的 type 属性，示例代码如下: <br />
              <div className="code-area">&lt;Icon type="link" 	&frasl;&gt;</div>
              最终会渲染为：<br />
              <div className="code-area">&lt;i class="anticon anticon-type"&gt; &lt;&frasl;i&gt;</div>
          </div>
        </div>
        <br />
        <div>
          <h3>方向性图标</h3>
          <div className="icon-container">
            <div className="icon">
              <Icon type="step-backward" style={{color: "red"}}/>
              <p>step-backward</p>
            </div>
            <div className="icon">
              <Icon type="step-forward" />
              <p>step-forward</p>
            </div>
            <div className="icon">
              <Icon type="fast-backward" />
              <p>fast-backward</p>
            </div>
            <div className="icon">
              <Icon type="fast-forward" />
              <p>fast-forward</p>
            </div>
            <div className="icon">
              <Icon type="shrink" />
              <p>shrink</p>
            </div>
            <div className="icon">
              <Icon type="arrows-alt" />
              <p>arrows-alt</p>
            </div>
            <div className="icon">
              <Icon type="down" />
              <p>down</p>
            </div>
            <div className="icon">
              <Icon type="up" />
              <p>up</p>
            </div>
            <div className="icon">
              <Icon type="left" />
              <p>left</p>
            </div>
            <div className="icon">
              <Icon type="right" />
              <p>right</p>
            </div>
            <div className="icon">
              <Icon type="caret-up" />
              <p>caret-up</p>
            </div>
            <div className="icon">
              <Icon type="caret-down" />
              <p>caret-down</p>
            </div>
            <div className="icon">
              <Icon type="caret-left" />
              <p>caret-left</p>
            </div>
            <div className="icon">
              <Icon type="caret-right" />
              <p>caret-right</p>
            </div>
            <div className="icon">
              <Icon type="up-circle" />
              <p>up-circle</p>
            </div>
            <div className="icon">
              <Icon type="down-circle" />
              <p>down-circle</p>
            </div>
            <div className="icon">
              <Icon type="left-circle" />
              <p>left-circle</p>
            </div>
            <div className="icon">
              <Icon type="right-circle" />
              <p>right-circle</p>
            </div>
            <div className="icon">
              <Icon type="up-circle-o" />
              <p>up-circle-o</p>
            </div>
            <div className="icon">
              <Icon type="down-circle-o" />
              <p>down-circle-o</p>
            </div>
            <div className="icon">
              <Icon type="left-circle-o" />
              <p>left-circle-o</p>
            </div>
            <div className="icon">
              <Icon type="right-circle-o" />
              <p>right-circle-o</p>
            </div>
            <div className="icon">
              <Icon type="double-left" />
              <p>double-left</p>
            </div>
            <div className="icon">
              <Icon type="double-right" />
              <p>double-right</p>
            </div>
          </div>
        </div>

        <p>更多图标请参照 https://ant.design/components/icon/</p>
      </div>
    )

  }
}
