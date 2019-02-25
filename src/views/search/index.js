import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'
import './index.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotList: [
        {keyword: "床品7.5折起"},
        {keyword: "烘干器 直降300元",},
        {keyword: "爆款 行李箱"},
        {keyword: "按摩电器"},
        {keyword: "节后瘦身 6.5折起"},
        {keyword: "热卖拖鞋"},
        {keyword: "换洗内衣"},
        {keyword: "取暖家电"},
        {keyword: "保温杯"},
        {keyword: "纸品湿巾"},
        {keyword: "家庭清洁"}
      ]
    }
  }
  a() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="search_wrapper">
        <div className="header">
          <i className="iconfont icon-zuojiantou" onClick={() => this.props.history.goBack()}></i>
          <SearchBar placeholder="20元内超值清单  凑单必选" />
        </div>
        <div className="hot">
          <h2>热门搜索</h2>
          <ul>
            { this.state.hotList.map((v, index) => (
              <li key={index}>{v.keyword}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Search