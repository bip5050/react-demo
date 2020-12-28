import TYPE from '../types/home';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.REQ_DATA:
      return {...state, isLoading: true, Homedata: {} };
    case TYPE.RES_DATA:
      return {...state, isLoading:false, Homedata: action.data};
    case TYPE.FAIL_DATA:
      return {...state, isLoading: false, Homedata: {}};
   
    default: return state;
  }
}