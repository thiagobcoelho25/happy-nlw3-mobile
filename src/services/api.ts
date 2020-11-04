import axios from 'axios';

const api = axios.create({
    baseURL: 'http//192.168.1.15:3333', //IP do expo
});


export default api;