import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/* Maincontainer 
          - videoBackground
          - VideoTitle
        SecondaryContainer
          - Movielist * 
          - cards * n  */}
      </div>
    </div>
  );
};

export default Browse;
