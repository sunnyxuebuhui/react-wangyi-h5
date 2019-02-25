import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login_wrapper">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack() }
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >登录</NavBar>
        <div className="img"><img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" width="100%" alt=""/></div>
        <div className="btn">
          <div className="phone">手机号码登录</div>
          <div className="emaill">邮箱账号登录</div>
          <p className="quick">手机号码快捷注册 ></p>
        </div>
      </div>
    )
  }
}

export default Login