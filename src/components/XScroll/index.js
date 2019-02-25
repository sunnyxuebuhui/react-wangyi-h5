import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './index.css'

class XScroll extends Component {
  componentDidMount() {
    const ulDom =  this.types.querySelector('ul')
    if (!ulDom) {
      throw new Error('子节点必须是ul列表')
    }
    this.scroll = new BScroll(this.types, {
      scrollX: true,
      eventPassthrough: 'vertical',
      click: true,
      bounce: false
    })
  }
  render() {
    return (
      <div className="scroll_wrapper" ref={types => this.types = types}>
        {this.props.children}
      </div>
    )
  }
}

export default XScroll