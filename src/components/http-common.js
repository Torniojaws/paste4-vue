import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://juhau.mbnet.fi/paste5/api/',
  headers: {
    Authorization: 'Bearer { token }'
  }
});
