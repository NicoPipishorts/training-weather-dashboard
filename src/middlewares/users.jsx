// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
    setIsLoading,
    setUserToken,
    USER_LOGIN,
    USER_GET_INFO
} from '../actions/users';

const researchApi = (store) => (next) => (action) =>{

    const {users : {
        username,
        password,
        token
    }} = store.getState();const 
    
    config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    switch (action.type) {

        case USER_LOGIN: 

            // console.log('In the Users Middleware : getting the user info');
            axios.post(`http://127.0.0.1:8000/api/login`, {username, password}).then(
            (response) => {
                console.log('In the Users Middleware : API reponse : Passed ', response.data.token);
                
                let base64Url = response.data.token.split('.')[1];
                let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                
                const payload = JSON.parse(jsonPayload);

                localStorage.setItem('userToken', response.data.token);

                store.dispatch(setUserToken(payload, response.data.token));  
            },
            ).catch(
            (error) => {
                // console.log('In the Users Middleware : API reponse : Failed ', error.message);
            },
            );

        break;

        case USER_GET_INFO: 

            // console.log('In the Users Middleware : API Requet by Slug : token => ', token);
            axios.get(
                `http://127.0.0.1:8000/api/users/?username=Leshort`, 
                config
            ).then(
            (response) => {
                console.log('In the Users Middleware : API Requet by Slug : repsone => Passed ', response.data['hydra:member'][0]);
                // store.dispatch(setUserToken(payload));  
            },
            ).catch(
            (error) => {
                // console.log('In the Users Middleware : API Requet by Slug : response =>  Failed ', error);
            },
            );

        break;

        default:
        next(action);   
    }
};
export default researchApi;