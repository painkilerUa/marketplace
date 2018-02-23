import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const loginUserStart = () => ({
    type: actionTypes.LOGIN_USER_START
})

export const loginUserSuccess = (token) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    token
})

export const loginUserFail = () => ({
    type: actionTypes.LOGIN_USER_FAIL
})

export const login = (payload) => (
    dispatch => {
        // console.log('auth', payload)
        dispatch(loginUserStart());
        axios.post('/login', payload)
            .then( res => {
                console.log('auth', res)
                dispatch(loginUserSuccess(res.data.token));
            }).catch( err => {
                console.log('ERRORS', err)
                dispatch(loginUserFail(err))
            })
    }
)