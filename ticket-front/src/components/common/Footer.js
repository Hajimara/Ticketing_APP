import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const FooterStyled = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${palette.gray[3]};
`;

const FooterTopWrapper = styled.div`
  width: 1100px;
  margin: 0px auto;
  padding: 30px 0px;
`;
const FooterMiddleWrapper = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  justify-content: center;
`;

const FooterTopBox = styled(Link)`
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-size: 12px;
`;

const FooterBottomBox = styled.div``;

const FooterBottomLogo = styled.div`
  letter-spacing: 2px;
  font-weight: 800;
  height: 50px;
  font-size: 24px;
  width: 150px;
  float: left;
  margin: 0 20px 0 0;
`;

const FooterBottomContext = styled.div`
  height: 50px;
  font-size: 12px;
  float: left;
  line-height: 0.3rem;
`;

const FooterBottomImage = styled.div`
  letter-spacing: 2px;
  font-weight: 800;
  height: 50px;
  font-size: 24px;
  position: relative;
  right: 0px;
  margin: 0px 5px 0 70px;
  i {
    margin: 0px 2px;
  }
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Footer = () => {
  return (
    <>
      <FooterStyled>
        <FooterTopWrapper>
          <FooterTopBox to="#">회사소개</FooterTopBox>
          <FooterTopBox to="#">인재채용</FooterTopBox>
          <FooterTopBox to="#">사회공헌</FooterTopBox>
          <FooterTopBox to="#">제휴/광고/부대사업문의</FooterTopBox>
          <FooterTopBox to="#">이용약관</FooterTopBox>
          <FooterTopBox to="#">개인정보처리방침</FooterTopBox>
          <FooterTopBox to="#">윤리경영</FooterTopBox>
        </FooterTopWrapper>
        <FooterMiddleWrapper>
          <FooterBottomBox>
            <FooterBottomLogo>
              <LinkLogo to="/">Ticket APP</LinkLogo>
            </FooterBottomLogo>
          </FooterBottomBox>
          <FooterBottomBox>
            <FooterBottomContext>
              <p>경기도 김포시 장기동 김포한강2로 12, xxx층</p>
              <p>
                {" "}
                연락처 010-6540-xxxx 대표자명 박수진 · 개인정보보호책임자 박수진
                · 사업자등록번호 xxx-xx-xxxxx · 통신판매업신고번호 제 xxx호
              </p>
              <p> COPYRIGHT © 2020. Heajimarago All Rights Reserved.</p>
            </FooterBottomContext>
          </FooterBottomBox>
          <FooterBottomBox>
            <FooterBottomImage>
              <i class="fab fa-google"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-apple"></i>
              <i class="fab fa-twitter"></i>
            </FooterBottomImage>
          </FooterBottomBox>
        </FooterMiddleWrapper>
      </FooterStyled>
    </>
  );
};

export default Footer;
