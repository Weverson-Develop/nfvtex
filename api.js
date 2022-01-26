const axios = require('axios');

const api = axios.create({
    baseURL: 'http://177.85.33.115:6017/api',

    auth: {
        username: 'h2opurificado_adm',
        password: 'YF0s+WQ,%pn2'
      },
    
})


 module.exports = api;
