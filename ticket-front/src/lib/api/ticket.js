import client from './client';

export const movieId = ({ movieId }) =>
  client.get(`/api/management/movieId/${movieId}`,{movieId});