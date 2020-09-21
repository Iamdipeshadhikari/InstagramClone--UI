import styled from "styled-components";

export const Notification = styled.div`
  font-size: 0.4rem;
  font-weight: bold;
  height: .8rem;
  width: .8rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.secondaryColor},
    ${(props) => props.theme.primaryColor}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 10px 6px -6px;
`;
