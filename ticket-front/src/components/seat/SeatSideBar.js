import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const SeatSideBarStyled = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 310px;
  height: 556px;
  margin: 0 0 0 20px;
  background-color: #333;
  * {
    color: white;
  }
`;

const TitleBox = styled.div`
  border-bottom: 1px solid #434343;
  font-size: 1.1rem;
  padding: 20px 0 20px 20px;
`;

const InfoBox = styled.div`
  height: 120px;
  width: 100%;
  border-bottom: 1px solid #434343;
  padding: 10px 0 0 0;
  img {
    height: 110px;
    width: 80px;
    position: relative;
    bottom: 75px;
    left: 200px;
  }
`;

const MovieContent = styled.p`
  margin: 0;
  padding: 0 0 0 20px;
  font-size: 14px;
`;

const SeatContent = styled.p`
  margin: 0;
  padding: 15px 0 20px;
  font-size: 14px;
  
`;


const SeatTopBox = styled.div`
  border-bottom: 1px solid #434343;
  width: 100%;
  height: 40px;
  margin: -15px 0 0 0;
`;

const SeatBox = styled.div`
  border-radius: 3px;
  border: 1px solid #434343;
  width: 228px;
  height: 200px;
  margin: 10px 0 0 20px;
  position: relative;
  top: 20px;
  left: 7%;
  display:flex;
`;

const SignboardBox = styled.div`
  border-right: 1px solid #434343;
  font-size: 14px;
  width: 85px;
  padding: 40px 20px 20px 20px;
`;

const SelectSeatBox = styled.div`
  border-bottom: 1px solid #434343;
  font-size: 1.1rem;
  padding: 20px 0 0px 20px;
`;

const SelectSeatCodeBox = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin: 5px 0 0 0 ;
`;
const SelectSeatCode = styled.div`
width: 30px;
    height: 25px;
    text-align: center;
    border: 1px solid #434343;
    margin: 5px 0 0 0 ;
    background-color: ${(props) =>
    props.className === 'on' ? "tomato" : "#333"};
    `;

const Signboard = styled.div`
display: inline-block;
margin:5px 0 0 0 ;
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  margin: 0 5px 0 0;
  float: left;
  text-align: center;
`;
const Select = styled(Box)`
  background-color: tomato;
`;
const Finish = styled(Box)`
  color: white;
  background-color: ${palette.gray[7]};
`;
const Impossible = styled(Box)`
  background-color: black;
`;
const Common = styled(Box)`
  background-color: white;
`;

const PriceBox = styled.div`
  border: none;
  margin: 40px 5px 0 20px;
  display:flex;
  flex-direction:column;
`;

const Price = styled.div`
display: flex;
`;

const People = styled.div`
color: ${palette.gray[6]};
font-size:14px;
margin: 0 0 5px 0;
`;
const Title = styled.div`
letter-spacing:-1px;
`;

const LastPrice = styled.div`
letter-spacing:-1px;
position: relative;
    left: 100px;
`;

const Payment = styled.div`
  width: 100%;
  height: 40px;
  font-size: 24px;
  background-color: tomato;
  border: 1px solid tomato;
  position: relative;
  bottom: -25px;
  text-align: center;
  left: -1px;
  border-radius: 0 0 10px 10px;
`;
const SeatSideBar = ({ ticketData,selectSeat, peopleCounter }) => {
  return (
    <>
      {ticketData === null ? (
        ""
      ) : (
        <SeatSideBarStyled>
          <TitleBox>
            {ticketData.title.length > 20
              ? `${ticketData.title}...`
              : ticketData.title}
          </TitleBox>
          <InfoBox>
            <MovieContent>{ticketData.theatre}</MovieContent>
            <MovieContent>{ticketData.theatreDetail}</MovieContent>
            <MovieContent>{ticketData.ticketDate}</MovieContent>
            <MovieContent>{ticketData.endTime}</MovieContent>
            <img
              src={`https://image.tmdb.org/t/p/original${ticketData.image}`}
              alt="영화 이미지"
            ></img>
          </InfoBox>
          <SeatBox>
            <SignboardBox>
              <Signboard>
                <Select></Select>선택
              </Signboard>
              <Signboard>
                <Finish>X</Finish>예매완료
              </Signboard>
              <Signboard>
                <Impossible></Impossible>선택불가
              </Signboard>
              <Signboard>
                <Common>0</Common>일반
              </Signboard>
            </SignboardBox>
            <SelectSeatBox>
              <SeatTopBox>
                <SeatContent>선택좌석</SeatContent>
              </SeatTopBox>
              <SelectSeatCodeBox>
                <SelectSeatCode className={selectSeat[0] ? "on" : "off"}>{selectSeat[0] ? selectSeat[0] : '-'}</SelectSeatCode>
                <SelectSeatCode className={selectSeat[1] ? "on" : "off"}>{selectSeat[1] ? selectSeat[1] : '-'}</SelectSeatCode>
                <SelectSeatCode className={selectSeat[2] ? "on" : "off"}>{selectSeat[2] ? selectSeat[2] : '-'}</SelectSeatCode>
                <SelectSeatCode className={selectSeat[3] ? "on" : "off"}>{selectSeat[3] ? selectSeat[3] : '-'}</SelectSeatCode>
              </SelectSeatCodeBox>
            </SelectSeatBox>
          </SeatBox>
          <PriceBox>
            <People>{peopleCounter}명</People>
            <Price>
              <Title>최종결제금액</Title>
              <LastPrice>
                {`${String(ticketData.price*peopleCounter).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}`}원
              </LastPrice>
            </Price>
          </PriceBox>
          <Payment>결제하기</Payment>
        </SeatSideBarStyled>
      )}
    </>
  );
};

export default SeatSideBar;
