import React from "react";
import { Img_CDN_url } from "../Utils/Constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img className="" alt="movie_card" src={Img_CDN_url + posterPath}></img>
    </div>
  );
};

export default MovieCard;
