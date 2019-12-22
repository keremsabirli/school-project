import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44356/api/'
});

export default instance;