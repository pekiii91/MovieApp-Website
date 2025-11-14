import React from "react";
import type { CarouselMovie } from "../../utils/constant";
import { imagepath } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

//Make a interface
interface HomecarouselListProps {
  next: number[]; // Placeholder for "Up Next" movies
  carouselMovies: CarouselMovie[];
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {
  //pass log console
  console.log("Up Next movies:", next);

  return (
    <div>
      <h1 className="font-bold text-xl #9ef202">Up Next</h1>
      {/*The Up Next movie will show the next 
      three movies for the Carousal movies.This up next
        will make the div for each up next movie.
        create map from nest*/}
      {next.map((item, index) => (
        <div className="flex gap-2">
          <img
            src={imagepath + carouselMovies[item]?.poster_path}
            className="w-[100px]"
            alt=""
          />

          {/* title and vote_count, poravnato*/}
          <div className="flex flex-col justify-between py-2">
            <div className="leading-5">
              <h1>{carouselMovies[item]?.title}</h1>
              <h1 className="text-md text-zinc-300 line-clamp-1">
                {carouselMovies[item]?.overview}
              </h1>
            </div>
            <div className="flex gap-1 text-center">
              <FiThumbsUp />
              <h2>{carouselMovies[item]?.vote_count}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomecarouselList;
