import {
  SET_ZIPCODE
} from '../actions/main';

export const initialState = {
  zipcode: '',
};

// A noter : pour le reducer userReducer, seule la tranche user est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {  
    case SET_ZIPCODE :
      console.log("test, i am in the reducer")
      return {
        ...state,
        zipcode: action.zipcode,
      };
    default:
    return state;
  }
};

export default reducer; 