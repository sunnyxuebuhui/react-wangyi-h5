import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import './index.css'
import './static/iconfont/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css'


import Home from './views/home/home'
import Search from './views/search/'
import Login from './views/login/'



ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/search' component={ Search } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);
