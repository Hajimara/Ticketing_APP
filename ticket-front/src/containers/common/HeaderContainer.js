import React from "react";
import Header from "../../components/common/Header";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../modules/user";

const HeaderContainer = ({bgColor }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({user})=>({user: user.user}));
  const onLogout = () => {
    dispatch(logout());
  }


  const handleRemoveMovieData= () => {
  }
  return <>
    <Header bgColor={bgColor}user={user} onLogout={onLogout} onClick={handleRemoveMovieData}></Header>
  </>;
};

export default HeaderContainer;