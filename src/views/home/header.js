import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Header extends Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {

  }
  goPageSearch = () => {
    this.props.goPageSearch()
  }
   render() {
    const imgUrl = require('../../static/images/logo.png')
    const placeText = '搜索商品，共12638款好物'
    return (
      <div className="home_header_wrapper">
        <img src={imgUrl} width={70} alt=""/>
        <div className="input_wrapper">
          <Link to="/search"><input placeholder={placeText} onClick={this.goPageSearch} type="text"/></Link>
          <i className="iconfont icon-sousuo1"></i>
        </div>
        <Link to="/login"><div className="login_btn">登录</div></Link>
      </div>
    )
  }
}
Header.propTypes = {
  goPageSearch: PropTypes.func.isRequired
}

export default Header