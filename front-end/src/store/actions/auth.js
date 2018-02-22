import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const login = (payload) => (
    dispatch => {
        console.log('auth', payload)
        // axios.post('/users')
        //     .then( res => {
        //         dispatch(fetchUsersSuccess(res.data));
        //     }).catch( err => {
        //         console.log('ERRORS', err)
        //         dispatch(fetchUsersFail(err))
        //     })
    }
)