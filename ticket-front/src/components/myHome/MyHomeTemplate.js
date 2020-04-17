import React from "react";
import styled from "styled-components";

const MyHomeTemplateStyled = styled.div`
  width: 1100px;
  height: 700px;
  margin: 0 auto;
`;
const MyHomeTemplateWrapper = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
`;

const MyHomeTemplate = ({ children }) => {
  return (
    <>
      <MyHomeTemplateStyled>
        <MyHomeTemplateWrapper>{children}</MyHomeTemplateWrapper>
      </MyHomeTemplateStyled>
    </>
  );
};

export default MyHomeTemplate;
