import styled from "styled-components";

export const PrimaryInput = styled.input`
  background-color: ${(props) => props.theme.whiteColor};
  border: none;
  outline: none;
  padding: 5px 8px 5px 1.3rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontFamily};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.7rem;
  color: ${(props) => props.theme.fontColor2};

  &::placeholder {
    color: ${(props) => props.theme.fontColor1};
  }
`;
