import React, { useEffect, useState, useRef } from "react";
import SeatForm from "../../components/seat/SeatForm";
import SeatSideBar from "../../components/seat/SeatSideBar";
import TopLine from "../../components/common/TopLine";
import FlexBox from "../../components/common/FlexBox";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../components/common/Modal";

const SeatContainer = ({ history }) => {
  const [peopleCounter, setPeopleCounter] = useState(0);
  const [selectSeat, setSelectSeat] = useState([]);
  const [error, setError] = useState(false);
  const { ticketData, loading } = useSelector(({ ticket, loading }) => ({
    ticketData: ticket.ticketData,
    loading: loading["ticket/undefined"],
  }));

  const skipFirstRun = useRef(true);


  // modal scroll block
  useEffect(() => {
    if (skipFirstRun.current) {
      skipFirstRun.current = false;
      return;
    }
    function handleTouchMove(event) {
      if (error) {
        event.preventDefault(); // 여기가 핵심
      }
    }
    if (error) {
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
  }, [error]);

  
  useEffect(() => {
    try {
      if (!ticketData) {
        history.push("/ticket");
      }
    } catch (error) {
      history.push("/ticket");
    }
  }, [history, ticketData]);

  const onSeatSwitch = (arg,e) => {
    if (selectSeat.includes(arg)) {
      setSelectSeat(selectSeat.filter((item) => item !== arg));
      setPeopleCounter(()=> peopleCounter-1)
    } else {
      if(peopleCounter === 4){
        setError(true)
        return;
      }
      setSelectSeat(() => selectSeat.concat(arg));
      setPeopleCounter(()=> peopleCounter+1)
    }
  };

  const onConfirm = () => {
    setError(false);
  }

  const onClear = () => {
    setPeopleCounter(0);
    setSelectSeat([]);
  };


  return (
    <>
    <Modal
          visible={error}
          title="경고"
          description="최대 4인까지 선택할 수 있습니다."
          onConfirm={onConfirm}
          onCancel
          isCancel={false}
        />
      <TopLine MainTitle="좌석선택" />
      <FlexBox>
        <SeatForm
          onClear={onClear}
          peopleCounter={peopleCounter}
          selectSeat={selectSeat}
          onSeatSwitch={onSeatSwitch}
        />
        <SeatSideBar
          peopleCounter={peopleCounter}
          selectSeat={selectSeat}
          ticketData={ticketData}
        />
        
      </FlexBox>
    </>
  );
};

export default withRouter(SeatContainer);
