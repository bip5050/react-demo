import { combineReducers } from 'redux';


import header from './header';
import signup from './auth';
import Home from './home';



const reduxState = combineReducers({
    Home,
    header,
    signup,

});

export default reduxState;