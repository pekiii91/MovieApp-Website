import { useState, useEffect } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosinstance";
import type { MovieCardType } from "../../utils/constant";
import MovieList from "../../components/Home/MovieList";

function Home() {
  const [movies, setmovies] = useState<MovieCardType[]>([]);

  //here create function to fetch the top rated movies
  const fetchMovies = async () => {
    try {
      //fetch top rated movies from the api
      const response = await baseApi.get(
        "/movie/top_rated?language=en-US&page=1"
      );
      // console.log("Top rated movies fetched:", response.data.results);
      setmovies(response.data.results); //set the movies state with the fetched data, postavljeni filmovi
    } catch (error) {
      console.log("Fetch error fetching top rated movies", error);
    }
  };

  //sada poziva ovu funkciju fetchMovies kada se komponenta mountuje
  useEffect(() => {
    // call this function
    fetchMovies();
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      {/*Margina za Home page sa leve strane website */}
      <HomeSlider />
      {/*her the call MovieList */}
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
