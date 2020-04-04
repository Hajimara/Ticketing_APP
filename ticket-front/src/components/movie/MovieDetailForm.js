import React from "react";
import styled from "styled-components";
import noImage from "../../lib/styles/img/noPosterSmall.png";

const MovieDetailStyled = styled.div`
  height: calc(100vh - 120px);
  width: 92%;
  position: absolute;
  padding: 30px;
  margin-bottom: 50px;
`;
const MovieDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
`;
const BackDrop = styled.div`
  background-image: url(${props => props.bgImage});
  width: 100%;
  height: 100%;
  filter: blur(2px);
  background-size: cover;
  background-position: center center;
  opacity: 0.5;
  z-index: -1;
  position: absolute;
  top: 10px;
  left: 3rem;
`;

const Cover = styled.div`
  width: 50%;
  height: 90%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  z-index: 0;
  margin: 0 15px 0 0;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: white;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;
const Divider = styled.span`
  margin: 10px;
`;

const ItemContainer = styled.div`
  color: white;
  margin: 15px 0px;
  font-size:12px;
`;

const Item = styled.span``;

const Overview = styled.p`
margin-top:10px;
font-size:12px;
opacity:0.9;
line-height:1.5;
width: 50%;
color:white;
`;

const MovieDetailForm = ({ loading, data, error }) => {
  return (
    <>
      {loading && <div>loading...</div>}
      {data && (
        <MovieDetailStyled>
          <BackDrop
            bgImage={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          ></BackDrop>
          <MovieDetailWrapper>
            <Cover
              bgImage={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                  : noImage
              }
            />
            <Data>
              <Title>{data.title}</Title>
              <ItemContainer>
                <Item>
                  {" "}
                  {data.release_date
                    ? data.release_date.substring(0, 4)
                    : data.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {data.runtime ? data.runtime : data.episode_run_time[0]} min
                </Item>
                <Divider>•</Divider>
                <Item>
                  {data.genres &&
                    data.genres.map((genre, index) =>
                      index === data.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemContainer>
              <Overview>{data.overview}</Overview>
            </Data>
          </MovieDetailWrapper>
        </MovieDetailStyled>
      )}
    </>
  );
};

export default MovieDetailForm;
