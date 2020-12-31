const config    =   {
    foodjetsUrl             :   'http://dev.foodjets.com',
    api_end                 :   '/api/',
    GTM_code                :   'GTM-THNGPH6',
    GSTM_code               :   'UA-65554301-3',
    sentry_dsn              :   'https://2b2029ae283e4a6aa9e72ec5979ff585@sentry.io/1546471',
    firebase                :   {
        apiKey              :   "AIzaSyBo2UVHKB2honDutQGN_tyYSsG4lZ5BMi4",
        authDomain          :   "foodjets-dev.firebaseapp.com",
        databaseURL         :   "https://foodjets-dev.firebaseio.com",
        projectId           :   "foodjets-dev",
        storageBucket       :   "foodjets-dev.appspot.com",
        messagingSenderId   :   "687940236129"

    },
    paypal                  :   {
        mode                :   'sandbox'
    }
}
//console.log('Staging : ', config);
export default config;