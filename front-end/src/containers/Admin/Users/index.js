import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import TopNav from '../../../components/Admin/TopNav'
import AddEditUserForm from '../../../components/Admin/AddEditUserForm';

import * as actions from '../../../store/actions';

class Users extends Component {
    state = {
        isAddEditUserFormShown: false,
        _id: null,
        name: '',
        login: '',
        avatarUri: '',
        location: '',
        languages: '',
        tags: '',
        rate: '',
        description: ''
    }
    componentDidMount () {
        this.props.fetchUsers()
    }

    showAddUserFormHandler = () => this.setState({isAddEditUserFormShown: true})

    hideAddUserFormHandler = () => this.setState({isAddEditUserFormShown: false})

    saveUpdateUserHandler = () => {

    }

    editUserHandler = (_id) => () => {
        const selectedUser = this.props.users.find(user => user._id === _id)
        this.setState({
            isAddEditUserFormShown: true,
            _id: selectedUser['_id'],
            name: selectedUser['name'],
            login: selectedUser['login'],
            avatarUri: selectedUser['avatarUri'],
            location: selectedUser['location'],
            languages: selectedUser['languages'].join(', '),
            tags: selectedUser['tags'].join(', '),
            rate: selectedUser['rate'],
            description: selectedUser.description
        })
    }

    onInputHandler = (payload) => (e) => {
        this.setState({
            [payload.fieldName]: e.target.value
        })
    }

    render () {
        const { isAddEditUserFormShown } = this.state

        const tbody = this.props.users.map((user, i) => (
            <tr key={user._id}>
                <th scope="row">{i+1}</th>
                <td>{user.name}</td>
                <td>{user.login}</td>
                <td>{user.rate}</td>
                <td>{user.languages.join(', ')}</td>
                <td>{user.tags.join(', ')}</td>
                <td>{user.location}</td>
                <td className="cursor-pointer" onClick={this.editUserHandler(user._id)}>Edit</td>
                <td className="cursor-pointer">Delete</td>
            </tr>
        ))
        return (
            <Fragment>
                <TopNav />
                {
                    isAddEditUserFormShown ? (
                        <AddEditUserForm
                            closeBtnHandler={this.hideAddUserFormHandler}
                            onInputHandler={this.onInputHandler}
                        />
                    ) : null
                }
                <div className="container">
                    <div className="row py-4 px-5">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.showAddUserFormHandler}
                        >Add user</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Login</th>
                                    <th scope="col">Rate, $</th>
                                    <th scope="col">Languages</th>
                                    <th scope="col">Tags</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tbody}
                            </tbody>
                        </table>
                    </div>

                </div>
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
        fetchUsers: () => dispatch(actions.fetchUsers()),
        createUpdateUser: (payload) => dispatch(actions.createUpdateUser(payload))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Users);