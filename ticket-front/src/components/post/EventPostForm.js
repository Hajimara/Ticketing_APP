import React from "react";
import styled from "styled-components";
import notFoundImage from "../../lib/styles/img/maintenance.png";

const EventPostFormStyled = styled.div`
  width: 1100px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  z-index: 12;
`;

const Notice = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const Loading = styled.div`
  div {
    width: 30px;
    height: 30px;
    position: absolute;
    background-color: #ccc;
    top: 70%;
    border-radius: 50%;
  }

  div:nth-child(1) {
    background-color: #ff5460;
    animation: move 2s infinite cubic-bezier(0.2, 0.64, 0.81, 0.23);
  }
  div:nth-child(2) {
    background-color: #ff9d84;
    animation: move 2s 150ms infinite cubic-bezier(0.2, 0.64, 0.81, 0.23);
  }
  div:nth-child(3) {
    background-color: #f0e797;
    animation: move 2s 300ms infinite cubic-bezier(0.2, 0.64, 0.81, 0.23);
  }
  div:nth-child(4) {
    background-color: #75b08a;
    animation: move 2s 450ms infinite cubic-bezier(0.2, 0.64, 0.81, 0.23);
  }

  @keyframes move {
    0% {
      left: 0%;
    }
    100% {
      left: 100%;
    }
  }
`;

const EventPostForm = () => {
  return (
    <EventPostFormStyled>
      <Image src={notFoundImage}></Image>
      <Notice>
        페이지를 제작하는 중입니다... 잠시 후 메인페이지로 돌아갑니다.
      </Notice>
      <Loading>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loading>
    </EventPostFormStyled>
  );
};

export default EventPostForm;
