import {
    SET_USER_TOKEN,
    SET_LOGIN_INFO
} from '../actions/users';

export const initialState = {
    isLoading: false,
    username: '',
    password: '',
    token: '',
    user: [],
};

// A noter : pour le reducer userReducer, seule la tranche user est visible !
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {  

        case SET_LOGIN_INFO:
            return {
                ...state,
                [action.name]: action.value 
            }

        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.data,
            }

        default:
        return state;
    }
};

export default reducer; 