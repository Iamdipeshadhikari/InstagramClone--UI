import React from "react";
import styled from "styled-components";

const Overlay = (props) => {
  if (props.open) {
    return <OverlayContainer onClick={props.closeModal} />;
  } else {
    return null;
  }
};

export default Overlay;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.2s ease-out;
`;
