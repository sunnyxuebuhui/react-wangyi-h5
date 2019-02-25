import React, { Component } from 'react';
import axios from "axios";
import Header from './header'
import BottomTabBar from '../../components/bottomTabBar/'
import XScroll from '../../components/XScroll/'
import NavList from '../../components/navList/'
import BannerSwiper from '../../components/bannerSwiper/'
import GoodsList from '../../components/goodsList/goodsList'
import Policy from './policy'
import Menu from './menu'
import BandList from './bandList'
import New from './new'
import './index.css'

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      goodsList: [],
      policys: [
        {src: 'https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png', text: '网易自营品牌'},
        {src: 'https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png', text: '30天无忧退货'},
        {src: 'https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png', text: '48小时快速退款'}
      ],
      menuList: [
        {src: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png', text: '居家生活', id: 1},
        {src: 'https://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png', text: '服饰鞋包', id: 2},
        {src: 'https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png', text: '美食酒水', id: 3},
        {src: 'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png', text: '家居清洁', id: 4},
        {src: 'https://yanxuan.nosdn.127.net/920ea48c4c6400b6b7dcd555ca730485.png', text: '限时购', id: 5},
        {src: 'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png', text: '母婴亲子', id: 6},
        {src: 'https://yanxuan.nosdn.127.net/23be40a05926faf2f2a81a08a1c53164.png', text: '运动旅行', id: 7},
        {src: 'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png', text: '数码家电', id: 8},
        {src: 'https://yanxuan.nosdn.127.net/e83bd330713b66a8d4e8eb0cefed8996.png', text: '礼品特色', id: 9},
        {src: 'https://yanxuan.nosdn.127.net/51f5a91f10ba745ec68340b98315acf5.png', text: '超级会员', id: 10}
      ],
      bandList: [
        {src: 'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1', text: '海外制造商', id: 1},
        {src: 'https://yanxuan.nosdn.127.net/f0ab529d1d34b61357889029793e1086.png?imageView&thumbnail=343y260&enlarge=1', text: 'CK制造商', id: 2},
        {src: 'https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1', text: '新秀丽制造商', id: 3},
        {src: 'https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1', text: 'Nine West制造商', id: 4},
      ],
      bandList2: [
        {src: 'http://yanxuan.nosdn.127.net/d78a90f7f496656b79e4559935031958.png?imageView&quality=65&thumbnail=200x200',liwidth: '33.33%', id: 1},
        {src: 'http://yanxuan.nosdn.127.net/1979054e3a1c8409f10191242165e674.png?imageView&quality=65&thumbnail=200x200',liwidth: '33.33%', id: 2},
        {src: 'http://yanxuan.nosdn.127.net/73af63aa5c47c369fe7e2f30b3815aac.png?imageView&quality=65&thumbnail=200x200',liwidth: '33.33%', id: 3},
        {src: 'http://yanxuan.nosdn.127.net/61f8e81172d9afd38126bae65d2eddfe.png?imageView&quality=65&thumbnail=200x200',liwidth: '33.33%', id: 4},
        {src: 'http://yanxuan.nosdn.127.net/55425f24345d01992d61a1646325ac94.png?imageView&quality=65&thumbnail=200x200',liwidth: '33.33%', id: 5},
        {src: 'http://yanxuan.nosdn.127.net/0d551bd5cee1656127985e1003926672.png?imageView&quality=65&thumbnail=200x200',liwidth: '33.33%', id: 6},
      ]
    }
  }
  componentWillMount() {
    axios.get('/api/goodsList.json').then((res) => {
      let goodsList = res.data.data
      this.setState({
        goodsList
      })
    });
  }

  goPageSearch() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <div className="home_top_wrapper">
          <Header goPageSearch={this.goPageSearch} />
          <XScroll>
            <NavList />
          </XScroll>
        </div>
        <section className="main_wrapper">
          <BannerSwiper />
          <Policy policys={this.state.policys} />
          <Menu menuList={this.state.menuList} />
          <BandList bandList={this.state.bandList}/>
          <BandList title={'类目热销榜'} bandList={this.state.bandList2}/>
          <XScroll>
            <GoodsList goodsList={this.state.goodsList} />
          </XScroll>
          <New />
        </section>
        <BottomTabBar />
      </div>
    )
  }

}

export default Home