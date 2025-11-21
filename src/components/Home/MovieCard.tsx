import React, { useEffect, useState } from "react";
import { imagepath, type MovieCardType } from "../../utils/constant";
//creat interface for movieData prop
export interface MovieCardProps {
  movieData: MovieCardType;
}

function MovieCard({ movieData }: MovieCardProps) {
  const [hover, setHovered] = useState<number | null>(null);

  return (
    //Hover effect for movie card
    <div
      className="col"
      onMouseEnter={() => setHovered(movieData.id)}
      onMouseLeave={() => setHovered(null)}>
      <div
        className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden 
            ${movieData.id === hover ? "scale-[102%]" : ""} duration-200 `}>
        <div className="relative overflow-hidden">
          <img src={imagepath + movieData.poster_path} alt="" />
          <div className="absolute -bottom- w-full h-28 _carouselGradient"></div>
        </div>

        {/*Nastavljamo rad sa listom filmova, title, rating,
                  language, release date */}
        <div className="bg-[#222] p-2">
          <h1
            className={`!text-[17px] font-semibold line-clamp-1 ${
              movieData.id === hover ? "underline" : ""
            } `}>
            {movieData.title}
          </h1>

          {/*three thing inside one div */}
          <div className="!text-[15px] !text-zinc-300 mt-2 m-0 leading-tight">
            <h6 className=" ">
              Rating: {String(movieData.vote_average).substring(0, 3)} ⭐
            </h6>
            <h6>Language: {movieData.original_language}</h6>
            <h6>Release date: {movieData.release_date}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
