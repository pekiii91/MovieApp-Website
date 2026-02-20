import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosinstance";
import Youtube from "react-youtube";

function Trailers() {
  const [trailer, setTrailers] = useState<{ key: string; name: string }[]>([]);

  const fetchTrailers = async () => {
    // Fetch trailers using the movie ID
    try {
      const response = await baseApi.get(`/movie/238/videos?language=en-US`);
      console.log(response.data.results);
      const trailersObject = response.data.results.filter(
        (data: { type: string }) => data.type === "Trailer",
      );
      setTrailers(trailersObject);
      // Make an API call to fetch trailers for the movie
      // Example endpoint: `/movie/${movieId}/videos?language=en-US`
      // You can use the same baseApi instance to make the API call
    } catch (error) {
      console.error("Fetch Trailers error", error);
    }
    // You can use the same baseApi instance to make the API call
    // Example endpoint: `/movie/${movieId}/videos?language=en-US`
  };

  //call this function fetchTrailers inside useEffect when the component mounts
  useEffect(() => {
    fetchTrailers();
  }, []);

  const options = {
    height: "290",
    width: "380",
  };

  return (
    <div className="">
      {trailer.length > 0 && (
        <div className="mt-16">
          <h1 className="text-2xl !text-yellow-500 font-bold">
            Watch Trailers
          </h1>
          <div className="flex flex-wrap gap-4 mt-4">
            {trailer.map((link, index) => (
              <div key={index} className="flex flex-col gap-2 mt-4">
                <Youtube videoId={link.key} opts={options} />
                <h1 className="text-white !text-xl w-[380px]">
                  {link.name}
                </h1>{" "}
                {/**text below we head title for the video */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Trailers;
