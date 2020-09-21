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

export const SecondaryInput = styled.div`
  width: 100%;
  position: relative;

  input {
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
    font-size: 0.7rem;
    color: ${(props) => props.theme.fontColor2};
  }

  .Disabled {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    outline: none;
    font-weight: 700;
    font-size: 0.6rem;
    background-color: transparent;
    color: rgba(0, 149, 246, 0.5);
    cursor: pointer;
  }
  .Enabled {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
