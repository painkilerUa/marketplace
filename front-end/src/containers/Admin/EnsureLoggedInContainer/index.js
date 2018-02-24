import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EnsureLoggedInContainer extends Component {
    state = {}
    componentDidMount() {
    }
  
    render() {
        const { authorized } = this.props
        if (authorized) {
            return this.props.children
        } else {
            return (
                <Redirect
                    to={{ pathname: '/login' }}
                />                    
            )
        }
    }
}

const mapStateToProps = state => {
    const { authorized } = state.auth
    return {
        authorized
    };
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)