import { FiThumbsUp } from "react-icons/fi";
import { imagepath } from "../../utils/constant";
import type { CarouselMovieType } from "../../utils/constant";

interface HomeCarouselProps {
  carouselMovies: CarouselMovieType[];
}

function HomeCarousel({ carouselMovies }: HomeCarouselProps) {
  return (
    <div className="carousel-inner">
      {carouselMovies.map((movie, ind) => (
        <div key={ind} className={`carousel-item ${ind == 0 ? "active" : ""}`}>
          <div className="relative">
            <img
              src={imagepath + movie?.backdrop_path}
              className="w-full aspect-[7/4]"
              alt=""
            />
            <div
              className={`absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2]`}></div>
            <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
          </div>
          <div className="absolute bottom-0 flex items-end gap-4 px-4">
            <img
              src={imagepath + movie?.poster_path}
              className="w-[160px] aspect-[4/5]"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px]">{movie?.title}</h2>
              <h4 className="w-[600px] text-md line-clamp-3 !text-zinc-300">
                {movie?.overview}
              </h4>
              <div className="flex items-center gap-2 text-zinc-400 text-xl">
                <FiThumbsUp />
                <h3 className="text-lg">{movie?.vote_count}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCarousel;
