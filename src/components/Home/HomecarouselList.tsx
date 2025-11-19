import type { CarouselMovie } from "../../utils/constant";
import { imagepath } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

//Make a interface
interface HomecarouselListProps {
  next: number[]; // Placeholder for "Up Next" movies
  carouselMovies: CarouselMovie[];
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {
  return (
    <div>
      <h6 className="text-lg font-bold !text-yellow-500">Up Next</h6>
      {/*The Up Next movie will show the next 
        three movies for the Carousal movies.This up next
          will make the div for each up next movie.
          create map from nest*/}
      {next.map((item, index) => (
        <div key={index} className="flex gap-2">
          <img
            src={imagepath + carouselMovies[item]?.poster_path}
            className="w-[100px] h-[150px] rounded-md"
            alt=""
          />

          {/* title and vote_count, poravnato*/}
          <div className="flex flex-col justify-between py-0">
            <div className="leading-tight w-[200px]">
              <h3 className="text-sm font-semibold text-white line-clamp-1">
                {carouselMovies[item]?.title}
              </h3>
              <p className="text-sm text-zinc-300 line-clamp-2">
                {carouselMovies[item]?.overview}
              </p>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-xl">
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
