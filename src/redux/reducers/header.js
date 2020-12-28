import TYPE from '../types/header';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.REQ_DATA:
      return {...state, isLoading: true, Headerdata: {} };
    case TYPE.RES_DATA:
      return {...state, isLoading:false, Headerdata: action.data};
    case TYPE.FAIL_DATA:
      return {...state, isLoading: false, Headerdata: {}};

      case TYPE.REQ_ADDRESS_DATA:
        return {...state, isLoading: true, Adressdata: {} };
        case TYPE.RES_ADDRESS_DATA:
          return {...state, isLoading:false, Adressdata: action.data};

      case TYPE.FAIL_ADDRESS_DATA:
        return {...state, isLoading: false, Adressdata: {}};
   
    default: return state;
  }
}