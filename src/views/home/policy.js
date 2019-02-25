import React, { Component } from 'react';

class Policy extends Component {
  static defaultProps = {
    policys: []
  }
  render() {
    return (
      <ul className="policy-list">
        {this.props.policys.map((v,index) => {
          return (
            <li className="item"  key={index}>
              <img src={v.src} width={20} alt=""/>
              <span className="texts">{v.text}</span>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Policy