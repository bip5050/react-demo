import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import App from '../containers/App';
import {getCookie} from '../util/cookies';

//import About from '../containers/About';
import NotFound from '../containers/NotFound';

import './global.css'
//import { getAboutData } from '../redux/actions/about';
import Notifications, {notify} from 'react-notify-toast';



import Login from '../containers/Login';


import _ from 'lodash';
import {SentryInitialize } from "../Sentry/sentry"
SentryInitialize();
// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the asnyc function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [{
    path: '/',
    exact: true,
    component: Login
  }, {
    component: NotFound
  }
];

export const publicroutes = [
   {
  path: '/login',
  component: Login    
}

];

export const privateRoutes = [

];

export const protectedRoutes = [];

export default function Router() {
  let  hideHead = true;
  let url                   =   '';
  let userData    = {};
  let currentAddress    = {};
  if(typeof window !== 'undefined'){
    userData          = JSON.parse(localStorage.getItem('userData') || '{}');
  
  }
  if ((typeof window !== 'undefined')) {      
    url                     =   window.location.pathname.split('/');
    if (url[1] == '' || url[1] == 'login'|| url[1] == 'signup') {
      hideHead         =   false;
    }
  }
  return (
    <div>
    {
      (typeof window !== 'undefined') ? 
      <div>      
           
        <Notifications />
     
        <Switch>
          {protectedRoutes.map((route) => (
            <ProtectedRoute key={route.path} path={route.path} route={route} component={route.component} userData={userData} prevPath={url[1]}/>
          ))}
          {privateRoutes.map((route) => (
            <PrivateRoute key={route.path} path={route.path} route={route} component={route.component} userData={userData}  prevPath={url[1]}/>
          ))}
          {publicroutes.map(route =>(
              <PublicRoute key={route.path} path={route.path} route={route} component={route.component} prevPath={url[1]}/>
            )
          )}
          {routes.map(route =>(
              <Route key={`index ${route.path}`} {...route}/>
            )
          )}
        </Switch>
       
        </div> : null
      }
      </div>   
  );
}

function PublicRoute({ component: Component, ...rest }) {
  let obj = { component: Component, ...rest };
  let prevPath  = rest.prevPath || '';
    return (
    <Route key={`index ${obj.path}`} path={obj.path} 
        /* component={obj.component} */
        render={(props) => (
          <obj.component {...props} prevPath={prevPath} />
        )}
    />
    )
}

function PrivateRoute({ component: Component, ...rest }) {
  let obj = { component: Component, ...rest };
  //console.log('Local Storage : ', typeof window !== 'undefined' && !_.isEmpty(localStorage.getItem('peopleData')));
  let currentAddress  = rest.currentAddress || {};
  let userData  = rest.userData || {};
  let prevPath  = rest.prevPath || '';
  if(typeof window !== 'undefined' && !_.isEmpty(userData)) {
    console.log('Route PRivate : ', rest.route);
    return (
    <Route key={`index ${obj.path}`} path={obj.path} 
        /* component={obj.component} */
        render={(props) => (
          <obj.component {...props} userData={userData} prevPath={prevPath} />
        )}
    />
    )
  } else {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    )
  }
}

function ProtectedRoute({ component: Component, ...rest }) {
  let obj = { component: Component, ...rest };
  let userData  = rest.userData || {};
  let prevPath  = rest.prevPath || '';
  if(typeof window !== 'undefined' && !_.isEmpty(userData)) {
    return (
    <Route key={`index ${obj.path}`} path={obj.path}
      /* component={obj.component} */
      render={(props) => (
        <obj.component {...props} userData={userData} prevPath={prevPath}/>
      )}
    />
    )
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
    )
  }
}