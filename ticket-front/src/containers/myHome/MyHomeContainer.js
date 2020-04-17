import React, { useEffect, useState } from "react";
import MyHomeForm from "../../components/myHome/MyHomeForm";
import { useDispatch, useSelector } from "react-redux";
import { myHomeGetData } from "../../modules/myHome";
import TopLine from "../../components/common/TopLine";
import { useHistory } from "react-router-dom";

const MyHomeContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [infoSwitch, setInfoSwitch] = useState("ticketInfo");
  const [pagination, setPagination] = useState(1);
  const [maxCount, setMaxCount] = useState();

  const { userTicket, user } = useSelector(({ myHome, user }) => ({
    userTicket: myHome.userTicket,
    user: user.user,
  }));

  useEffect(() => {
    if (user) {
      dispatch(myHomeGetData({ user, pagination }));
    }
  }, [dispatch, user, pagination]);

  useEffect(() => {
    if (userTicket) {
      let n=parseInt(userTicket.count)
      setMaxCount(n < 10 ? 1 : Math.floor((n+10)/10));
    }
  }, [userTicket]);

  useEffect(() => {
    if (user === null) {
      history.push('/login');
    }
  }, [user,history]);


  const onSwitch = (e) => {
    setInfoSwitch(e.currentTarget.dataset.id);
  };

  const onPagination = (idx) => {
    setPagination(idx);
  };
  return (
    <>
      <TopLine MainTitle="티켓정보" line={true} />
      <MyHomeForm
        userTicket={userTicket}
        onPagination={onPagination}
        onSwitch={onSwitch}
        maxCount={maxCount}
        infoSwitch={infoSwitch}
      />
    </>
  );
};
export default MyHomeContainer;
