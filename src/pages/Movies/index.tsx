import { useState, useEffect } from "react";
import { category, type MovieCardType } from "../../utils/constant";
import { baseApi } from "../../api/axiosinstance";
import MovieList from "../../components/Home/MovieList";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";

interface pageType {
  [key: string]: number;
}

function Movies() {
  const [filter, setFilter] = useState(category[0].name);
  const [nowPlaying, setNowPlaying] = useState<MovieCardType[]>([]);
  const [popular, setPopular] = useState<MovieCardType[]>([]);
  const [topRated, setRated] = useState<MovieCardType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);
  const [pages, setPages] = useState<pageType>({
    now_playing: 1,
    popular: 1,
    top_rated: 1,
    upcoming: 1,
  });

  const toggleSelection = (item: string) => {
    setFilter(item);
  };

  const fetchMovie = async (path: string, page: number) => {
    try {
      console.log(path);
      //ovaj API je samo za predstojece filmove
      const response = await baseApi.get(
        `/movie/${path}?language=en-US&page=${page}`,
      );
      console.log(response.data.results);
      switch (path) {
        case "now_playing":
          setNowPlaying((prev) => [...prev, ...response.data.results]);
          break;
        case "popular":
          setPopular((prev) => [...prev, ...response.data.results]);
          break;
        case "top_rated":
          setRated((prev) => [...prev, ...response.data.results]);
          break;
        case "upcoming":
          setUpcoming((prev) => [...prev, ...response.data.results]);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log("Fetch error in Movie page", error);
    }
  };

  const handleLoadMoreBtn = () => {
    const currentCategory = category.find((item) => item.name === filter);
    if (currentCategory) {
      setPages((prev) => ({
        ...prev,
        [currentCategory.path]: prev[currentCategory.path] + 1,
      }));
      fetchMovie(currentCategory.path, pages[currentCategory.path] + 1);
    }
  };

  //napravicemo useEffect, funkcija za preuzimanje filmova na osnovu filtera
  useEffect(() => {
    //dakele, ovde cemo preuzeti item.path na osnovu filtera
    const current = category.filter((item) => item.name === filter);
    console.log(current);
    fetchMovie(current[0].path, 1);
  }, [filter]);

  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="!text-[3xl] font-bold !text-yellow-500">Explore Movies</h1>
      <div className="flex mt-2">
        {/*We are goind to display the movie list */}
        {category.map((item, ind) => (
          <div key={ind} className="">
            <button
              onClick={() => toggleSelection(item.name)}
              className="text-base font-semibold w-44 h-10 hover:bg-[#121212]">
              {item.name}
            </button>
            <div
              className={`h-0.5 !bg-blue-400 mx-auto ${
                filter == item.name ? "w-full" : "w-0"
              } duration-200`}></div>
          </div>
        ))}
      </div>
      {/**Call Movie list and movie card  */}
      {filter == "Now Playing" && <MovieList movies={nowPlaying} />}
      {filter == "Popular" && <MovieList movies={popular} />}
      {filter == "Top Rated" && <MovieList movies={topRated} />}
      {filter == "Upcoming" && <MovieList movies={upcoming} />}

      <div onClick={handleLoadMoreBtn}>
        <LoadMoreBtn />
      </div>
    </div>
  );
}

export default Movies;
