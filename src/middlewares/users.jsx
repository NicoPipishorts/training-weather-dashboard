// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
    setIsLoading,
    setUserToken,
    USER_LOGIN,
} from '../actions/users';

const researchApi = (store) => (next) => (action) =>{

    const {users : {
        username,
        password
    }} = store.getState();

    switch (action.type) {

        case USER_LOGIN: 

            const { search : { cityName } } = store.getState();

            console.log('In the Users Middleware : getting the user info');
            axios.post(`http://127.0.0.1:8000/api/login`, {username, password}).then(
            (response) => {
                console.log('In the Users Middleware : API reponse : Passed ', response.data.token);
                store.dispatch(setUserToken(response.data));  
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