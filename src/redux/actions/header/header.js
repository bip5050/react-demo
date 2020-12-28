import TYPE from '../../types/header';
import API from '../../../Api/Api';
import { error as notifyError } from '../../../util/notify';
import config from '../../../config';
import {SentryInitialize } from "../../../Sentry/sentry"
SentryInitialize();

export function getHeaderData() {
    return async (dispatch)             =>  {
        try {
            dispatch({ type: TYPE.REQ_DATA });
            const res                   =   await API.get('get-start/get-config-data', {
                "jsonrpc":"2","platform":"web","params":{}
            })
            if (res.data.error) {
               // notifyError(res.data.error.message);
                console.log(res.data.error);
                dispatch({ type: TYPE.FAIL_DATA });
            }
            else {
                localStorage.setItem("globalSetting", JSON.stringify(res.data.result));
                dispatch({ type: TYPE.RES_DATA, data:  res.data.result});
            }
            
        } catch(e) {
            Sentry.captureException(e);
            console.log(e);
            notifyError('Invalid request (401)');
            dispatch({ type: TYPE.FAIL_DATA });
        }
    }
}


export function getAdressList() {
    return async (dispatch)             =>  {
        try {
            dispatch({ type: TYPE.REQ_DATA });
            const res                   =   await API.get('delivery-address/list')
            if (res.data.error) {
               // notifyError(res.data.error.message);
                console.log(res.data.error);
                dispatch({ type: TYPE.FAIL_ADDRESS_DATA });
            }
            else {
                dispatch({ type: TYPE.RES_ADDRESS_DATA, data:  res.data.result});
            }
            
        } catch(e) {
            Sentry.captureException(e);
            console.log(e);
            notifyError('Invalid request (401)');
            dispatch({ type: TYPE.FAIL_ADDRESS_DATA });
        }
    }
}


