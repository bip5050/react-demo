import TYPE from '../types/auth';
let userData    = {};
//if(typeof window !== 'undefined'){
  userData          = (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('userData') || '{}') : {};
//}
console.log(userData);
let initialState    =   {
  userData: {...userData}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE.SIGNUP:
      return {...state, isProcessing: true, isSuccess: false};
    case TYPE.SIGNUP_SUCCESS:
      return {...state, isProcessing:false, isSuccess: true, userData: action.data};
    case TYPE.SIGNUP_ERROR:
      return {...state, isProcessing: false, isSuccess: false};
    case TYPE.SIGNIN:
      return {...state, isProcessing: true, isSuccess: false};
    case TYPE.SIGNIN_SUCCESS:
      return {...state, isProcessing:false, isSuccess: true, userData: action.data};
    case TYPE.SIGNIN_ERROR:
      return {...state, isProcessing: false, isSuccess: false};
    case TYPE.ADD_DEL_ADDR:
      return {...state, isAddressError: false};
    case TYPE.ADD_DEL_ADDR_SUCCESS:
      return {...state, isAddressError: false};
    case TYPE.ADD_DEL_ADDR_ERROR:
    return {...state, isAddressError: true}; 
   
    default: return {...state, ...initialState};
  }
}