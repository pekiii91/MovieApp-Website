import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosinstance";
import type { MovieDetailType } from "../../utils/constant";

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
  return <div>{details && <div>{details.id}</div>}</div>;
}

export default MovieDetails;
