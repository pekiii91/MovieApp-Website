import { useState, useEffect } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosinstance";
import type { MovieCardType } from "../../utils/constant";
import MovieList from "../../components/Home/MovieList";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";

function Home() {
  const [movies, setmovies] = useState<MovieCardType[]>([]);
  const [page, setpage] = useState<number>(1); //current page state

  //here create function to fetch the top rated movies
  //Here you can see in the Fetch Movies function where we are calling the API.
  const fetchMovies = async (page: number) => {
    try {
      //fetch top rated movies from the api
      const response = await baseApi.get(
        `/movie/top_rated?language=en-US&page=${page}`
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
    fetchMovies(page);
  }, [page]);

  //create function to handlePageUpdate
  const handlePageUpdate = async () => {
    setpage((prev) => prev + 1);
    //fetchMovies(page + 1); //fetch movies for the next page
  };

  return (
    <div className="w-[90%] mx-auto mb-50">
      {/*Margina za Home page sa leve strane website */}
      <HomeSlider />
      {/*her the call MovieList */}
      <MovieList movies={movies} title="Top Rated Movie" />
      <div onClick={() => handlePageUpdate()}>
        <LoadMoreBtn />
      </div>
    </div>
  );
}

export default Home;
