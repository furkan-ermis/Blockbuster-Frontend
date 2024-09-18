import axios from 'axios';
import { accessToken } from './apiKey';

const baseURL = 'https://api.themoviedb.org/3';

const movie = axios.create({
  baseURL: baseURL,
  timeout: 3000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`, 
  },
});

export const getMovieById = (movieId: number) => {
  return movie.get(`/movie/${movieId}`, {
    params: {
      language: 'en-US', 
    },
  });
};

export default movie;
