import { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosinstance";
import type { CarouselMovie } from "../../utils/constant";
import HomeCarousel from "./Homecarousel";
import HomecarouselList from "./HomecarouselList";

function HomeSlider() {
  const [carouselMovies, setCaoruselMovies] = useState<CarouselMovie[]>([]);
  const [next, setNext] = useState<number[]>([1, 2, 3]); // Placeholder for "Up Next" movies

  const fetchUpcoming = async () => {
    try {
      const respose = await baseApi.get(
        "/movie/upcoming?language=en-US&page=1"
      );
      console.log(respose.data.results);
      setCaoruselMovies(respose.data.results); //results je niz filmova
    } catch (err) {
      console.log("fetch upcoming movie error", err);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div className="row">
      <div className="relative col-8">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel">
          {/*Call HomeCarousel */}
          <HomeCarousel carouselMovies={carouselMovies} />
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-4">
        {/* Call HomecarouselList */}
        <HomecarouselList next={next} carouselMovies={carouselMovies} />
      </div>
    </div>
  );
}

export default HomeSlider;
