import React from "react";
import { imagepath, type MovieCard } from "../../utils/constant";

interface MovieListProps {
  movies: MovieCard[]; //niz movieCard objekata
}
function MovieList({ movies }: MovieListProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold !text-yellow-500">
        Top Rated Movies On This Site
      </h3>

      <div className="row row-cols-6 g-2 mt-2">
        {movies.length > 0 &&
          movies.map((data, index) => (
            <div key={index} className="">
              <div className="relative">
                <img src={imagepath + data.poster_path} alt="" />
                <div className="absolute -bottom- w-full h-28 _carouselGradient"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
