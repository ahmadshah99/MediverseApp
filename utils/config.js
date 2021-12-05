import axios from 'axios';
import { storeData, getData, removeItemValue } from './auth.js';

export default {
    api: {
        baseURL: 'http://localhost:5001',
        header : {
            'Authorization' : `bearer ${getData('jwt')}`
        }
    },
};
