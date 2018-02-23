import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/actionTypes';


const initialState = {
    authorized: true,
    loading: false,
    hasError: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case LOGIN_USER_START: 
            return {
                ...state,
                loading: true,
                hasError: false
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('ACCESS_TOKEN_KEY', action.token);
            return {
                ...state,
                authorized: true,
                loading: false
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                loading: false,
                hasError: true
            }
        default: return state;
    }
};

export default reducer;