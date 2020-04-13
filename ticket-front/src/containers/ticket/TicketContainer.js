import React, { useEffect, useState, useRef } from "react";
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
import { withRouter } from "react-router-dom";
import Modal from "../../components/common/Modal";
import { stateCheck, ticketSeatData } from "../../modules/ticket";

// movieData, loading,
const TicketConatainer = ({ history }) => {
  const dispatch = useDispatch();
  const [selectMovieItem, setSelectMovieItem] = useState();
  const [selectTheatreItem, setSelectTheatreItem] = useState();
  const [selectTheatreDetailItem, setSelectTheatreDetailItem] = useState();
  const [selectDateItem, setSelectDateItem] = useState();
  const [selectEndTime, setSelectEndTime] = useState();
  const [coverImage, setCoverImage] = useState();
  const [coverTitle, setCoverTitle] = useState();
  const [selectFilterDate, setSelectFilterDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [runtime, setRuntime] = useState();
  const [price, setPrice] = useState();

  const {
    movieAllData,
    movieDataLoading,
    movieDataError,
    movieDetail,
    movieDetailLoading,
    seatData,
    ticketData,
    ticketError,
  } = useSelector(({ movie, loading, ticket }) => ({
    movieAllData: movie.movieAllData,
    movieDataError: movie.movieDataError,
    movieDetail: movie.movieDetail,
    ticketData: ticket.ticketData,
    seatData: ticket.seatData,
    ticketError: ticket.ticketError,
    movieDataLoading: loading["movie/MOVIE_DATA"],
    movieDetailLoading: loading["movie/MOVIE_DETAIL_DATA"],
    seatDataLoading: loading["movie/TICKET_SEAT_DATA"],
  }));
  const skipFirstRun = useRef(true);


  // modal scroll block
  useEffect(() => {
    if (skipFirstRun.current) {
      skipFirstRun.current = false;
      return;
    }
    function handleTouchMove(event) {
      if (modalVisible) {
        event.preventDefault(); // 여기가 핵심
      }
    }
    if (modalVisible) {
      document.body.classList.add("hidden");
      window.addEventListener("scroll touchmove mousewheel", handleTouchMove, {
        passive: false,
      });
    } else {
      document.body.classList.remove("hidden");
    }
    return () => {
      document.body.classList.remove("hidden");
      window.removeEventListener(
        "scroll touchmove mousewheel",
        handleTouchMove
      );
    };
  }, [modalVisible]);

  const setMoviePrice = (price) => {
    setPrice(price)
  }
  const minuteOperation = (yyyyMMddhhmmss) => {
    var t = new Date(yyyyMMddhhmmss);
    var hours = t.getHours();
    var minutes = t.getMinutes();
    var endTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    return endTime;
  };

  const timeOperation = (yyyyMMddhhmmss, runtimeData) => {
    // add runtime
    var time = new Date(yyyyMMddhhmmss);
    time.setMinutes(time.getMinutes() + parseInt(runtimeData));
    return time;
  };

  // initState
  const initialState = (e) => {
    e.preventDefault();
    setSelectMovieItem();
    setSelectTheatreItem();
    setSelectTheatreDetailItem();
    setSelectDateItem();
    setSelectEndTime();
  };


  // ----------------- bug solution -------------------------------
  const getRuntime = (stringData) => {
    var temp1 = stringData.split(",");
    temp1.some((data, index) => {
      if (data.includes("runtime")) {
        try {
          if (data.split('":')[1].includes('"')) {
            setRuntime(data.split(":")[1].replace('"', ""));
          } else {
            setRuntime(data.split(":")[1]);
          }
        } catch (error) {}
        return data;
      }
    });
  };

  const getBackdropPath = (stringData) => {
    var temp1 = stringData.split(",");
    temp1.some((data, index) => {
      if (data.includes("poster_path")) {
        try {
          if (data.split('":"')[1].includes('"')) {
            setCoverImage(data.split('":"')[1].replace('"', ""));
          } else {
            setCoverImage(null);
          }
        } catch (error) {}
        return data;
      }
    });
  };

  const getTitle = (stringData) => {
    var temp1 = stringData.split(",");
    temp1.some((data, index) => {
      if (data.includes("title")) {
        try {
          if (data.split('":"')[1].includes('"')) {
            setCoverTitle(data.split('":"')[1].replace('"', ""));
          } else {
            setCoverTitle(null);
          }
        } catch (error) {}
        return data;
      }
    });
  };

  useEffect(() => {
    if (movieDetail) {
      var stringData = JSON.stringify(movieDetail);
      getBackdropPath(stringData);
      getTitle(stringData);
      getRuntime(stringData);
    }
  }, [movieDetail]);

  // ----------------- bug solution -------------------------------

  useEffect(() => {
    dispatch(movieData());

    return () => {
      dispatch(movieInitialize());
    };
  }, [dispatch]);

  const onSelectItem = (e) => {
    e.preventDefault();
    setSelectTheatreItem();
    setSelectTheatreDetailItem();
    setSelectDateItem();
    setSelectEndTime();
    // 바로 불러와 사용할 수 없으므로 새 변수를 생성하여
    // 사용
    var movieId = e.currentTarget.dataset.id;
    dispatch(ticketSeatData({movieId}));
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
    var inputData = e.currentTarget.dataset.date
    if(selectMovieItem,
      selectTheatreItem,
      selectTheatreDetailItem){
        setSelectFilterDate(()=>filterDateTime(inputData));
      }
    setSelectDateItem(inputData);
  };

  const onSelectEndTimeItem = (e) => {
    setSelectEndTime(e.currentTarget.dataset.time);
    setPrice(e.currentTarget.dataset.price);
  };

  const filterDateTime = (inputData) => {
    var temp = [];
    if(seatData.length === 0){
      return;
    }
   return temp = seatData.filter((date,index)=>{
      const d = new Date(date.seat.movieDate);
      var yyyy = d.getFullYear();
      var mm = d.getMonth()+1
      var dd = d.getDate()
      
      mm = String(mm).length ===1 ? '0'+mm: mm;
      dd = String(dd).length === 1 ? '0' + dd: dd;
      var s = `${yyyy}-${mm}-${dd}`
      
      
      if(String(inputData) === String(s)){
        return temp = date.seat.movieDate;
      }
    })
    
  }

  // next step
  const handleArrowButton = () => {
    if (
      selectMovieItem &&
      selectTheatreItem &&
      selectTheatreDetailItem &&
      selectDateItem &&
      selectEndTime &&
      coverImage &&
      coverTitle &&
      price &&
      runtime
    ) {
      dispatch(
        stateCheck({
          selectMovieItem,
          selectTheatreItem,
          selectTheatreDetailItem,
          selectDateItem,
          selectEndTime,
          coverImage,
          coverTitle,
          price,
          runtime,
        })
      );
    } else {
      setModalVisible(true);
    }
  };

  const onConfirm = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (skipFirstRun.current) {
      skipFirstRun.current = false;
      return;
    }
    if (ticketData) {
      history.push("/seat");
      return;
    }
    return;
  }, [dispatch, ticketData, ticketError, history]);

  return (
    <>
      <Modal
        visible={modalVisible}
        title="경고"
        description="모든 목록을 확인해 주세요."
        onConfirm={onConfirm}
        isCancel={false}
      />
      <TopLine MainTitle="티켓예매" line={true} />
      <TicketInit initialState={initialState} />
      <TicketForm
        onSelectItem={onSelectItem}
        onSelectDateItem={onSelectDateItem}
        onSelectTheatreItem={onSelectTheatreItem}
        onSelectTheatreDetailItem={onSelectTheatreDetailItem}
        onSelectEndTimeItem={onSelectEndTimeItem}
        timeOperation={timeOperation}
        minuteOperation={minuteOperation}
        setMoviePrice={setMoviePrice}
        selectMovieItem={selectMovieItem}
        selectDateItem={selectDateItem}
        selectTheatreItem={selectTheatreItem}
        selectTheatreDetailItem={selectTheatreDetailItem}
        selectFilterDate={selectFilterDate}
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
        handleArrowButton={handleArrowButton}
        error={movieDataError}
      />
    </>
  );
};

export default withRouter(TicketConatainer);
