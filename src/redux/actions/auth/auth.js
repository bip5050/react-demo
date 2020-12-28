import TYPE from '../../types/auth';
import API from '../../../Api/Api';
import { error as notifyError } from '../../../util/notify';
import config from '../../../config';
import {SentryInitialize } from "../../../Sentry/sentry"
import { isEmpty } from 'lodash';
SentryInitialize();

export function do_login(data) {
    return async (dispatch)             =>  {
        let  sendData  =  {username:data.email, password:data.password}
        try {
            dispatch({ type: TYPE.SIGNIN });
            const res                   =   await API.post('rest-auth/login/', sendData)
            if (res.data.error) {
                notifyError(res.data.error);
                console.log(res.data.error);
                dispatch({ type: TYPE.SIGNIN_ERROR });
            }
            else {
                let userData    =   res.data || {};
                localStorage.setItem('userData', JSON.stringify(userData));
                dispatch({ type: TYPE.SIGNIN_SUCCESS, data:  res.data});
            }        
        } catch(e) {
            console.log(e);
            notifyError('Invalid request (401)');
            dispatch({ type: TYPE.SIGNIN_ERROR });
        }
    }
}

