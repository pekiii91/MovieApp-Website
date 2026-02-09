import React from "react";
import { imagepath, type MovieCardType } from "../../utils/constant";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MovieCardType[]; //niz movieCard objekata
  title?: string;
}
function MovieList({ movies, title }: MovieListProps) {
  return (
    <div className="mt-10">
      {title && <h3 className="text-lg font-bold !text-yellow-500">{title}</h3>}

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
