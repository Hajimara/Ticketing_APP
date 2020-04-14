import React from "react";
import styled from "styled-components";

const text = `휴대폰 결제 순서
1. 우측 하단에 있는 "결제하기" 버튼 클릭해주세요.
2. 예매내역 확인 후 결제하기 버튼 클릭 시 결제 팝업창이 뜹니다.
3. 해당 팝업에서 통신사 선택 후 정보를 입력해주세요.

※ 휴대폰 결제 진행시 원할한 사용을 위하여 다음 사항을 꼭 확인하세요.
* 팝업 차단 설정을 꼭 해제하셔야 합니다. (도구→팝업 차단 끄기)`;

const PaymentFormStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f2f0e4;
`;
const PaymentFormWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const PaymentTitle = styled.div`
  border-bottom: 2px solid #d7d6cf;
  position: relative;
`;

const SelectBox = styled.li`
  list-style: none;
  float: left;
  font-weight: 600;
`;
const SubContext = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 80%;
  margin: 0 0 20px 40px;
`;
const SubContextBox = styled.div`
  clear: both;
`;
const PaymentList = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  height: 30px;
`;
const Input = styled.input``;
const Price = styled.div`
  margin: 0 0 10px 40px;
  font-weight:600;
`;

const Payment = styled.button`
display: ${(props) => (props.visible ? "block" : "none")};
  float: right;
  right: 50px;
  top: 50px;
  position: relative;
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
    top: 52px;
    margin-bottom: 2px;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.42);
  }
`;

/**
 *  결제 테스트로 90원 결제 후 약 30분 뒤에 환불
 */
const PaymentForm = ({ select, onChange, ticketData, priceData, onClick }) => {
  return (
    <>
      <PaymentFormStyled>
        <PaymentFormWrapper>
          <PaymentTitle>
            <h3 style={{ position: "relative", top: "10px", left: "10px" }}>
              결제 수단
            </h3>
          </PaymentTitle>
          <PaymentList>
            <ul>
              <SelectBox>
                <Input
                  type="radio"
                  name="radioGroup"
                  value="select-1"
                  checked={select === "select-1" ? true : false}
                  onChange={onChange}
                />
                신용카드
              </SelectBox>
              <SelectBox>
                <Input
                  type="radio"
                  name="radioGroup"
                  value="select-2"
                  checked={select === "select-2" ? true : false}
                  onChange={onChange}
                />
                휴대폰 결제
              </SelectBox>
              <SelectBox>
                <Input
                  type="radio"
                  name="radioGroup"
                  value="select-3"
                  checked={select === "select-3" ? true : false}
                  onChange={onChange}
                />
                계좌이체
              </SelectBox>
              <SelectBox>
                <Input
                  type="radio"
                  name="radioGroup"
                  value="select-4"
                  checked={select === "select-4" ? true : false}
                  onChange={onChange}
                />
                간편결제
              </SelectBox>
            </ul>
          </PaymentList>
          <SubContextBox>
            <SubContext
              visible={select === "select-1" ? true : false}
              value="select-1"
            >
              테스트 서버로 인해 아직 사용할 수 없는 시스템 입니다.
            </SubContext>
            <SubContext
              visible={select === "select-2" ? true : false}
              value="select-2"
            >
              <b>휴대폰 결제 순서</b>
              <br />
              <br />
              1. 우측 하단에 있는 "결제하기" 버튼 클릭해주세요.
              <br />
              2. 예매내역 확인 후 결제하기 버튼 클릭 시 결제 팝업창이 뜹니다.
              <br />
              3. 해당 팝업에서 통신사 선택 후 정보를 입력해주세요.
              <br />
              <br />
              ※ 휴대폰 결제 진행시 원할한 사용을 위하여 다음 사항을 꼭
              확인하세요.
              <br />
              * 팝업 차단 설정을 꼭 해제하셔야 합니다. (도구→팝업 차단 끄기)
              <br />
              <strong>테스트 입니다 90원 결제 후 약 30분 뒤에 자동 환불 됩니다.</strong>
            </SubContext>
            <SubContext
              visible={select === "select-3" ? true : false}
              value="select-3"
            >
              테스트 서버로 인해 아직 사용할 수 없는 시스템 입니다.
            </SubContext>
            <SubContext
              visible={select === "select-4" ? true : false}
              value="select-4"
            >
              테스트 서버로 인해 아직 사용할 수 없는 시스템 입니다.
            </SubContext>
            <Price>결제금액 : {priceData && priceData.finishPrice}</Price>
            <Payment visible={select === "select-2" ? true : false} onClick={onClick}>결제하기</Payment>
          </SubContextBox>
        </PaymentFormWrapper>
      </PaymentFormStyled>
    </>
  );
};

export default PaymentForm;
