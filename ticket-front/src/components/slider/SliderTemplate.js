import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const SliderTemplateStyled = styled.div`
  display:flex;
  width:100%;
  height:100%;
  overflow:hidden;
  flex-direction:column;
  align-items: center;
  background-color:black;
  margin-top:1.125rem;
  color:white;
`;
const SliderTemplateWrapper = styled.div`
 
`;

const BackgroundPattern = styled.div`
 position:absolute;
 left:0;
 top:0;
 width:100%;
 height:100%;
 background:black;
 z-index:-1;
 
`;

const Logo = styled.div`
 font-size:2rem;
 font-weight:bold;
 border-bottom: 2px solid ${palette.gray[3]};
`;

const SliderTemplate = ({ children }) => {
  return (
    <>
      <SliderTemplateStyled><BackgroundPattern/>
        <SliderTemplateWrapper>
          <Logo>
            <div className="movie-logo-area"></div>
            EVENT
          </Logo>
        </SliderTemplateWrapper>
        {children}
      </SliderTemplateStyled>
    </>
  );
};

export default SliderTemplate;
