import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import axios from "axios";

class BannerSwiper extends Component {
  state = {
    data: [],
  }
  componentWillMount() {
    axios.get('/api/goodsBanner.json').then((res) => {
      let data = res.data.data
      this.setState({
        data
      })
    });
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="banner_wrapper">
        <Carousel
          autoplay={true}
          infinite={true}
        >
          {this.state.data.length > 0 && this.state.data.map((val) => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={val.src}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }

}

export default BannerSwiper