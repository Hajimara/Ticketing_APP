import React from "react";
import styled from "styled-components";

const PaymentTemplateStyled = styled.div`
  width: 1100px;
  height: 700px;
  margin: 0 auto;
`;
const PaymentTemplateWrapper = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
`;

const PaymentTemplate = ({ children }) => {
  return (
    <>
      <PaymentTemplateStyled>
        <PaymentTemplateWrapper>{children}</PaymentTemplateWrapper>
      </PaymentTemplateStyled>
    </>
  );
};

export default PaymentTemplate;
