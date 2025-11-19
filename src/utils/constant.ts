export const imagepath = "https://image.tmdb.org/t/p/original"; // For fetching images from TMDB

export interface CarouselMovie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}

export interface MovieCard {
  id: number;
  title: string;
  poster_path: string;
  relase_date: string;
  vote_average: number;
  original_language: string;
}
