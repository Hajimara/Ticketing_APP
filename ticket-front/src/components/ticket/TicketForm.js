import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const TicketFormStyled = styled.div`
  width: 100%;
  height: 90%;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
const TicketeWrapper = styled.div`
  display: flex;
`;

const TicketSection = styled.div`
  height: 595px;
  width: ${props => props.weight};
  border: 1px solid ${palette.gray[3]};
`;
const TitleSection = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  background-color:${palette.gray[8]};
  color:white;
  text-align:center;
  height:33px;
  line-height:33px;
`;

const ContentSection = styled.div``;
const TicketForm = ({}) => {
  return (
    <>
      <TicketFormStyled>
        <TicketeWrapper>
          <TicketSection weight={"200px"}>
            <TitleSection>영화</TitleSection>
            <ContentSection></ContentSection>
          </TicketSection>
          <TicketSection weight={"200px"}>
            <TitleSection>극장</TitleSection>
            <ContentSection></ContentSection>
          </TicketSection>
          <TicketSection weight={"130px"}>
            <TitleSection>날짜</TitleSection>
            <ContentSection></ContentSection>
          </TicketSection>
          <TicketSection weight={"230px"}>
            <TitleSection>시간</TitleSection>
            <ContentSection></ContentSection>
          </TicketSection>
        </TicketeWrapper>
      </TicketFormStyled>
    </>
  );
};

export default TicketForm;
