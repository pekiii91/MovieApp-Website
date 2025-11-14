export const imagepath = "https://image.tmdb.org/t/p/original"; // For fetching images from TMDB

export interface CarouselMovie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}
