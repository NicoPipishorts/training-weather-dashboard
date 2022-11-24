// ACTION TYPE SET_ISLOADING
export const SET_ISLOADING = 'SET_ISLOADING';
// ACTION CREATOR setIsLoading
export const setIsLoading = (value) => ({
    type: SET_ISLOADING,
    value,
});

// ACTION TYPE USER_LOGIN
export const USER_LOGIN = 'USER_LOGIN';
// ACTION CREATOR userLogin
export const userLogin = (value) => ({
    type: USER_LOGIN,
    value,
});

// ACTION TYPE USER_LOGIN
export const SET_USER_INFO = 'SET_USER_INFO';
// ACTION CREATOR setUserInfo
export const setUserInfo = (data) => ({
    type: SET_USER_INFO,
    data,
});