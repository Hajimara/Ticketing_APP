import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { thisWeek, thisDay, thisWeekAll } from "../../lib/getDateCustom";

const TicketFormStyled = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0;
`;
const TicketeWrapper = styled.div`
  display: flex;
`;

const TicketSection = styled.div`
  height: 595px;
  width: ${(props) => props.weight};
  border: 1px solid ${palette.gray[3]};
`;
const TitleSection = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  background-color: ${palette.gray[8]};
  color: white;
  text-align: center;
  height: 33px;
  line-height: 33px;
`;

const ContentSection = styled.div`
  height: 90%;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
`;
const MovieListUl = styled.ul`
  margin-left: -30px;
`;
const MovieListLi = styled.li`
  list-style: none;
  padding-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.className.indexOf("on") ? "white" : `${palette.gray[3]}`};
    border-radius: 3px;
`;
const TheatreList = styled.div`
  display: flex;
  margin: 50px 10px;
  width: 90%;
`;
const TheatreArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 21px 0;
  padding: 0 0 0 10px;
  width: 90%;
  background-color: ${(props) =>
    props.className.indexOf("on") ? "white" : `${palette.gray[3]}`};
  &:hover {
    cursor: pointer;
  }
  border-radius: 3px;
`;
const TheatreAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const TheatreAreaDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 0 21px 10px;
  &:hover {
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.className.indexOf("on") ? "white" : `${palette.gray[5]}`};
border-radius: 3px;
`;
const TheatreAreaDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const DateList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  align-items: center;
`;

const YearBox = styled.div`
  font-size: 12px;
`;
const MonthBox = styled.div`
  font-size: 40px;
  font-weight: 800;
`;
const DayWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 10px 10px;
  padding: 0 10px;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.className.indexOf("on") ? "white" : `${palette.gray[3]}`};
    border-radius: 3px;
`;
const WeekBox = styled.div``;
const DayBox = styled.div`
  margin-left: 10px;
`;

const TimeList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 10px;
  height: 100%;
`;

const TimeData = styled.div`
  margin: 15px 10px;
  background-color: ${props=>props.className.indexOf('on') ? "white" : `${palette.gray[3]}`};
  border-radius:3px;
  &:hover{
    cursor:pointer;
  }
`;

const TimeBox = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 24px;
`;

const AreaBox = styled.div`
  font-size: 20px;
  display: inline-block;
  direction:rtl;
`;
const AreaText= styled.p`
  text-align:right;

`;

const SubTimeBox = styled.div`
  display: inline-block;
  font-size: 16px;
  font-size: 12px;
`;

const SeatBox = styled.div`
  display: inline-block;
  font-size: 16px;
  position: relative;
  left: 60px;
    top: 15px;
    font-size: 12px;
`;
const TimeDefault = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  top:170px;
`;

const LeftData = styled.div`
display:inline-block;
width: 50%;
`;
const RightData = styled.div`
display:inline-block;
text-align:right;
width: 50%;
`;

// ---- operation -----
const IconStyle = {
  color: "gray",
};
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;




const Theatre = {
  서울: {
    지역: ["강남", "마곡", "목동", "코엑스", "홍대"],
    시간: ["09:00", "13:00", "16:00", "19:00"],
  },
  경기: {
    지역: ["고양스타필드", "김포한강신도시", "분당", "수원", "의정부"],
    시간: ["08:00", "11:00", "14:00", "18:00", "22:00"],
  },
  인천: {
    지역: ["검단", "송도", "인천논현", "청라"],
    시간: ["06:00", "10:00", "15:00", "19:00"],
  },
};

var keyValue = Object.keys(Theatre);

const TicketForm = ({
  movieAllData,
  loading,
  onSelectItem,
  onSelectTheatreItem,
  onSelectDateItem,
  onSelectTheatreDetailItem,
  onSelectEndTimeItem,
  timeOperation,
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
      <TicketFormStyled>
        <TicketeWrapper>
          <TicketSection weight={"250px"}>
            <TitleSection>영화</TitleSection>
            <ContentSection>
              <MovieList>
                <MovieListUl>
                  {!loading &&
                    movieAllData &&
                    movieAllData.results.map((data, index) => {
                      return (
                        <>
                          <MovieListLi
                            className={
                              parseInt(selectMovieItem) === data.id
                                ? "on"
                                : "off"
                            }
                            key={index}
                            id={data.id}
                            title={data.title}
                            data-id={data.id}
                            onClick={onSelectItem}
                          >
                            <i class="fas fa-ticket-alt" style={IconStyle}></i>{" "}
                            {data.title.length > 13
                              ? `${data.title.substring(0, 10)}...`
                              : data.title}
                          </MovieListLi>
                        </>
                      );
                    })}
                </MovieListUl>
              </MovieList>
            </ContentSection>
          </TicketSection>

          <TicketSection weight={"230px"}>
            <TitleSection>극장</TitleSection>
            <ContentSection>
              <TheatreList>
                <TheatreAreaWrapper>
                  {!loading &&
                    keyValue.map((key, index) => {
                      return (
                        <TheatreArea
                          key={index}
                          className={selectTheatreItem === key ? "on" : "off"}
                          data-area={key}
                          onClick={onSelectTheatreItem}
                        >
                          {key}{" "}
                        </TheatreArea>
                      );
                    })}
                </TheatreAreaWrapper>
                <TheatreAreaDetailWrapper>
                  {selectTheatreItem &&
                    Theatre[selectTheatreItem]["지역"].map((_, index) => {
                      return (
                        <TheatreAreaDetail
                          title={Theatre[selectTheatreItem]["지역"][index]}
                          className={
                            Theatre[selectTheatreItem]["지역"][index] ===
                            selectTheatreDetailItem
                              ? "on"
                              : "off"
                          }
                          data-detail={
                            Theatre[selectTheatreItem]["지역"][index]
                          }
                          onClick={onSelectTheatreDetailItem}
                        >
                          {Theatre[selectTheatreItem]["지역"][index].length > 5
                            ? `${Theatre[selectTheatreItem]["지역"][
                                index
                              ].substring(0, 5)}...`
                            : Theatre[selectTheatreItem]["지역"][index]}
                        </TheatreAreaDetail>
                      );
                    })}
                </TheatreAreaDetailWrapper>
              </TheatreList>
            </ContentSection>
          </TicketSection>

          <TicketSection weight={"130px"}>
            <TitleSection>날짜</TitleSection>
            <ContentSection>
              <DateList>
                <YearBox>{year}</YearBox>
                <MonthBox>{month}</MonthBox>
                {!loading &&
                  thisWeek.map((_, index) => {
                    return (
                      <>
                        <DayWrapper
                          key={index}
                          onClick={onSelectDateItem}
                          data-date={thisWeekAll[index]}
                          className={
                            selectDateItem === thisWeekAll[index] ? "on" : "off"
                          }
                        >
                          <WeekBox>{thisWeek[index]}</WeekBox>
                          <DayBox> {thisDay[index]}</DayBox>
                        </DayWrapper>
                      </>
                    );
                  })}
              </DateList>
            </ContentSection>
          </TicketSection>

          <TicketSection weight={"280px"}>
            <TitleSection>시간</TitleSection>
            <ContentSection>
              <TimeList>
                {/* data insert */}
                {selectMovieItem &&
                selectDateItem &&
                selectTheatreItem &&
                selectTheatreDetailItem ? (
                  Theatre[selectTheatreItem]["시간"].map((time, index) => {
                    var t = timeOperation(selectDateItem,time,runtime);
                    var hours = t.getHours();
                    var minutes = t.getMinutes();
                    var endTime = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
                    console.log(selectEndTime,`${time}~${endTime}`);
                    
                    return (
                      <>
                        <TimeData className={selectEndTime === `${time}~${endTime}` ? 'on' : 'off'} data-time={`${time}~${endTime}`} onClick={onSelectEndTimeItem}>
                          <LeftData>
                          <TimeBox>{time}</TimeBox>
                          <SubTimeBox>~{endTime}</SubTimeBox>
                          </LeftData>
                          <RightData>
                          <AreaBox>{selectTheatreItem}</AreaBox>
                          </RightData>
                        </TimeData>
                      </>
                    );
                  })
                ) : (
                  <>
                    <TimeDefault>영화, 극장, 날짜를 선택해주세요.</TimeDefault>
                  </>
                )}
              </TimeList>
            </ContentSection>
          </TicketSection>
        </TicketeWrapper>
      </TicketFormStyled>
    </>
  );
};

export default TicketForm;
