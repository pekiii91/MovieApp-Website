import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosinstance";
import { imagepath, type MovieDetailType } from "../../utils/constant";

function MovieDetails() {
  const params = useParams();
  console.log(params);
  const [details, setDetails] = useState<MovieDetailType>();

  const fetchDetails = async () => {
    try {
      const response = await baseApi.get(`/movie/${params.id}?language=en-US`);
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.error("Fetch Details error", error);
    }
  };

  useEffect(() => {
    //fetch movie details using params.id
    fetchDetails();
  }, [params]);
  return (
    <div>
      {details && (
        <div className="relative w-full h-fit ">
          <div className="relative">
            <img
              src={imagepath + details?.backdrop_path}
              className="opacity-40 w-full aspect-[7/4] object-cover"
              alt="background"
            />
            <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-[100px]">
            <div className="w-[90%] mx-auto mt-[450px]">
              <div className="flex gap-8">
                <img
                  src={imagepath + details?.poster_path}
                  className="w-[350px] h-fit"
                  alt=""></img>
                <div className="">
                  <h1 className="text-4xl">
                    {details?.original_title}
                    <span className="mx-3 text-4xl">
                      ({details?.release_date?.substring(0, 4)})
                    </span>
                  </h1>
                  <div className="mt-2 text-slate-300">
                    <h2>{details?.tagline}</h2>
                    <h2 className="mt-3">{details?.overview}</h2>
                    <div className="flex flex-col gap-2 mt-4 text-zinc-300">
                      <h2 className="">
                        Genres:
                        {details?.genres?.map((genre) => genre.name).join(", ")}
                      </h2>
                      <h2>
                        Rating: {String(details?.vote_average).substring(0, 3)}
                      </h2>
                      <h2>
                        Original laungage:
                        {details?.original_language.toUpperCase()}
                      </h2>
                      <h2>Release Date: {details?.release_date}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
