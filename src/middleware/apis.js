import * as axios from 'axios';

import { SERVER_URL } from '../constants';

export const loadCharacterList = () => {
  const page = (Math.round(Math.random() * 100) % 25) + 1;
  return axios.get(`${SERVER_URL}/?page=${page}`)
    .then(response => response.data);
};

export const loadCharacterDetail = id => (
  axios.get(`${SERVER_URL}/${id}`)
    .then(response => response.data)
);
