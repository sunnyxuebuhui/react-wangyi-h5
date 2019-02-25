import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Home from '../views/home/home'


class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route exact path="/" component={Home}></Route>
            <Route path='/main' component={Home}></Route>
            {/*<Route exact path='/detail' component={GoodDetail}></Route>*/}
          </React.Fragment>
        </HashRouter>
      </Provider>
    )
  }
}

export default Router