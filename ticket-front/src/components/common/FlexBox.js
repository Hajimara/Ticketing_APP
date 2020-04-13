import React from 'react';
import styled from 'styled-components';

const FlexBoxStyled = styled.div`
    width:100%;
    height:100%;
    display:flex;

`;

const FlexBox = ({children}) => {
    return (
      <>
        <FlexBoxStyled>{children}</FlexBoxStyled>
      </>
    );
}

export default FlexBox;