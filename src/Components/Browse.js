import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
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
