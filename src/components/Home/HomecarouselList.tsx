import React, { useState } from "react";
import type { CarouselMovieType } from "../../utils/constant";
import { imagepath } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

//Make a interface
interface HomecarouselListProps {
  next: number[]; // Placeholder for "Up Next" movies
  carouselMovies: CarouselMovieType[];
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {
  const [hover, setHovered] = useState<number | null>(null);
  return (
    <div>
      <h6 className="text-lg font-bold !text-yellow-500">Up Next</h6>
      {/*The Up Next movie will show the next 
        three movies for the Carousal movies.This up next
          will make the div for each up next movie.
          create map from nest*/}
      {next.map((item, index) => (
        <div
          key={index}
          className="flex gap-2"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}>
          <img
            src={imagepath + carouselMovies[item]?.poster_path}
            className="w-[100px] h-[150px] rounded-md"
            alt=""
          />
          {/* title and vote_count, poravnato*/}
          <div className="flex flex-col justify-between py-1">
            <div className="leading-tight w-[200px]">
              <h3
                className={`!text-[18px] font-semibold text-white line-clamp-1 ${
                  hover === index ? "underline" : ""
                }`}>
                {carouselMovies[item]?.title}
              </h3>
              <p className="text-sm text-zinc-300 line-clamp-3">
                {carouselMovies[item]?.overview}
              </p>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 !text-[18px]">
              <FiThumbsUp />
              <h2 className="!text-[18px]">
                {carouselMovies[item]?.vote_count}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomecarouselList;
