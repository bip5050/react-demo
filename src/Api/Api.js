import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import config from '../config';
import {getCookie, setLifetimeCookie} from '../util/cookies';
import _ from 'lodash';


const API_URL           =   "http://localhost:8000";

const API               =   axios.create({
    baseURL: API_URL
})
API.defaults.headers.common['Content-Type'] = 'application/json';
let auth              =   '';
if(typeof window !== 'undefined'){
  let userData          = JSON.parse(localStorage.getItem('userData') || '{}');
  if(!_.isEmpty(userData)){
    auth              =    'Token ' + userData.key;
  } else{
    auth   =  ""
  }
 
  console.log(auth);
  API.defaults.headers.common['Authorization'] = auth;
}

export default API;