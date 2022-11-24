// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
    setIsLoading,
    setUserInfo,
    USER_LOGIN,
} from '../actions/users';

const researchApi = (store) => (next) => (action) =>{

    switch (action.type) {

    case USER_LOGIN: 

        const { search : { cityName } } = store.getState();

        console.log('In the Users Middleware : getting the user info');
        axios.get(`http://127.0.0.1:8000/api/users/1`).then(
        (response) => {
            console.log('In the Users Middleware : API reponse : Passed ', response.data);
            store.dispatch(setUserInfo(response.data));  
        },
        ).catch(
        (error) => {
            console.log('In the Users Middleware : API reponse : Failed ', error.message);
        },
        );

    break;

    default:
    next(action);   
    }
};
export default researchApi;