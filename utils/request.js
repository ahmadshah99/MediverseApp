import axios from 'axios';
import config from './config';

const RequestClient = axios.create(config.api);

// Request interceptor
RequestClient.interceptors.request.use(
    request => request,
    error => {
        throw new Error(error)
    }
);

// Response interceptor
RequestClient.interceptors.response.use(
    response => response,
    error => {
        throw new Error(error)
    }
);

export default RequestClient;
