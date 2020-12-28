import _ from 'lodash';

//process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // staging | development | production
//process.env.PORT = process.env.PORT || 8080;
//const env     = (process.env.NODE_ENV)?process.env.NODE_ENV:'development';
//const env       = 'staging';

let env   = '';
if(process.env.NODE_ENV  === 'production')
  env  = 'production';
else if (process.env.NODE_ENV === 'development')
  env  = 'staging';
else
  env  = 'development';
const config = {
  //env: process.env.NODE_ENV || 'development',
  env:env,
  port: process.env.PORT || 8081
};
//console.log(process.env.NODE_ENV, _.extend(config, require('./' + env + '.js').default || {}))
export default _.extend(config, require('./' + env + '.js').default || {});