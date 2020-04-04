import React from "react";
import styled from "styled-components";

const MovieListStyled = styled.div`
  width: 1100px;
  height: 100%;
  justify-content:center;
  align-items:center;
  
  margin:0 auto;
`;
const MovieListWrapper = styled.div`
  width: 100%;

`;

const MovieListTemplate = ({ children }) => {
  return (
    <>
      <MovieListStyled>
        <MovieListWrapper>{children}</MovieListWrapper>
      </MovieListStyled>
    </>
  );
};

export default MovieListTemplate;
