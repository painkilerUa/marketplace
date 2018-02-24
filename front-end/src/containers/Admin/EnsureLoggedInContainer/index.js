import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EnsureLoggedInContainer extends Component {
    state = {}
    componentDidMount() {
    }
  
    render() {
        const { isAuthorized } = this.props.isAuthorized

        if (isAuthorized) {
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

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthorized: state.auth.authorized,
    }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)