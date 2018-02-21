import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.sass';

import Search from './containers/Search'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/search" component={Search} />
          {/* <Route path="/orders" component={Orders} /> */}
          {/* <Route path="/" exact component={BurgerBuilder} /> */}
        </Switch>
      </Fragment>
    );
  }
}

export default App;
