import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
// import palette from "../../lib/styles/palette";

const CommonStyled = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  background: #5352ed;
  &:hover {
    background: #70a1ff;
  }

  &:disabled {
    background: #ced6e0;
    color: black;
  }
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${props =>
    props.cyan &&
    css`
      background: #5352ed;
      &:hover {
        background: #70a1ff;
      }
    `}
`;

const StyledButton = styled.button`
  ${CommonStyled}
`;

const StyledLink = styled(Link)`
  ${CommonStyled}
`;

const Button = props => {
  return props.to ? (
    <StyledLink {...props} color={props.cyan ? 1 : 0}></StyledLink>
  ) : (
    <StyledButton {...props}></StyledButton>
  );
};

export default Button;
