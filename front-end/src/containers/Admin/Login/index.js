import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ModalLogin from '../../../components/Admin/ModalLogin'
import * as actions from '../../../store/actions';

class Login extends Component {
    state = {
        login: '',
        password: ''
    }
    closeHandler = () => {
        if (!this.props.authorized) return
    }
    loginHandler = () => {
        const { login, password } = this.state;
        this.props.login({login, password})
    }
    onInputHandler = (payload) => (e) => {
        this.setState({
            [payload.fieldName]: e.target.value
        })
    }
    render () {
        const { authorized } = this.props
        if (authorized) {
            return (
                <Redirect
                    to={{ pathname: '/admin' }}
                />                  
            )
        } else {
            return (
                <ModalLogin
                    loading={this.props.loading}
                    hasError={this.props.hasError}
                    closeHandler={this.closeHandler}
                    loginHandler={this.loginHandler}
                    onInputHandler={this.onInputHandler}
                    login={this.state.login}
                    password={this.state.password}
                />                
            )
        }
    }
}

const mapStateToProps = state => {
    const { authorized, loading, hasError } = state.auth
    return {
        authorized,
        loading,
        hasError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (payload) => dispatch(actions.login(payload))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Login);