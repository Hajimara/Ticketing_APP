import React from "react";
import styled from "styled-components";
import noImage from "../../lib/styles/img/noPosterSmall.png";

const MovieSimpleStyled = styled.div`
  font-size: 12px;
  margin: 10px 10px;
`;
const RatingStyled = styled.span`
  position: absolute;
  left: 5px;
  bottom: 5px;
  opacity: 0;
  transition: opacity 0.3s linear;
`;
const IndexStyled = styled.span`
  font-size: 24px;
  position: absolute;
  left: 5px;
  top: 5px;
  opacity: 0;
  transition: opacity 0.3s linear;
`;

const ImageStyled = styled.div`
  background-image: url(${props => props.bgUrl});
  width: 245px;
  height: 352px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.3s linear;
`;

const MovieSimpleWrapper = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${IndexStyled} {
      opacity: 1;
    }
    ${ImageStyled} {
      opacity: 0.3;
    }
    ${RatingStyled} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const MovieSimpleForm = ({
  id,
  index,
  rating,
  posterPath,
  title,
  error,
  loading
}) => {
  return (
    <>
      {posterPath && !loading ? (
        <MovieSimpleStyled>
          <MovieSimpleWrapper>
            <ImageStyled
              bgUrl={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : noImage
              }
            />
            <IndexStyled>{index}</IndexStyled>{" "}
            <RatingStyled>
              <span role="img" aria-label="rating">
                ⭐️
              </span>
              {rating ? rating : "?"}/10
            </RatingStyled>
          </MovieSimpleWrapper>
          <Title>
            {title
              ? title.length > 12
                ? `${title.substring(0, 12)}...`
                : title
              : "제목을 찾을 수 없습니다."}
          </Title>
        </MovieSimpleStyled>
      ) : (
        <MovieSimpleStyled>
          <MovieSimpleWrapper>
            <ImageStyled
              bgUrl={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : noImage
              }
            />
            <IndexStyled>{index}</IndexStyled>{" "}
            <RatingStyled>
              <span role="img" aria-label="rating">
                ⭐️
              </span>
              {rating ? rating : "?"}/10
            </RatingStyled>
          </MovieSimpleWrapper>
          <Title>
            {title
              ? title.length > 12
                ? `${title.substring(0, 12)}...`
                : title
              : "제목을 찾을 수 없습니다."}
          </Title>
        </MovieSimpleStyled>
      )}{" "}
    </>
  );
};

export default MovieSimpleForm;
