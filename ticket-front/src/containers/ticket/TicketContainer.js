import React, { useEffect, useState } from "react";
import TicketForm from "../../components/ticket/TicketForm";
import { useDispatch, useSelector } from "react-redux";
import {
  movieData,
  movieInitialize,
  movieDetailData,
} from "../../modules/movie";
import TopLine from "../../components/common/TopLine";
import TicketConfig from "../../components/ticket/TicketConfig";
import TicketInit from "../../components/ticket/TicketInit";

// movieData, loading,
const TicketConatainer = ({history}) => {
  const dispatch = useDispatch();
  const [selectMovieItem, setSelectMovieItem] = useState();
  const [selectTheatreItem, setSelectTheatreItem] = useState();
  const [selectTheatreDetailItem, setSelectTheatreDetailItem] = useState();
  const [selectDateItem, setSelectDateItem] = useState();
  const [selectEndTime, setSelectEndTime] = useState();
  const [coverImage,setCoverImage] = useState();
  const [coverTitle,setCoverTitle] = useState();
  const [runtime,setRuntime] = useState();
  const {
    movieAllData,
    movieDataLoading,
    movieDataError,
    movieDetail,
    movieDetailLoading,
  } = useSelector(({ movie, loading }) => ({
    movieAllData: movie.movieAllData,
    movieDataError: movie.movieDataError,
    movieDetail: movie.movieDetail,
    movieDataLoading: loading["movie/MOVIE_DATA"],
    movieDetailLoading: loading["movie/MOVIE_DETAIL_DATA"],
  }));
  
  const timeOperation = (yyyyMMdd,hhmm,runtimeData) => {
    // add runtime
    // 
    var time = new Date(`${yyyyMMdd} ${hhmm}:00`);
    time.setMinutes(time.getMinutes() + parseInt(runtimeData));
    return time;
  }

  const initialState = (e) => {
    e.preventDefault();
    setSelectMovieItem();
    setSelectTheatreItem();
    setSelectTheatreDetailItem();
    setSelectDateItem();
    setSelectEndTime();
  }

  const getRuntime = (stringData) => {
    var temp1 = stringData.split(',');
    var temp2;
    temp1.some((data,index)=>{
      if(data.includes('runtime')){
        temp2=data;
        console.dir(data);
        try {
          if(data.split('":')[1].includes('"')){
            setRuntime(data.split(':')[1].replace('"',''));
          }else{
            setRuntime(data.split(':')[1]);
            console.log(data);
          }
        } catch (error) {
          
        }
        return data;
      }
    })
}

  const getBackdropPath = (stringData) => {
    var temp1 = stringData.split(',');
    var temp2;
    temp1.some((data,index)=>{
      if(data.includes('poster_path')){
        temp2=data;
        console.dir(data);
        try {
          if(data.split('":"')[1].includes('"')){
            setCoverImage(data.split('":"')[1].replace('"',''));
          }else{
            setCoverImage(null);
            console.log(data);
          }
        } catch (error) {
          
        }
        return data;
      }
    })
}

const getTitle = (stringData) => {
  var temp1 = stringData.split(',');
  var temp2;
  temp1.some((data,index)=>{
    if(data.includes('title')){
      temp2=data;
      console.dir(data);
      try {
        if(data.split('":"')[1].includes('"')){
          setCoverTitle(data.split('":"')[1].replace('"',''));
        }else{
          setCoverTitle(null);
          console.log(data);
        }
      } catch (error) {
        
      }
      return data;
    }
  })
}

useEffect(() => {
  dispatch(movieData());

  return () => {
    dispatch(movieInitialize());
  };
}, [dispatch]);

useEffect(()=>{
  if(movieDetail){
    var stringData = JSON.stringify(movieDetail)
    getBackdropPath(stringData);
    getTitle(stringData);
    getRuntime(stringData);
  }
},[movieDetail])
 
  const onSelectItem = (e) => {
    e.preventDefault();
    setSelectTheatreItem();
    setSelectTheatreDetailItem();
    setSelectDateItem();
    setSelectEndTime();
    // 바로 불러와 사용할 수 없으므로 새 변수를 생성하여
    // 사용
    var movieId = e.currentTarget.dataset.id;
    setSelectMovieItem(movieId);
    dispatch(movieDetailData(movieId));
    
  };

  const onSelectTheatreItem = (e) => {
    setSelectTheatreDetailItem();
    setSelectDateItem();
    setSelectEndTime();
    setSelectTheatreItem(e.currentTarget.dataset.area);
  };
 
  const onSelectTheatreDetailItem = (e) => {
    setSelectDateItem();
    setSelectEndTime();
    setSelectTheatreDetailItem(e.currentTarget.dataset.detail);
  };

  const onSelectDateItem = (e) => {
    setSelectEndTime();
    setSelectDateItem(e.currentTarget.dataset.date);
  };

  const onSelectEndTimeItem = (e) => {
    setSelectEndTime(e.currentTarget.dataset.time);
  };

  return (
    <>
      <TopLine MainTitle="티켓예매" />
      <TicketInit initialState={initialState}/>
      <TicketForm
        onSelectItem={onSelectItem}
        onSelectDateItem={onSelectDateItem}
        onSelectTheatreItem={onSelectTheatreItem}
        onSelectTheatreDetailItem={onSelectTheatreDetailItem}
        onSelectEndTimeItem={onSelectEndTimeItem}
        timeOperation={timeOperation}
        selectMovieItem={selectMovieItem}
        selectDateItem={selectDateItem}
        selectTheatreItem={selectTheatreItem}
        selectTheatreDetailItem={selectTheatreDetailItem}
        selectEndTime={selectEndTime}
        runtime={runtime}
        movieAllData={movieAllData}
        loading={movieDataLoading}
        error={movieDataError}
      />
      <TicketConfig
        movieAllData={movieAllData}
        loading={movieDetailLoading}
        coverImage={coverImage}
        coverTitle={coverTitle}
        runtime={runtime}
        selectEndTime={selectEndTime}
        selectMovieItem={selectMovieItem}
        selectDateItem={selectDateItem}
        selectTheatreItem={selectTheatreItem}
        selectTheatreDetailItem={selectTheatreDetailItem}
        error={movieDataError}
      />
    </>
  );
};

export default TicketConatainer;
