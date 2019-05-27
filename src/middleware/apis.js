import * as axios from 'axios';

const serverURL = 'https://rickandmortyapi.com/api/character/';

export const loadCharacterList = () => {
  const page = (Math.round(Math.random() * 100) % 25) + 1;
  return axios.get(`${serverURL}?page=${page}`)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
};

export const loadCharacterDetail = id => (
  axios.get(`${serverURL}/${id}`)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    })
);
