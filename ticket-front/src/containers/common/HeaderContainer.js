import React from "react";
import Header from "../../components/common/Header";
import { useDispatch, useSelector } from "react-redux";
import { logout, userInitalize } from "../../modules/user";
import { paymentInitalize } from "../../modules/payment";
import { ticketInitalize } from "../../modules/ticket";

const HeaderContainer = ({ bgColor }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onLogout = () => {
    dispatch(logout());
  };

  const onCleanData = () => {
    dispatch(paymentInitalize());
    dispatch(ticketInitalize());
    dispatch(userInitalize());
  };
  return (
    <>
      <Header
        bgColor={bgColor}
        user={user}
        onLogout={onLogout}
        onClick={onCleanData}
      ></Header>
    </>
  );
};

export default HeaderContainer;
