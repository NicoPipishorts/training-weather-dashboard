import {
    SET_USER_TOKEN,
    SET_LOGIN_INFO
} from '../actions/users';

export const initialState = {
    isLoggedIn: false,
    username: '',
    password: '',
    user: {
        iat: '',
        exp: '',
        roles: [],
        username: '',
    },
    token: '',
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
                isLoggedIn: true,
                user: action.data,
                token: action.token,
            }

        default:
        return state;
    }
};

export default reducer; 