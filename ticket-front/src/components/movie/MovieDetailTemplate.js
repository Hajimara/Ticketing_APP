import React from "react";
import styled from "styled-components";

const DetailTemplateStyled = styled.div`
    height: calc( 100vh - 50px);
    width: 100%;
    /* position:relative; */
`;
const DetailTemplateWapper = styled.div``;

const MovieDetailTemplate = ({ children }) => {
  return (
    <>
      <DetailTemplateStyled>
        <DetailTemplateWapper>{children}</DetailTemplateWapper>
      </DetailTemplateStyled>
    </>
  );
};

export default MovieDetailTemplate;
