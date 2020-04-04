import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MovieDetailTemplate from "../components/movie/MovieDetailTemplate";
import MovieDetailContainer from "../containers/movie/MovieDetailContainer";

const MovieDetailPage = () => {
  return (
    <>
      <HeaderContainer />
      <MovieDetailTemplate>
          <MovieDetailContainer/>
      </MovieDetailTemplate>
    </>
  );
};

export default MovieDetailPage;
