import React, { useEffect, useState } from "react";
import PaymentForm from "../../components/payment/PaymentForm";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TopLine from "../../components/common/TopLine";
import { paymentInitalize } from "../../modules/payment";
import { paymentConfirm } from "../../modules/payment";
import { userInitalize } from "../../modules/user";
import { userInfo } from "../../modules/user";
import { ticketInitalize } from "../../modules/ticket";

const PaymentContainer = () => {
  const { ticketData, priceData, user, userInfoData, result} = useSelector(({ ticket, user,payment }) => ({
    ticketData: ticket.ticketData,
    priceData: ticket.priceData,
    user: user.user,
    userInfoData: user.userInfo,
    result: payment.result
  }));
  const [select, setSelect] = useState("select-1");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ticketData && !priceData) {
      history.push("/ticket");
    }
  });

  const onChange = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  useEffect(() => {
    if (user) {
      dispatch(userInfo({ user }));
    }
    return ()=> {
      dispatch(paymentInitalize());
      dispatch(userInitalize());
      dispatch(ticketInitalize());
    }
  }, [dispatch]);

  //------------------------------- 결제 ----------------------------------
  const requestPay = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp05245803");
    // IMP.request_pay(param, callback) 호출
    IMP.request_pay(
      {
        // param
        pg: "inicis",
        pay_method: "card",
        merchant_uid: userInfoData._id+String(new Date().getTime()),
        name: ticketData.title,
        amount: 90,
        buyer_email: userInfoData.address,
        buyer_name: userInfoData.username,
        buyer_tel: userInfoData.phoneNumber,
        buyer_addr: "",
        buyer_postcode: "0000",
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          dispatch(paymentConfirm({ ticketData, priceData, user }));
          dispatch(paymentInitalize());
          dispatch(userInitalize());
          return alert("결제가 완료되었습니다.");
        } else {
          // dispatch(userInitalize())
          return alert("결제가 실패하였습니다.");
        }
      }
    );
  };
  useEffect(()=>{
    if(result){
      history.push('/');
    }
  },[history,result])
  return (
    <>
      <TopLine MainTitle="결제" line={true} />
      <PaymentForm
        select={select}
        onChange={onChange}
        ticketData={ticketData}
        priceData={priceData}
        onClick={requestPay}
      />
    </>
  );
};

export default PaymentContainer;
