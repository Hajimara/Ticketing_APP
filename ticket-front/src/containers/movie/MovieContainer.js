import React, { useState, useEffect } from "react";
import MovieSimpleForm from "../../components/movie/MovieSimpleForm";
import { useDispatch, useSelector } from "react-redux";
import { movieData, movieInitialize } from "../../modules/movie";

const MOVIE_DATA_LIMITE = 4;

const MovieContainer = () => {
  const dispatch = useDispatch();
  const [movieError, setMovieError] = useState("");
  const { movieAllData, movieAllError, loading } = useSelector(
    ({ movie, loading }) => ({
      movieAllData: movie.movieAllData,
      movieAllError: movie.movieDataError,
      loading: loading["movie/MOVIE_DATA"]
    })
  );

  useEffect(() => {
    dispatch(movieData());
    return () => {
      dispatch(movieInitialize());
    };
  }, [dispatch]);

  var arrayJSX = [];
  const movieFormLoop = () => {
    if (movieAllData !== null && !loading) {
      var arrayData = movieAllData.results.slice(0, MOVIE_DATA_LIMITE);
      console.log(arrayData);

      arrayData.forEach((data, index) => {
        console.log(`${index} - ${data}`);
        console.log(`${data.title} - ${data.id}`);

        arrayJSX.push(
          <MovieSimpleForm
            index={index + 1}
            title={data.title}
            id={data.id}
            posterPath={data.poster_path}
            rating={data.vote_average}
            error={movieAllError}
            loading={loading}
          />
        );
      });
    } else {
      if (movieAllError) {
        setMovieError(movieAllError);
      }
      return (
        <>
          <MovieSimpleForm index="1" error={movieError} />
          <MovieSimpleForm index="2" />
          <MovieSimpleForm index="3" />
          <MovieSimpleForm index="4" />
        </>
      );
    }
  };

  return (
    <>
      {movieFormLoop()}
      {arrayJSX}
    </>
  );
};

export default MovieContainer;
