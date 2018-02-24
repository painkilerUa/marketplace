import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.sass';

import Search from './containers/Search'
import IndexAdmin from './containers/Admin/Index'
import Users from './containers/Admin/Users'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/search" exact component={Search} />
          <Route path="/admin" exact component={IndexAdmin} />
          <Route path="/admin/users" exact component={Users} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
