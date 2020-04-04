import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

/**
 * 회원가입 및 로그인 페이지 레이아웃 담당 컴포넌트
 */

const AuthTemplateStyled = styled.div`
 
  background: ${palette.gray[3]};
  padding: 70px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateStyled>
      <WhiteBox>
        <div className="logo-area">
          <LinkStyled to="/" >
            TICKET APP
          </LinkStyled>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateStyled>
  );
};

export default AuthTemplate;
