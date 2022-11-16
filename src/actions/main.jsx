// ACTION TYPE SET_ZIPCODE
export const SET_ZIPCODE = 'SET_ZIPCODE';
// ACTION CREATOR setZipcode
export const setZipcode = (zipcode) => ({
    type: SET_ZIPCODE,
    zipcode,
  });