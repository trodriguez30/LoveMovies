import axios from 'axios';
import {HOST_URL, API_KEY} from '@env';

export const sendMoviesRequest = async () => {
  const res = await axios({
    method: 'get',
    url: `${HOST_URL}/?apikey=${API_KEY}&s=love&y=2020&type=movie`,
  });
  return res;
};
