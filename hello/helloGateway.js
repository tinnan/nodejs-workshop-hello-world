const axios = require('axios');

function getData() {
    return axios.get('http://104.236.50.54:8080/messages');
}
