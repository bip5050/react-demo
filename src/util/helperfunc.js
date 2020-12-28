import API from '../Api/Api';
import * as Sentry from '@sentry/browser';
import {SentryInitialize } from "../Sentry/sentry";
SentryInitialize();

export const convertFloatTwoDecimal = function(num) {
    return parseFloat(num).toFixed(2);
}

export const convertTwoDecimalRound = function(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

export const logErrorToServer = async function(params, error) {
    
    if(params.type === 'catch')
        Sentry.captureException(error);
    console.log(error);
    const invalidUrl    ='/invalid-link';
    let additionalInfo      =   {};
    if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        additionalInfo.data     =   error.response.data;
        additionalInfo.status   =   error.response.status;
        additionalInfo.headers  =   error.response.headers;
        //console.log('Data : ', error.response.data);
        //console.log('Status : ', error.response.status);
        //console.log('Headers : ', error.response.headers);
    } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        //console.log('Request : ', error.request);
        additionalInfo.request     =   error.request;
    } else {
        // Something happened in setting up the request and triggered an Error
        //console.log('Error : ', error.message);
        additionalInfo.message     =   error.message;
    }
    //console.log('Config : ', error.config);
    if(!!error.config)
        additionalInfo.config     =   error.config;
    const res           =   await API.post('/auth/catch-invalid-link', {
        "params"    :   {...params, additionalInfo: JSON.stringify(additionalInfo)}
    })
    if (res.data.error) {
        Sentry.captureException(res.data.error);
        console.log(res.data.error);
    } else {
        setTimeout(()   =>  {
            window.location.href = invalidUrl
        },3000);
    }
}
export const addressFormater = (obj) => {
    try{
      let regex = /(\d+) (.+?), (.+?), (.+?) ([0-9]{5})/;
  
      let address = obj.match(regex);
      //console.log(address);
      if(address[4].indexOf(',') > -1 && address[3].indexOf(' ') > -1){
        let formattedAddress = address[3]+', '+ address[4] + ' '+ address[address.length -1];
        let modAddress = formattedAddress+', USA';
        if(/(\d+) (.+?), (.+?), (.+?) ([0-9]{5})/g.test(modAddress)){
          let _address = modAddress.match(regex);
  
          return {
            validAdrs: true, 
            formattedAddress: formattedAddress,
            address: modAddress,
            number: _address[0],
            street: _address[1],
            city: _address[2],
            country: 'United States',
            state_code: _address[4],
            zipcode: _address[_address.length -1]
          }
        } else {
          return {
            validAdrs: false 
          }
        }
      } else {
        let formattedAddress = address[1] + ' ' + address[2] + ', '+ address[3] + ', ' + address[4] + ' ' + address[address.length -1];
        return {
          validAdrs: true, 
          formattedAddress: formattedAddress,
          address: obj,
          number: address[1],
          street: address[2],
          city: address[3],
          country: 'United States',
          state_code: address[4],
          zipcode: address[address.length -1],
        }
      }
    } catch(e){
      console.log(e);
      return {
        validAdrs: false 
      }
    }
};

export const isValidEmail =(email) =>{
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email));
}