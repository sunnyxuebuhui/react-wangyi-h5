import React, { Component } from 'react';
import './index.css'

class GoodsList extends Component {
  static defaultProps = {
    goodsList: []
  }

  render() {
    return (
      <ul className="goods_wrapper">
        {this.props.goodsList.map(v => (
          <div className="content" key={v.describe}>
            <img src={v.img} width={100} alt=""/>
            <div className="text">
              <p className="name ell">{v.name}</p>
              <p className="desc ell">{v.describe}</p>
              <p className="price">¥ {v.price}</p>
            </div>
          </div>
        ))}
      </ul>
    )
  }
}

export default GoodsList