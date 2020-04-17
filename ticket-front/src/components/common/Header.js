import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import palette from "../../lib/styles/palette";

const HeaderStyled = styled(Responsive)`
  position: fixed;
  width: 100%;
  ${props =>
    props.bgColor
      ? css`
          background: black;
          color: white;
          border-bottom: 1px solid white;
          div .logo {
            color: white;
          }
          * {
            color: white;
          }
        `
      : css`
          background: white;
          color: black;
          border-bottom: 1px solid white;
          div .logo {
            color: black;
          }
          * {
            color: black;
          }
          div .right {
            color: black;
          }
        `};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
  padding-bottom: 10px;
  min-width: 1100px;
`;

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .logo {
    left: 50%;
    top: 15px;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-decoration: none;
    color: black;
    margin: 0px 15px;
  }
  .right {
    position: absolute;
    top: 5px;
    right: 0px;
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
`;

const Spacer = styled.div`
  height: 4.5rem;
`;

const UserInfo = styled.div`
  ${props =>
    props.bgColor
      ? css`
          color: ${palette.gray[3]};
        `
      : css`
          color: black;
        `}
  margin-right: 1rem;
  font-size: 12px;
`;

const ButtonStyled = styled(Link)`
  ${props =>
    props.bgColor
      ? css`
          color: ${palette.gray[3]};
        `
      : css`
          color: black;
        `}
  background: rgba(0, 0, 0, 0.025);
  border: none;
  text-decoration: none;
  font-size: 12px;
  & + & {
    margin-left: 10px;
  }
  :hover {
    cursor: pointer;
  }
`;
const ButtonWrapper = styled.div``;
const LogoWrapper = styled.div``;

const CategoryWapper = styled.div`
  position: relative;
  top: 8px;
  display: block;
`;
const CategoryLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-decoration: none;
  margin: 0 40px;
`;
const HiddenSpan = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-decoration: none;
  margin: 0 40px;
  opacity: 0;
  :hover {
    cursor: default;
  }
`;
const IconWrapper = styled.div``;
const IconLink = styled(Link)`
  position: absolute;
  right: 0;
  top: 30px;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-decoration: none;
  margin: 0 30px;
  ${props =>
    props.bgColor
      ? css`
          color: ${palette.gray[3]};
        `
      : css`
          color: black;
        `}
`;

const Header = ({ bgColor, user, onLogout,onClick }) => {
  return (
    <>
      <HeaderStyled bgColor={bgColor}>
        <Wrapper>
          <CategoryWapper>
            <CategoryLink to="/movie" onClick={onClick}>영화</CategoryLink>
            <CategoryLink to="/ticket" onClick={onClick}>예매</CategoryLink>
            <CategoryLink to="/event" onClick={onClick}>이벤트</CategoryLink>
          </CategoryWapper>
          <LogoWrapper>
            <Link className="logo" onClick={onClick} to="/">
              Ticket App
            </Link>
          </LogoWrapper>
          <CategoryWapper>
            <HiddenSpan>영화</HiddenSpan>
            <HiddenSpan>예매</HiddenSpan>
            <HiddenSpan>이벤트</HiddenSpan>
          </CategoryWapper>

          {user ? (
            <>
              <div className="right auth">
                <UserInfo bgColor={bgColor}>{user.accountId}</UserInfo>
                <ButtonStyled onClick={onLogout} bgColor={bgColor}>
                  로그아웃
                </ButtonStyled>
              </div>
              <IconWrapper>
                <IconLink to="/myHome" bgColor={bgColor}>
                  <i class="fas fa-user"></i>
                </IconLink>
              </IconWrapper>
            </>
          ) : (
            <>
              <IconWrapper>
                <IconLink to="/login" bgColor={bgColor}>
                  <i class="fas fa-user"></i>
                </IconLink>
              </IconWrapper>
              <ButtonWrapper>
                <div className="right auth" bgColor={bgColor}>
                  <ButtonStyled to="/login" bgColor={bgColor}>
                    로그인
                  </ButtonStyled>
                  <ButtonStyled to="/register" bgColor={bgColor}>
                    회원가입
                  </ButtonStyled>
                </div>
              </ButtonWrapper>
            </>
          )}
        </Wrapper>
      </HeaderStyled>
      <Spacer />
    </>
  );
};

export default Header;
