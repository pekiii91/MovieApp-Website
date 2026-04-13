import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imagepath, type CarouselMovieType } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

interface CarouselMiniCardProps {
  carouselMovies: CarouselMovieType[];
  item: number;
  index: number;
}

function CarouselMiniCard({
  carouselMovies,
  item,
  index,
}: CarouselMiniCardProps) {
  const [hover, setHovered] = useState<number | null>(null);

  return (
    <Link to={`/details/${carouselMovies[item]?.id}`}>
      <div
        //key={index}
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
            <h2 className="!text-[18px]">{carouselMovies[item]?.vote_count}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarouselMiniCard;
