import prefixer from './prefixer';

const prefix = '@@headerTypes';

const types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null,
  REQ_ADDRESS_DATA: null,
  RES_ADDRESS_DATA: null,
  FAIL_ADDRESS_DATA: null,


};

export default prefixer(types, prefix);