import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchUsersStart = () => ({
    type: actionTypes.FETCH_USERS_START
})

export const fetchUsersFail = (error) => ({
    type: actionTypes.FETCH_USERS_FAIL,
    error: error
})

export const fetchUsersSuccess = (users) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    users: users
})

export const fetchUsers = () => (
    dispatch => {
        dispatch(fetchUsersStart());
        axios.get('/users')
            .then( res => {
                dispatch(fetchUsersSuccess(res.data));
            }).catch( err => {
                console.log('ERRORS', err)
                dispatch(fetchUsersFail(err))
            })
    }
)

export const createUpdateUserStart = () => ({
    type: actionTypes.CREATE_UPDATE_USER_START
})

export const createUpdateUser = () => {
    dispatch => {
        dispatch(createUpdateUserStart());
        // axios.get('/users')
        //     .then( res => {
        //         dispatch(fetchUsersSuccess(res.data));
        //     }).catch( err => {
        //         console.log('ERRORS', err)
        //         dispatch(fetchUsersFail(err))
        //     })
    }
}