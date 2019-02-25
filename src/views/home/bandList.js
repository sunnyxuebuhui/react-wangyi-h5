import React, { Component } from 'react';

class BandList extends Component {
  static defaultProps = {
    bandList: [],
    title: '品牌制造商直供'
  }
  render() {
    return (
      <div className="ul_content">
        <h2 className='title'>{this.props.title}</h2>
        <ul className="band_wrapper">
          {this.props.bandList.length > 0 ? this.props.bandList.map(v => (
            <li key={v.id} style={{width: `${v.liwidth}`}}>
              <img src={v.src} width="100%" alt=""/>
              <span>{v.text}</span>
            </li>
          )) : null}
        </ul>
      </div>
    )
  }
}

export default BandList