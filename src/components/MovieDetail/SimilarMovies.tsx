import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosinstance";
import type { MovieCardType } from "../../utils/constant";
import MovieList from "../Home/MovieList";
import LoadMoreBtn from "../Button/LoadMoreBtn";

function SimilarMovies({ movieId }: { movieId: string }) {
  const [movie, setMovie] = useState<MovieCardType[]>([]);
  const [page, setPage] = useState(0);

  const fetchSimilarMovies = async (page: number) => {
    try {
      // Make an API call to fetch similar movies for the given movie ID
      // Example endpoint: `/movie/${movieId}/similar?language=en-US`
      // You can use the same baseApi instance to make the API call
      const response = await baseApi.get(
        `/movie/${movieId}/similar?language=en-US&page=${page}`,
      );
      setMovie((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error("Fetch Similar Movies error", error);
    }
    // You can use the same baseApi instance to make the API call
    // Example endpoint: `/movie/${movieId}/similar?language=en-US`
  };

  useEffect(() => {
    fetchSimilarMovies(1);
    setPage((prev) => prev + 1);
  }, [movieId]);

  const handleLoadMore = () => {
    // Implement the logic to load more similar movies when the "Load More" button is clicked
    // You can make another API call to fetch the next page of similar movies
    // Example endpoint: `/movie/${movieId}/similar?language=en-US&page=2`
    fetchSimilarMovies(page + 1);
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      {/*here call the movie list */}
      <MovieList movies={movie} title="Similar Movies" />
      <div onClick={handleLoadMore}>
        <LoadMoreBtn />
      </div>
    </div>
  );
}

export default SimilarMovies;
