import React from "react";
import styled, { css } from "styled-components";

const InitButtonStyled = styled.div`
  height: 30px;
  width: 100%;
  padding: 10px 0;
`;

const SubTitle = styled.h3`
  letter-spacing: -2px;
  display: inline-block;
  margin: 0;
`;

const InitializeButton = styled.button`
  float: right;
  outline: none;
  color: black;
  border: 1px solid #c1c1c1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.125);
  background-color: white;
  padding: 3px 8px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    position: relative;
    top: 2px;
    margin-bottom: 2px;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.42);
  }
`;

const InitButton = ({onClear}) => {
  return (
    <>
      <InitButtonStyled>
        <SubTitle>관람인원선택(최대 4인)</SubTitle>
        <InitializeButton onClick={onClear}>
          <i class="fas fa-times-circle"></i>초기화
        </InitializeButton>
      </InitButtonStyled>
    </>
  );
};

const SeatFormStyled = styled.div`
  width: 770px;
  height: 556px;
  border-top: 1px solid #000;
`;

const SeatFormWrapper = styled.div`
  width: 770px;
  height: 400px;
  margin: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const Screen = styled.div`
  padding: 20px 0 0 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 800;
  user-select: none;
  &:hover {
    cursor: default;
  }
`;

const SeatArray = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 20%;
`;

const HorizontalArray = styled.div`
  display: flex;
  width: 100%;
`;

const VerticalArray = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Basis = styled.div`
  margin: 0 20px 0 0;
`;

const SeatNumber = styled.div`
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  padding: 0px 0px;
`;
// A 15 / B 15 / C 15 / D 15 / E 15 / F 15/ G 10

const ButtonBox = styled.button`
  width: 23px;
  height: 23px;
  padding: 0px 0px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: ${(props) =>
    props.className === 'on' ? "tomato" : "white"};
  ${(props) =>
    props.activeButton === "none"
      ? css``
      : css`
          &:active {
            position: relative;
            top: 2px;
            margin-bottom: 2px;
            box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.42);
          }
        `}
`;

const ImpossibleBox = styled.button`
  width: 23px;
  height: 23px;
  padding: 0px 0px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: #495057;
  color:white;
  user-select:none;
`;

const SeatForm = ({ onSeatSwitch, selectSeat, onClear, blockSaet }) => {
  const seatArray = { A: 15, B: 15, C: 15, D: 15, E: 15, F: 15, G: 10 };
  /* eslint-disable no-loop-func */
  const seatArrayOperation = (seatArray) => {
    var results = [];
    for (const key in seatArray) {
      var seat = [];
      if (seatArray.hasOwnProperty(key)) {
        const element = seatArray[key];
        const d = (element) => {
          for (let index = 0; index < element; index++) {
            if(blockSaet && blockSaet.includes(key+(index+1)) ){
              seat.push(
                <SeatNumber>
                  <ImpossibleBox>
                    X
                  </ImpossibleBox>
                </SeatNumber>
              );
            }else{
              seat.push(
                <SeatNumber>
                  <ButtonBox
                    className={selectSeat.includes(key+(index+1)) ? "on" : "off"}
                    onClick={()=>onSeatSwitch(key+(index+1))}
                  >
                    {index + 1}
                  </ButtonBox>
                </SeatNumber>
              );
            }
          }
        };
        d(element);
        results.push(
          <>
            <VerticalArray>
              <HorizontalArray>
                <Basis>
                  <ButtonBox activeButton="none">{key}</ButtonBox>
                </Basis>
                {seat}
              </HorizontalArray>
            </VerticalArray>
          </>
        );
      }
    }
    return results;
  };

  return (
    <>
      <SeatFormStyled>
        <InitButton onClear={onClear}/>
        <SeatFormWrapper>
          <Screen>SCREEN</Screen>
          <SeatArray>{seatArrayOperation(seatArray)}</SeatArray>
        </SeatFormWrapper>
      </SeatFormStyled>
    </>
  );
};

export default SeatForm;
