import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import TopNav from '../../../components/Admin/TopNav'
import ModalLogin from '../../../components/ModalLogin'
import AddEditUser from '../../../components/Admin/AddEditUser'
import * as actions from '../../../store/actions';

class AdminIndex extends Component {
    state = {
        login: '',
        password: '',
        isModalNewUserOpen: true
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
            <Fragment>
                <TopNav />
                    {this.props.authorized ? null : (
                        <ModalLogin
                            loading={this.props.loading}
                            hasError={this.props.hasError}
                            closeHandler={this.closeHandler}
                            loginHandler={this.loginHandler}
                            onInputHandler={this.onInputHandler}
                            login={this.state.login}
                            password={this.state.password}
                        />
                    )}
                    {
                        this.state.isModalNewUserOpen ? (
                            <AddEditUser />
                        ) : null
                    }         
            </Fragment>
        )
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

export default connect( mapStateToProps, mapDispatchToProps )(AdminIndex);