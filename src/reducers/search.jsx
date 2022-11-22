import {
  SET_ISLOADING,
  SET_ZIPCODE,
  SET_CITYNAME,
  SET_SEARCH_RESULTS,
} from '../actions/search';

export const initialState = {
  isLoading: false,
  zipcode: '',
  cityName: '',
  results: [],
};

// A noter : pour le reducer userReducer, seule la tranche user est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {  
  
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.value,
      };

    case SET_ZIPCODE :
      return {
        ...state,
        zipcode: action.value,
      };

    case SET_CITYNAME :
      return {
        ...state,
        cityName: action.value,
      };

    case SET_SEARCH_RESULTS :
      return {
        ...state,
        isLoading: false,
        results: action.value,
      };

    default:
    return state;
  }
};

export default reducer; 