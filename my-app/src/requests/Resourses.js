const axios = require('axios');

module.exports = {
    users: () =>{
        return axios({
            baseURL: 'http://localhost:3001/',
            timeout: 4000,
            method: 'GET',
            url: 'api/users'
        })
    },
    products: () =>{
        return axios({
            baseURL: 'http://localhost:3001/',
            timeout: 4000,
            method: 'GET',
            url: 'api/products'
        })
    }
}