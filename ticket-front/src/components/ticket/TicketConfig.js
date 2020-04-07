import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import noImage from "../../lib/styles/img/noPosterSmall.png";
import { Link } from "react-router-dom";

const TicketConfigStyled = styled.div`
  display: flex;
  justify-content: center;
`;
const TicketConfigWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 898px;
  height: 150px;
  border: 1px solid #1d1d1c;
  margin-top: -15px;
  background-color: #1d1d1c;
  border-radius: 2px;
  color: ${palette.gray[5]};
`;

const MovieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.gray[5]};
  height: 90%;
  width: 230px;
  border-right: 2px solid ${palette.gray[7]};
`;

const TheaterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.gray[5]};
  height: 90%;
  width: 230px;
  border-right: 2px solid #495057;
`;

const PathBox = styled.div`
  display: flex;
  align-items: center;
  color: ${palette.gray[5]};
  height: 90%;
  width: 460px;
`;

const CoverWrapper = styled.div``;
const Cover = styled.div`
  width: 100px;
  height: 135px;
  background-image: url(${(props) => props.bgImage});
  background-size: 100px;
`;
const CoverDefault = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

const TitleWrapper = styled.div``;
const MovieDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MovieDetailDefault = styled.div`
   text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

const MovieDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;
const MovieDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
`;

const TitleDetail = styled.div`
  width: 100px;
  height: 135px;
  margin: 0 0 0 10px;
`;
const Tittle = styled.div`
font-weight: 600;
`;
const TheatreItem = styled.div`
font-weight: 600;
`;
const TheatreAreaItem = styled.div`
display:flex;
flex-direction:column;
`;
const Area = styled.div`
  margin: 0 0 0 10px;
  height: 21px;
  font-weight: 600;
`;

const SeatDefault = styled.div`
   text-align: center;
  font-size: 30px;
  font-weight: 600;
  width: 230px;
`;

const Arrow = styled.div`
width: 230px;
   text-align: center;
  font-size: 100px;
  font-weight: 600;
`;

const ArrowLink = styled(Link)`
  text-decoration:none;
  color: ${palette.gray[3]};
`;
const TicketConfig = ({
  movieAllData,
  coverImage,
  coverTitle,
  loading,
  selectMovieItem,
  selectDateItem,
  selectTheatreItem,
  selectTheatreDetailItem,
  selectEndTime,
  runtime,
  error,
}) => {
  return (
    <>
      <TicketConfigStyled>
        <TicketConfigWrapper>
          <MovieBox>
            {coverImage && selectMovieItem ? (
              <>
                <CoverWrapper>
                  <Cover
                    bgImage={
                      coverImage !== null
                        ? `https://image.tmdb.org/t/p/original${coverImage}`
                        : noImage
                    }
                  />
                </CoverWrapper>
                <TitleWrapper>
                  <TitleDetail>
                    <Tittle>{coverTitle}</Tittle>
                  </TitleDetail>
                </TitleWrapper>
              </>
            ) : (
              <CoverWrapper>
                <CoverDefault title="영화선택">영화선택</CoverDefault>
              </CoverWrapper>
            )}
          </MovieBox>
          <TheaterBox>
            {selectTheatreItem && selectTheatreDetailItem && selectMovieItem ? (
              <>
                <MovieDetailWrapper>
                  <MovieDetailTitle>
                    <TheatreAreaItem>
                      <Area>극장</Area>
                      <Area> </Area>
                      <Area>날짜</Area>
                      <Area>시간</Area>
                    </TheatreAreaItem>
                  </MovieDetailTitle>
                  <MovieDetailContent>
                    <TheatreItem>{selectTheatreItem}</TheatreItem>
                    <TheatreItem>{selectTheatreDetailItem}</TheatreItem>
                    <TheatreItem>{selectDateItem}</TheatreItem>
                    {selectEndTime &&<TheatreItem>{selectEndTime}</TheatreItem>}
                  </MovieDetailContent>
                </MovieDetailWrapper>
              </>
            ) : (
              <>
                <MovieDetailDefault title="극장선택">
                  극장선택
                </MovieDetailDefault>
              </>
            )}
          </TheaterBox>
          <PathBox>
            <SeatDefault>좌석선택</SeatDefault>
            <Arrow>
              {/* 상태값이 null일때 /seat로 이동 시 onClick() 조건문 걸기 
            initialState값이 null인 상태로 왔을 때 /seat에서 history.push로 팅겨버리기 */}
              <ArrowLink to="/seat">
                <i class="fas fa-arrow-right"></i>
              </ArrowLink>
            </Arrow>
          </PathBox>
        </TicketConfigWrapper>
      </TicketConfigStyled>
    </>
  );
};

export default TicketConfig;
