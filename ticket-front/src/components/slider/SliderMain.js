import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SliderMain = ({ slide, handleSlideClick }) => {
  const sliderRef = useRef();

  const SliderMainStyled = styled.div`
    display: flex;
    list-style: none;
    width: 980px;
    height: 500px;
    overflow: hidden;
    position: relative;
    
  `;

  const ListStyled = styled.li`
    width: calc(100% / 4);
    height: 300px;
    
  `;

  const ImageStyled = styled.div`
    a {
      display: block;
      width: 980px;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `;

  const { index, src } = slide;

  return (
    <>
      <SliderMainStyled>
        <ListStyled ref={sliderRef} onClick={index => handleSlideClick(index)}>
          <ImageStyled className="slide__image-wrapper">
            <Link to="/">
              <img
                className="slider__image"
                src={src}
                alt={`slider__image-${index}`}
              />
            </Link>
          </ImageStyled>
        </ListStyled>
      </SliderMainStyled>
    </>
  );
};

export default SliderMain;
