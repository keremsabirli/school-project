import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://schoolproject.azurewebsites.net/api/'
});

export default instance;