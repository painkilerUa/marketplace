import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import './App.sass';

import Search from './containers/Search'
import Login from './containers/Admin/Login'
import IndexAdmin from './containers/Admin/Index'
import Users from './containers/Admin/Users'
import EnsureLoggedInContainer from './containers/Admin/EnsureLoggedInContainer'

class App extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/search" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <EnsureLoggedInContainer>
            <Route path="/admin" exact component={IndexAdmin} />
            <Route path="/admin/users" exact component={Users} />          
          </EnsureLoggedInContainer>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
