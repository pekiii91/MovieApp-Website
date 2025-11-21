import React from "react";
import { imagepath, type MovieCardType } from "../../utils/constant";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MovieCardType[]; //niz movieCard objekata
}
function MovieList({ movies }: MovieListProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold !text-yellow-500">
        Top Rated Movies On This Site
      </h3>
      {/*Card for the movies list */}
      <div className="row row-cols-6 g-1 mt-2">
        {movies.length > 0 &&
          movies.map((data, index) => (
            <MovieCard key={index} movieData={data} />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
