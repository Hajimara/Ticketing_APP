import React from "react";
import styled from "styled-components";

const TicketInitStyled = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: flex-end;
`;
const ButtonWrapper = styled.div`
height:100%;
margin-right:100px;
`;
const InitButton = styled.button`
  height: 30px;
  border-radius:3px;
  box-shadow: 1px 1px 1px 1px gray;
  background-color: #343a40;
  border: 1px solid #343a40;
  color: white;
  font-size:16px;
  font-weight:500;
  &:hover{
      cursor: pointer;
  }
  &:focus{
    outline:0;
  }
`;

const TicketInit = ({ initialState }) => {
    return (
      <TicketInitStyled>
        <ButtonWrapper>
          <InitButton onClick={initialState}>RESET</InitButton>
        </ButtonWrapper>
      </TicketInitStyled>
    );
}

export default TicketInit;