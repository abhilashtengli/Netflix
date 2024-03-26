import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addPopularMovies } from "../Utils/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getpopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getpopularMovies();
  }, []);
};

export default usePopularMovies;
