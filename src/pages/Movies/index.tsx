import { useState, useEffect } from "react";
import { category, type CategoryType } from "../../utils/constant";
import { baseApi } from "../../api/axiosinstance";

function Movies() {
  const [filter, setFilter] = useState(category[0].name);
  const [nowPlaying, setNowPlaying] = useState<CategoryType[]>([]);
  const [popular, setPopular] = useState<CategoryType[]>([]);
  const [topRated, setRated] = useState<CategoryType[]>([]);
  const [upcoming, setUpcoming] = useState<CategoryType[]>([]);

  const toggleSelection = (item: string) => {
    setFilter(item);
  };

  const fetchMovie = async (path: string) => {
    try {
      //ovaj API je samo za predstojece filmove
      const response = await baseApi.get(
        `/movie/${path}?language=en-US&page=1`
      );
      console.log(response.data.results);
      switch (path) {
        case "now_playing":
          setNowPlaying(response.data.results);
          break;
        case "popular":
          setPopular(response.data.results);
          break;
        case "top_rated":
          setRated(response.data.results);
          break;
        case "upcoming":
          setUpcoming(response.data.results);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log("Fetch error in Movie page", error);
    }
  };

  //napravicemo useEffect, funkcija za preuzimanje filmova na osnovu filtera
  useEffect(() => {
    //dakele, ovde cemo preuzeti item.path na osnovu filtera
    const current = category.filter((item) => item.name === filter);
    console.log(current);
    fetchMovie(current[0].path);
  }, [filter]);

  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="!text-[3xl] font-bold !text-yellow-500">Explore Movies</h1>
      <div className="flex mt-2">
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
    </div>
  );
}

export default Movies;
