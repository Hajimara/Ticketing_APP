import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const AuthFormStyled = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        /* color: ${palette.teal[7]}; */
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
      color: ${palette.gray[6]};
      text-decoration: underline;
      &:hover{
        color:${palette.gray[9]}
      }
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입"
};

const ErrorMessage = styled.div`
  color: ${palette.red[9]};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormStyled>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="accountId"
          name="accountId"
          placeholder="아이디"
          onChange={onChange}
          value={form.accountId}
        ></StyledInput>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.passowrd}
        ></StyledInput>
        {type === "register" && (
          <>
          <StyledInput
            autoComplete="new-passowrd"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
          <StyledInput
            name="username"
            placeholder="사용자 이름"
            onChange={onChange}
            value={form.username}
          />
          <StyledInput
            name="phoneNumber"
            placeholder="휴대폰 번호"
            onChange={onChange}
            value={form.phoneNumber}
          />
          <StyledInput
          name="address"
          placeholder="이메일 주소"
          onChange={onChange}
          value={form.address}
        />
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormStyled>
  );
};

export default AuthForm;
