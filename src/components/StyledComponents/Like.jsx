import styled from "styled-components";
import { LikeAnimation } from "./Keyframes";

export const Like = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  i {
    color: #ff2e63;
    font-size: 5rem;
    z-index: 50;
    opacity: 0;
  }

  .showAnimation {
    animation: ${LikeAnimation} .8s ease-in-out;
  }
  .removeAnimation {
    animation: ${LikeAnimation} .8s ease-in-out;
  }
`;
