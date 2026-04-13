import type { CarouselMovieType } from "../../utils/constant";
import CarouselMiniCard from "./CarouselMiniCard";

//Make a interface
interface HomecarouselListProps {
  next: number[]; // Placeholder for "Up Next" movies
  carouselMovies: CarouselMovieType[];
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
        <CarouselMiniCard
          key={carouselMovies[item]?.id ?? index}
          carouselMovies={carouselMovies}
          item={item}
          index={item}
        />
      ))}
    </div>
  );
}

export default HomecarouselList;
