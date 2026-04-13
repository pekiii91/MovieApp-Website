import {
  useEffect,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { Link } from "react-router-dom";
import { baseApi } from "../../api/axiosinstance";
import type { CarouselMovieType } from "../../utils/constant";
import CarouselMiniCard from "../Home/CarouselMiniCard";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchedList, setSearchedList] = useState<CarouselMovieType[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //search function which will call the API and fetch the search results based on the search term
  const fetchSearch = async () => {
    try {
      const response = await baseApi.get(
        `/search/movie?query=${search}&include_adult=false&launguage=en-US&page=1`,
      );
      setSearchedList(response.data.results);
    } catch (error) {
      console.error("Fetch Search error", error);
    }
  };

  const toggleShow = (bool: boolean) => {
    setShowSearch(bool);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (event?.target as HTMLInputElement).blur(); // Remove focus from the input field
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      //then only display this
      setShowSearch(true);
    } else {
      //pretraga koju treba da uradim
      setShowSearch(false);
    }

    fetchSearch(); //pozivam funkciju za preuzimanje filmova
    // Log the search term to the console whenever it changes
  }, [search]);

  return (
    <nav className="bg-[#571212] py-1  h-[68px] flex items-center">
      {/* Ovde kreiram nas Loga za moj web site */}
      <div className="flex justify-between items-center w-[80%] mx-auto">
        {/*Zajednicki border padding za gore */}
        <div className="flex space-x-16">
          <Link to="/">
            <div className="flex flex-col text-yellow-500 leading-tight gap-0">
              {/*boja LOGO texta zuta */}
              <h1 className="!text-[18px] leading-none m-0 font-md">
                ALLABOUT
              </h1>
              <h1 className="!text-[24px] leading-none m-0 font-semibold">
                MOVIES
              </h1>
            </div>
          </Link>
          <Link to="/movies">
            {/*Dugme */}
            <button className="text-[18px] text-yellow-500 hover:underline ">
              EXPLORE
            </button>
          </Link>
        </div>

        {/*Search polje */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-white w-[400px] h-8 text-[#c2c2c2] text-large outline-none px-4 
            placeholder:text-[#e67111] rounded-xl"
            onChange={handleChange}
            onClick={() => toggleShow(true)}
            onKeyDown={handleKeyPress}
          />
          {showSearch && search.length > 0 && (
            <div className="absolute z-30 top-0 right-2 !text-yellow-500 text-2xl">
              <IoClose onClick={() => toggleShow(false)} />
            </div>
          )}
          {showSearch && (
            <div className="relative" onClick={() => toggleShow(false)}>
              <div className="absolute z-50 left-0 w-full !bg-zinc-800 rounded-xl">
                <div className="py-3 pl-5">
                  <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto">
                    {searchedList.length > 0 &&
                      searchedList.map((item, index) => (
                        <CarouselMiniCard
                          carouselMovies={searchedList}
                          index={index}
                          item={index}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
