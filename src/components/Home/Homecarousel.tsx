import { FiThumbsUp } from "react-icons/fi";
import { imagepath } from "../../utils/constant";
import type { CarouselMovie } from "../../utils/constant";

interface HomeCarouselProps {
  carouselMovies: CarouselMovie[];
}

function HomeCarousel({ carouselMovies }: HomeCarouselProps) {
  return (
    <div className="carousel-inner">
      {carouselMovies.map((movie, ind) => (
        <div className={`carousel-item ${ind == 0 ? "active" : ""}`}>
          <div className="relative">
            <img
              src={imagepath + movie?.backdrop_path}
              className="w-full aspect-[7/4]"
              alt=""
            />
            <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
          </div>
          <div className="absolute bottom-0 flex items-end gap-4 px-4">
            <img
              src={imagepath + movie?.poster_path}
              className="w-[160px] aspect-[4/5]"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl text-white">{movie?.title}</h1>
              <h2 className="w-[600px] text-xl line-clamp-3 text-zinc-400">
                {movie?.overview}
              </h2>
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
