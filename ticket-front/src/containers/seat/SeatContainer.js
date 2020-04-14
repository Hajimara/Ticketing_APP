import React, { useEffect, useState, useRef } from "react";
import SeatForm from "../../components/seat/SeatForm";
import SeatSideBar from "../../components/seat/SeatSideBar";
import TopLine from "../../components/common/TopLine";
import FlexBox from "../../components/common/FlexBox";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/common/Modal";
import { priceCheck } from "../../modules/ticket";

const SeatContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [peopleCounter, setPeopleCounter] = useState(0);
  const [selectSeat, setSelectSeat] = useState([]);
  const [error, setError] = useState(false);

  const { ticketData, loading ,priceData } = useSelector(({ ticket, loading }) => ({
    ticketData: ticket.ticketData,
    loading: loading["ticket/undefined"],
    priceData: ticket.priceData
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

  const onMovePayment = () => {
    if ([peopleCounter, selectSeat].includes("")) {
      return;
    }
    if (peopleCounter === 0 || selectSeat.includes([])) {
      return;
    }
    var finishPrice = peopleCounter*ticketData.price;
      dispatch(priceCheck({peopleCounter, selectSeat, finishPrice}))
  }

  useEffect(()=>{
    if(priceData){
      history.push('/payment');
    }
  },)


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
          selectSeat={selectSeat}
          onSeatSwitch={onSeatSwitch}
        />
        <SeatSideBar
          peopleCounter={peopleCounter}
          selectSeat={selectSeat}
          ticketData={ticketData}
          onMovePayment={onMovePayment}
        />
        
      </FlexBox>
    </>
  );
};

export default withRouter(SeatContainer);
