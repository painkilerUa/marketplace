import * as actionTypes from '../actions/actionTypes';


const initialState = {
    users: [],
    loading: false,
    loaded: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'some case': 
            return
        default: return state;
    }
};

export default reducer;