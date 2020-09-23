import React from "react";
import styled from "styled-components";
import { ColorText, DarkText } from "../StyledComponents/Text";

const Modal = ({ children }) => {
  return (
    <ModalContainer>
     {children}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  overflow: hidden;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  text-align: center;

  .text {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-transform: capitalize;
  }
  .lastText {
    padding: 0.5rem 0;
    text-transform: capitalize;
  }
`;
