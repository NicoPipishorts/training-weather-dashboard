// ACTION TYPE SET_ISLOADING
export const SET_ISLOADING = 'SET_ISLOADING';
// ACTION CREATOR setIsLoading
export const setIsLoading = (value) => ({
    type: SET_ISLOADING,
    value,
});

// ACTION TYPE USER_GET_INFO
export const USER_GET_INFO = 'USER_GET_INFO';
// ACTION CREATOR userGetInfo
export const userGetInfo = (value) => ({
    type: USER_GET_INFO,
    value,
});

// ACTION TYPE USER_LOGIN
export const USER_LOGIN = 'USER_LOGIN';
// ACTION CREATOR userLogin
export const userLogin = (value) => ({
    type: USER_LOGIN,
    value,
});

// ACTION TYPE SET_USER_INFO
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
// ACTION CREATOR setUserToken
export const setUserToken = (data, token) => ({
    type: SET_USER_TOKEN,
    data,
    token
});

// ACTION TYPE SET_LOGIN_INFO
export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
// ACTION CREATOR setLoginInfo
export const setLoginInfo = (name, value) => ({
    type: SET_LOGIN_INFO,
    name,
    value,
});