import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-elashopping.dmxapp.com.br',
    headers: { 'content-type': 'application/json'}
})

