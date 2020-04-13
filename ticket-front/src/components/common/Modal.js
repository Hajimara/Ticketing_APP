import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index:30;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalStyled = styled.div`
width: 320px;
background: white;
border-radius: 4px;
padding: 1.5rem;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
`;

const ButtonWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #343a40;
  color: white;
  outline: 0;
  border-radius: 3px;
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const Modal = ({
  visible,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  isCancel,
}) => {
  if (!visible) return null;
  return (
    <>
      <Overlay>
        <AskModalStyled>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonWrapper>
            <Button onClick={onConfirm}>{confirmText}</Button>
            {isCancel && <Button onClick={onCancel}>{onCancel}</Button>}
          </ButtonWrapper>
        </AskModalStyled>
      </Overlay>
    </>
  );
};

export default Modal;




