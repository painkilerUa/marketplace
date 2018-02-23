import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {'Authorization': `Bearer ${localStorage.ACCESS_TOKEN_KEY}`}
});

export default instance;