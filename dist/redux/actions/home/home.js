"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeData = getHomeData;

var _accountsettings = _interopRequireDefault(require("../../types/accountsettings"));

var _Api = _interopRequireDefault(require("../../../Api/Api"));

var _notify = require("../../../util/notify");

var _config = _interopRequireDefault(require("../../../config"));

var _sentry = require("../../../Sentry/sentry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sentry.SentryInitialize)();

function getHomeData() {// return async (dispatch)             =>  {
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