import axios from 'axios';
import { Movie } from 'models/movie.model';
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

//#region Get Movie by Id
export const getMovieById = (movieId: number) => {
  return movie.get(`/movie/${movieId}`, {
    params: {
      language: 'en-US', 
    },
  });
};
//#endregion

//#region Most 10 popular movies
export const getPopularMovies = async (count:number) => {
  try {
    const response = await movie.get<{ results: Movie[] }>('/movie/popular', {
      params: {
        language: 'en-US',
        page: 1, // İlk sayfadaki en popüler filmleri çekiyoruz
      },
    });
    return response.data.results.slice(0, count); // İlk 10 filmi alıyoruz
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
//#endregion

// Yeni: Genre listesi API isteği
export const getGenreList = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`, // API key
    },
  });
  return response.data.genres; // Genre listesini döndürüyoruz
};
