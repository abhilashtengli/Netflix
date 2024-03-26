import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
