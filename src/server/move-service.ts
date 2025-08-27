/** biome-ignore-all lint/suspicious/useAwait: <explanation> */
import type { Movie, Movies } from '@/types/movie';
import { ApiRequest, type RequestOptions } from './api-request';

export const GetMoveById = async (id: string): Promise<Movie> => {
  return ApiRequest(`/movies/${encodeURIComponent(id)}`);
};

export const GetFeaturedMovie = async (id: string): Promise<Movie> => {
  return ApiRequest(`featured/${id}`);
};

export const GetMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movies> => {
  return ApiRequest(
    '/movies',
    {
      genre_like: encodeURIComponent(genre),
    },
    options
  );
};

export const SearchMovies = async (
  title = '',
  genre = '',
  options?: RequestOptions
): Promise<Movies> => {
  return ApiRequest(
    '/movies',
    {
      title_like: encodeURIComponent(title),
      genre_like: encodeURIComponent(genre),
    },
    options
  );
};
