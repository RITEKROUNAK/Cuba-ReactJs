import {
    GET_EMAILS,
    GET_ALL_EMAILS,
    GET_EMAIL_TYPES
} from '../actionTypes';

const initial_state = {
    allEmails: null,
    types: [],
    loading: false
};

export default (state = initial_state, action) => {
    
    switch (action.type) {

        case GET_EMAILS:
            return { ...state };

        case GET_ALL_EMAILS:
            return { ...state, allEmails: action.payload };

        case GET_EMAIL_TYPES:
            const getTypes = action.payload;
            return { ...state, loading: true, types: getTypes };

        default: return { ...state };
    }
}
