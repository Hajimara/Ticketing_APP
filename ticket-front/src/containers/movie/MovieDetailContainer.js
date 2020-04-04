import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import MovieDetailForm from "../../components/movie/MovieDetailForm";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailData, movieInitialize } from "../../modules/movie";

const MovieDetailContainer = ({ history, match }) => {
  const { params } = match;
  const dispatch = useDispatch();
  const { movieDetail, movieDataError, loading } = useSelector(
    ({ movie, loading }) => ({
        movieDetail: movie.movieDetail,
      loading: loading["movie/MOVIE_DETAIL_DATA"],
      movieDataError: movie.movieDataError
    })
  );

  useEffect(() => {
    dispatch(movieDetailData(params.id));
    window.scrollTo(0,0);
    return () => {
      dispatch(movieInitialize());
    };
  }, [dispatch, params.id]);

  useEffect(() => {
    if (movieDataError) {
      history.push("/");
    }
  }, [history, movieDataError]);

  return (
    <>
      <MovieDetailForm
        loading={loading}
        data={movieDetail}
        error={movieDataError}
      />
    </>
  );
};

export default withRouter(MovieDetailContainer);
