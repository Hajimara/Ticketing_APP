import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const SliderFormStyled = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 1rem 0rem;
`;

const SliderWarapper = styled.div``;
const IconStyled = styled.div`
  color: white;
  i:hover {
    cursor: pointer;
    color: ${palette.gray[3]};
  }
`;

const HandleButton = styled.button`
  border: none;
  overflow: hidden;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  & + & {
    margin-left: 100px;
  }
  i {
    font-size: 2rem;
  }
`;

const SliderForm = ({ type, handlePreviousButton, handleNextButton }) => {
  return (
    <>
      <SliderFormStyled>
        <SliderWarapper>
          <HandleButton onClick={handlePreviousButton}>
            <IconStyled>
              <i className="fas fa-chevron-left"></i>
            </IconStyled>
          </HandleButton>
          <HandleButton onClick={handleNextButton}>
            <IconStyled>
              <i className="fas fa-chevron-right"></i>
            </IconStyled>
          </HandleButton>
        </SliderWarapper>
      </SliderFormStyled>
    </>
  );
};

export default SliderForm;
