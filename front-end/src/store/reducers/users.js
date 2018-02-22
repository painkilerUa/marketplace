import * as actionTypes from '../actions/actionTypes';


const initialState = {
    users: [],
    loading: false,
    loaded: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USERS_START: 
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_USERS_SUCCESS: 
        return {
            ...state,
            users: action.users,
            loading: false,
            loaded: true
        }
        case actionTypes.FETCH_USERS_FAIL: 
        return {
            ...state,
            loading: false,
            loaded: false
        }
        default: return state;
    }
};

export default reducer;