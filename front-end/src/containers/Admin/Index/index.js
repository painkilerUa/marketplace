import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import TopNav from '../../../components/Admin/TopNav'
import AddEditUser from '../../../components/Admin/AddEditUser'
import * as actions from '../../../store/actions';

class AdminIndex extends Component {
    state = {
        isModalNewUserOpen: false
    }
    render () {
        return (
            <Fragment>
                <TopNav />
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
    const { } = state;
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(AdminIndex);