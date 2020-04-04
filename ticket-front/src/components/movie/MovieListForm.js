import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from "../../lib/styles/img/noPosterSmall.png";

const MovieListStyeld = styled.div``;

const MovieLink = styled(Link)`
  text-decoration: none;
`;
const ImageStyled = styled.div`
  margin: 10px 10px 0;
  background-image: url(${props => props.bgUrl});
  width: 245px;
  height: 352px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.3s linear;
  color: black;
`;

const RatingStyled = styled.span`
  position: absolute;
  left: 15px;
  bottom: 5px;
  opacity: 0;
  transition: opacity 0.3s linear;
  color: white;
  font-size: 12px;
`;
const IndexStyled = styled.span`
  font-size: 24px;
  position: absolute;
  left: 15px;
  top: 5px;
  opacity: 0;
  transition: opacity 0.3s linear;
  color: white;
`;

const Overview = styled.span`
  position: absolute;
  left: 15px;
  top: 70%;
  color: white;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3 linear;
  width:230px;
`;

const OverviewWrapper = styled.div``;


const MovieInfoWrapper = styled.div`
  margin-bottom: 5px;
  position: relative;
  display: block;
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
    ${Overview} {
      opacity: 3;
    }
  }
`;
const Title = styled.span`
  display: inline-block;
  margin: 0px 0 0 10px;
  color: black;
  font-size: 12px;
`;

const MovieListForm = ({
  movieAllError,
  movieAllData,
  id,
  index,
  rating,
  posterPath,
  title,
  loading,
  overview
}) => {
  return (
    <>
      {posterPath && !loading ? (
        <MovieListStyeld>
          <MovieLink to={`/movie/${id}`}>
            <MovieInfoWrapper>
              <ImageStyled
                bgUrl={
                  posterPath
                    ? `https://image.tmdb.org/t/p/w300${posterPath}`
                    : noImage
                }
              />
              {/* <IndexStyled>{index}</IndexStyled> */}
              <OverviewWrapper>
                <Overview>
                  {overview
                    ? overview.length > 50
                      ? `${overview.substring(0, 50)}...`
                      : overview
                    : " "}
                </Overview>
              </OverviewWrapper>
              <RatingStyled>
                <span role="img" aria-label="rating">
                  ⭐️
                </span>
                {rating ? rating : "?"}/10
              </RatingStyled>
            </MovieInfoWrapper>
            <Title>
              {title
                ? title.length > 12
                  ? `${title.substring(0, 12)}...`
                  : title
                : "제목을 찾을 수 없습니다."}
            </Title>
          </MovieLink>
        </MovieListStyeld>
      ) : (
        <MovieListStyeld>
          <MovieLink>
            <MovieInfoWrapper>
              <ImageStyled
                bgUrl={
                  posterPath
                    ? `https://image.tmdb.org/t/p/w300${posterPath}`
                    : noImage
                }
              />
              <IndexStyled>{index}</IndexStyled>
              <Overview>
                {overview
                  ? overview.length > 30
                    ? `${overview.substring(0, 30)}...`
                    : overview
                  : " "}
              </Overview>
              <RatingStyled>
                <span role="img" aria-label="rating">
                  ⭐️
                </span>
                {rating ? rating : "?"}/10
              </RatingStyled>
            </MovieInfoWrapper>
            <Title>
              {title
                ? title.length > 12
                  ? `${title.substring(0, 12)}...`
                  : title
                : "제목을 찾을 수 없습니다."}
            </Title>
          </MovieLink>
        </MovieListStyeld>
      )}
    </>
  );
};

export default MovieListForm;
