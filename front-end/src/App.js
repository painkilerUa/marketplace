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
  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate')
  //   const { dispatch, redirectUrl } = this.props
  //   const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
  //   const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

  //   if (isLoggingIn) {
  //     dispatch(navigateTo(redirectUrl))
  //   } else if (isLoggingOut) {
  //     // do any kind of cleanup or post-logout redirection here
  //   }
  }
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
          <EnsureLoggedInContainer>
            <Route path="/admin" exact component={IndexAdmin} />
            <Route path="/admin/users" exact component={Users} />          
          </EnsureLoggedInContainer>
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { authorized } = state.auth
  return {
    authorized
  };
};

export default connect( mapStateToProps )(App);
