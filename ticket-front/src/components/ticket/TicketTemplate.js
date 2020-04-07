import React from "react";
import styled from "styled-components";

const TicketTemplateStyled = styled.div`
  height: 1000px;
`;
const TicketeWrapper = styled.div`
  width: 1100px;
  height: 700px;
  justify-content:center;
  align-items:center;
  margin:0 auto;

`;

const TicketTemplate = ({ children }) => {
  return (
    <>
      <TicketTemplateStyled>
        <TicketeWrapper>{children}</TicketeWrapper>
      </TicketTemplateStyled>
    </>
  );
};

export default TicketTemplate;
