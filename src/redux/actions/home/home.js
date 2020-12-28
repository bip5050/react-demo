import TYPE from '../../types/accountsettings';
import API from '../../../Api/Api';
import { error as notifyError } from '../../../util/notify';
import config from '../../../config';
import {SentryInitialize } from "../../../Sentry/sentry"
SentryInitialize();

export function getHomeData() {
    // return async (dispatch)             =>  {
    //     try {
    //         dispatch({ type: TYPE.REQ_DATA });
    //         const res                   =   await API.get('cms/faq')
    //         if (res.data.error) {
    //            // notifyError(res.data.error.message);
    //             console.log(res.data.error);
    //             dispatch({ type: TYPE.FAIL_DATA });
    //         }
    //         else {
    //             dispatch({ type: TYPE.RES_DATA, data:  res.data.result});
    //         }
            
    //     } catch(e) {
    //         Sentry.captureException(e);
    //         console.log(e);
    //         notifyError('Invalid request (401)');
    //         dispatch({ type: TYPE.FAIL_DATA });
    //     }
    // }
}

