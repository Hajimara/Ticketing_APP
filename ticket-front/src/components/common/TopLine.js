import React from "react";
import styled from "styled-components";

const MovieTopLineStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;

const MainTitleStyled = styled.h1`
  position: relative;
  padding: 20px 0 0 5px;
  bottom: 0px;
  left: 5px;
`;

const TopLine = ({MainTitle}) => {
    return (
        <MovieTopLineStyled>
        <MainTitleStyled>{MainTitle}</MainTitleStyled>
      </MovieTopLineStyled>
    )
}

export default TopLine;