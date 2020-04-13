import React from 'react';
import styled from 'styled-components';

const SeatTemplateStyled = styled.div`
  width: 1100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const SeatTemplateWrapper = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const SeatTemplate = ({children}) => {
    return (
      <SeatTemplateStyled>
        <SeatTemplateWrapper>{children}</SeatTemplateWrapper>
      </SeatTemplateStyled>
    );
}

export default SeatTemplate;