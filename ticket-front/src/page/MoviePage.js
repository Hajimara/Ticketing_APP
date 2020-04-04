import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import MovieListTemplate from "../components/movie/MovieListTemplate";
import MovieListContainer from "../containers/movie/MovieListContainer";

const MoviePage = () => {
  return (
    <>
      <HeaderContainer />
      <MovieListTemplate>
        <MovieListContainer></MovieListContainer>
      </MovieListTemplate>
    </>
  );
};
export default MoviePage;
