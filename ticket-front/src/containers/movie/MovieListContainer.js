import React, { useEffect, useState, useCallback } from "react";
import MovieListForm from "../../components/movie/MovieListForm";
import { useDispatch, useSelector } from "react-redux";
import {
  movieListInitialize,
  movieConcatData
} from "../../modules/movie";
import TopLine from "../../components/common/TopLine";

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const [element, setElement] = useState(null);
  const {
    movieAllError,
    more,
    listPage,
    loading,
    listData
  } = useSelector(({ movie, loading }) => ({
    movieAllData: movie.movieAllData,
    movieAllError: movie.movieAllError,
    more: movie.more,
    listPage: movie.listPage,
    loading: loading["movie/MOVIE_DATA_LIST"],
    listData: movie.listData
  }));


  


  const MovieListScrollLoop = useCallback(movieOriginData => {
    
    if (movieOriginData !== null && movieOriginData !== undefined && !loading) {
      var tempJSX = [];
      var arrayJSX = [];
      movieOriginData.forEach((listData,spanIndex)=>{
        var arrayData = listData.results.slice(0, 16);
        arrayData.forEach((data, index) => {
         const {vote_average,overview,title,poster_path,id} = data
         
        if (listData.page > 1) {
          arrayJSX.push(
            <>
              <MovieListForm
                id={id}
                index={16+ ((index+1)*spanIndex)}
                rating={vote_average}
                posterPath={poster_path}
                title={title}
                error={movieAllError}
                loading={loading}
                overview={overview}
              />
            </>
          );
          arrayJSX.push(
            <>
              {loading && <div>Loading...</div>}
              {!loading && more && (
                <div ref={setElement} style={{ background: "transparent" }}></div>
              )}
            </>
          );
        } else {
          arrayJSX.push(
            <>
              <MovieListForm
                id={data.id}
                index={index + 1}
                rating={data.vote_average}
                posterPath={data.poster_path}
                title={data.title}
                error={movieAllError}
                loading={loading}
                overview={overview}
              />
            </>
          );
        }
      });
      arrayJSX.push(
        <>
          {loading && <div>Loading...</div>}
          {!loading && more && (
            <div ref={setElement} style={{ background: "transparent" }}></div>
          )}
        </>
      );
      })

      var totalJSX = tempJSX.concat(arrayJSX);
    }else{
      return <></>
    }
    return totalJSX;
  })

  const op = {
    threshold: 0.3
  };

  useEffect(() => {
    if (!loading) {
      dispatch(movieConcatData(listPage + 1));
    }
    return ()=>{
      dispatch(movieListInitialize());
    }
  }, [dispatch]);

  // ------------- infinite scroll---------
  useEffect(() => {
    const currentElement = element;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loading) {
            dispatch(movieConcatData(listPage + 1));
          }
        }
      },
      {
        op
      }
    );
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [element, op, listPage, dispatch]);

  const alignListStyle = {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    margin: "0 0 30px 0"
  };
  const heightStyle = {
    height: "2100px"
  };

  return (
    <>
      <TopLine MainTitle="전체영화" line={true}/>
      <div className="MovieList" style={alignListStyle}>
        {MovieListScrollLoop(listData)}
      </div>

      {loading && <div style={heightStyle}>Loading...</div>}

      {!loading && more && (
        <div ref={setElement} style={{ background: "transparent" }}></div>
      )}
    </>
  );
};

export default MovieListContainer;
