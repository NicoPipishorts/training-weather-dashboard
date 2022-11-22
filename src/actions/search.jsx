// ACTION TYPE SET_ISLOADING
export const SET_ISLOADING = 'SET_ISLOADING';
// ACTION CREATOR setIsLoading
export const setIsLoading = (value) => ({
    type: SET_ISLOADING,
    value,
  });

// ACTION TYPE SET_ZIPCODE
export const SET_ZIPCODE = 'SET_ZIPCODE';
// ACTION CREATOR setZipcode
export const setZipcode = (value) => ({
    type: SET_ZIPCODE,
    value,
  });

// ACTION TYPE SET_CITYNAME
export const SET_CITYNAME = 'SET_CITYNAME';
// ACTION CREATOR setCityName
export const setCityName = (value) => ({
    type: SET_CITYNAME,
    value,
  });
  
// ACTION TYPE SEARCH_BY_CITYNAME
export const SEARCH_BY_CITYNAME = 'SEARCH_BY_CITYNAME';
// ACTION CREATOR searchByCityName
export const searchByCityName = () => ({
    type: SEARCH_BY_CITYNAME,
  });
  
// ACTION TYPE SET_SEARCH_RESULTS
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
// ACTION CREATOR setSearchResults
export const setSearchResults = (value) => ({
    type: SET_SEARCH_RESULTS,
    value
  });