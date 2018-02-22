import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModalLogin from '../../../components/ModalLogin'
import * as actions from '../../../store/actions';

class AdminIndex extends Component {
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
        return (
            this.props.authorized ? null : (
                <ModalLogin 
                    closeHandler={this.closeHandler}
                    loginHandler={this.loginHandler}
                    onInputHandler={this.onInputHandler}
                    login={this.state.login}
                    password={this.state.password}
                />
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        authorized: state.auth.authorized,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (payload) => dispatch(actions.login(payload))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(AdminIndex);