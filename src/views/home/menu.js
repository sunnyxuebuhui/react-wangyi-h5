import React, { Component } from 'react';

class Menu extends Component {
  static defaultProps = {
    menuList: []
  }
  render() {
    return (
      <ul className="menu_wrapper">
        {this.props.menuList.length > 0 ? this.props.menuList.map(v => (
          <li key={v.id}>
            <img src={v.src} width={60} alt=""/>
            <span>{v.text}</span>
          </li>
        )) : null}
      </ul>
    )
  }
}

export default Menu
