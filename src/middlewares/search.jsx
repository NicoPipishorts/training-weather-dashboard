// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
  SEARCH_BY_CITYNAME,
  setSearchResults,
  setIsLoading,
} from '../actions/search';

const researchApi = (store) => (next) => (action) =>{

  switch (action.type) {

    case SEARCH_BY_CITYNAME: 

      const { search : { cityName } } = store.getState();

      console.log('In the Middleware : city name value is : ', cityName);
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=c3b933db36214330f5baa93574803f1d`).then(
        (response) => {
          console.log('In the Middleware : API reponse : Passed ', response.data);
          store.dispatch(setSearchResults(response.data));  
        },
      ).catch(
        (error) => {
          console.log('In the Middleware : API reponse : Passed ', error.message);
        },
      );

    break;

    default:
    next(action);   
  }
};
export default researchApi;