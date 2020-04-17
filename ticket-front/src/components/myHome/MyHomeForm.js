import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const MyHomeFormStyled = styled.div`
  width: 1100px;
  height: 500px;
  padding: 30px 50px;
`;

const TopSubTitleWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 35px;
  position: relative;
`;

const TopSubTitle = styled.div`
  width: 100px;
  height: 35px;
  font-weight: 600;
  text-align: center;
  border-radius: 3px 3px 0 0;
  line-height: 35px;
  cursor: pointer;
  ${(props) =>
    props.className === "on"
      ? css`
          background-color: ${palette.red[6]};
          color: white;
        `
      : css`
          background-color: ${palette.red[3]};
          color: white;
        `}
`;

const SubjectTableBox = styled.div`
  width: 1050px;
  height: 35px;
  display: flex;
  border-bottom: 1px solid ${palette.gray[2]};
`;
const ContentsTableBox = styled.div`
  width: 1100px;
  height: 35px;
  display: flex;
`;
const Subject = styled.div`
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-weight: 600;
`;
const SubjectBoxDate = styled(Subject)`
  width: 200px;
`;

const SubjectBoxSeat = styled(Subject)`
  width: 130px;
`;

const SubjectBoxTitle = styled(Subject)`
  width: 200px;
`;

const SubjectBoxPrice = styled(Subject)`
  width: 80px;
`;

const SubjectBoxTheatre = styled(Subject)`
  width: 180px;
`;
const SubjectBoxSix = styled(Subject)`
  width: 250px;
`;

const Contents = styled.div`
  height: 35px;
  line-height: 35px;
  background-color: ${palette.red[1]};
  color: #343434;
`;
const ContentsBoxDate = styled(Contents)`
  width: 200px;
  text-align: center;
`;

const ContentsBoxSeat = styled(Contents)`
  width: 130px;
`;

const ContentsBoxTitle = styled(Contents)`
  width: 200px;
  text-align: center;
`;

const ContentsBoxPrice = styled(Contents)`
  text-align: center;
  width: 80px;
`;

const ContentsBoxTheatre = styled(Contents)`
  width: 180px;
`;
const ContentsBoxTicketNumber = styled(Contents)`
  width: 250px;
  overflow: hidden; text-overflow: ellipsis;

  &:hover{
    width: 350px;
  }
`;

const PaymentTableBox = styled.div`
  width: 1050px;
  height: 35px;
  display: flex;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const PaymentSubjectBoxDate = styled(Subject)`
  width: 200px;
`;
const PaymentSubjectBoxLog = styled(Subject)`
  width: 500px;
`;
const PaymentSubjectBoxStatus = styled(Subject)`
  width: 180px;
`;
const PaymentSubjectBoxPrice = styled(Subject)`
  width: 120px;
`;

const PaymentBoxDate = styled(Contents)`
  width: 200px;
  text-align: center;
`;

const PaymentBoxLog = styled(Contents)`
  width: 500px;
`;

const PaymentBoxStatus = styled(Contents)`
  width: 180px;
  text-align: center;
`;
const PaymentBoxPrice = styled(Contents)`
  width: 120px;
  text-align: center;
`;

const PaginationBox = styled.div`
  width: 100%;
  height: 50px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pagination = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid ${palette.gray[2]};
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

const Notice = styled.div`
width: 100%;
text-align:center;
height:100px;
line-height:100px;
font-weight:600;
font-size:24px;
padding: 40px 0 20px;
`;

const MyHomeForm = ({ userTicket, onSwitch, infoSwitch, onPagination }) => {
  let d = [];
  let p = [];
  const paginationTag = (max) => {
    let num = 0;
    if (max < 10) {
      num = 1;
    } else {
      num = Math.floor((max + 10) / 10);
    }
    for (let index = 0; index < num; index++) {
      p.push(
        <Pagination onClick={() => onPagination(index + 1)}>
          {index + 1}
        </Pagination>
      );
    }
    return p;
  };

  return (
    <>
      <MyHomeFormStyled>
        <TopSubTitleWrapper>
          <TopSubTitle
            onClick={onSwitch}
            data-id="ticketInfo"
            className={infoSwitch === "ticketInfo" ? "on" : "off"}
          >
            티켓정보
          </TopSubTitle>
          <TopSubTitle
            onClick={onSwitch}
            data-id="paymentInfo"
            className={infoSwitch === "paymentInfo" ? "on" : "off"}
          >
            결제정보
          </TopSubTitle>
        </TopSubTitleWrapper>
        {userTicket && userTicket.count === 0 && (
          <Notice>예매한 티켓이 없습니다!</Notice>
        )}
        {userTicket && infoSwitch === "ticketInfo"
          ? userTicket.ticket.forEach((data, index) => {
              if (index === 0) {
                d.push(
                  <SubjectTableBox>
                    <SubjectBoxDate>날짜</SubjectBoxDate>
                    <SubjectBoxSeat>좌석</SubjectBoxSeat>
                    <SubjectBoxTitle>제목</SubjectBoxTitle>
                    <SubjectBoxPrice>가격</SubjectBoxPrice>
                    <SubjectBoxTheatre>지역</SubjectBoxTheatre>
                    <SubjectBoxSix>티켓번호</SubjectBoxSix>
                  </SubjectTableBox>
                );
              }
              d.push(
                <ContentsTableBox>
                  <ContentsBoxDate title={data.ticketDate}>
                    {data.ticketDate}
                  </ContentsBoxDate>
                  <ContentsBoxSeat title={String(data.seat)}>
                    {String(data.seat)}
                  </ContentsBoxSeat>
                  <ContentsBoxTitle title={data.movieTitle}>
                    {data.movieTitle.length > 20
                      ? `${data.movieTitle.slice(0, 20)}...`
                      : data.movieTitle}
                  </ContentsBoxTitle>
                  <ContentsBoxPrice title={data.finishPrice}>
                    {data.finishPrice}
                  </ContentsBoxPrice>
                  <ContentsBoxTheatre title={data.theatre}>
                    {data.theatre}
                  </ContentsBoxTheatre>
                  <ContentsBoxTicketNumber title={data.ticketNumber}>
                    {data.ticketNumber}
                  </ContentsBoxTicketNumber>
                </ContentsTableBox>
              );
            })
          : userTicket &&
            userTicket.payment.forEach((data, index) => {
              if (index === 0) {
                d.push(
                  <PaymentTableBox>
                    <PaymentSubjectBoxDate>결제일</PaymentSubjectBoxDate>
                    <PaymentSubjectBoxPrice>결제금액</PaymentSubjectBoxPrice>
                    <PaymentSubjectBoxLog>로그</PaymentSubjectBoxLog>
                    <PaymentSubjectBoxStatus>상태</PaymentSubjectBoxStatus>
                  </PaymentTableBox>
                );
              }
              let yyyy = new Date(data.insertDate).getFullYear();
              let MM = new Date(data.insertDate).getMonth() + 1;
              let dd = new Date(data.insertDate).getDate();
              let hh = new Date(data.insertDate).getHours();
              let mm = new Date(data.insertDate).getMinutes();
              let ss = new Date(data.insertDate).getSeconds();

              MM = String(MM).length === 1 ? "0" + MM : MM;
              dd = String(dd).length === 1 ? "0" + dd : dd;
              hh = String(hh).length === 1 ? "0" + hh : hh;
              mm = String(mm).length === 1 ? "0" + mm : mm;
              ss = String(ss).length === 1 ? "0" + ss : ss;

              const dateTime = `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
              d.push(
                <ContentsTableBox>
                  <PaymentBoxDate title={new Date(data.insertDate)}>
                    {dateTime}
                  </PaymentBoxDate>
                  <PaymentBoxPrice title={data.price}>
                    {data.price}
                  </PaymentBoxPrice>
                  <PaymentBoxLog title={data.log}>
                    {data.log.length > 40
                      ? `${data.log.slice(0, 40)}...`
                      : data.log}
                  </PaymentBoxLog>
                  <PaymentBoxStatus title={data.status}>
                    {data.status}
                  </PaymentBoxStatus>
                </ContentsTableBox>
              );
            })}
        {d}
        <PaginationBox>
          {userTicket && paginationTag(parseInt(userTicket.count)) && p}
        </PaginationBox>
      </MyHomeFormStyled>
    </>
  );
};

export default MyHomeForm;
