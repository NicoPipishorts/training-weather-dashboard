// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
} from '../actions/main';

const researchApi = (store) => (next) => (action) =>{

  switch (action.type) {
    default:
    next(action);   
  }
};
export default researchApi;