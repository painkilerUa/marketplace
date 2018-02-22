import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserList from '../../components/UserList';
import FilterPanel from '../../components/FilterPanel';
import * as actions from '../../store/actions/index';

import './index.scss';

class Search extends Component {
    componentDidMount () {
        this.props.fetchUsers()
    }

    render () {
        const { users } = this.props;
        return (
            <Fragment>
                <Header />
                <main role="main">
                    <div className="container search-container">
                        <FilterPanel />
                        <UserList users={users} />
                    </div>
                </main>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loading: state.user.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch( actions.fetchUsers() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Search);