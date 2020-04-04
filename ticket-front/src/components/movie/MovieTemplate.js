import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const MovieTemplateStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: black;
  margin-top: 1.125rem;
  color: white;
  /* justify-content: center; */
  align-items:center;
  flex-direction:column;
  
`;
const MovieTemplateWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem;
  
  
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 2px solid ${palette.gray[3]};
`;

const PlusStyled = styled(Link)`
  position: relative;
  right: 0px;
  top: 0;
  font-size: 1rem;
  color: ${palette.gray[5]};
  font-weight: bold;
  text-decoration:none;
  transition:0.3s;
  :hover {
    border-bottom: 2px solid ${palette.gray[4]};
  }
`;

const MovieTemplate = ({ children }) => {
  return (
    <>
      <MovieTemplateStyled>
        
          <Logo>Box Office</Logo>
          <PlusStyled to='/movie'>
            더 알아보기<i class="fas fa-plus"></i>
          </PlusStyled>
        
        <MovieTemplateWrapper>
        {children}
        </MovieTemplateWrapper>
      </MovieTemplateStyled>
    </>
  );
};

export default MovieTemplate;
