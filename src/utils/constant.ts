export const imagepath = "https://image.tmdb.org/t/p/original"; // For fetching images from TMDB

export interface CarouselMovieType {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}

export interface MovieCardType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  original_language: string;
}
