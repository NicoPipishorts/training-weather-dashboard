import {
    SET_USER_INFO
} from '../actions/users';

export const initialState = {
    isLoading: false,
    user: [],
};

// A noter : pour le reducer userReducer, seule la tranche user est visible !
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {  

        case SET_USER_INFO:
            return {
                ...state,
                user: action.data,
            }

        default:
        return state;
    }
};

export default reducer; 