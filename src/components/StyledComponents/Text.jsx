import styled from "styled-components";

export const LightText = styled.p`
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.fontColor1};
  font-size: 0.7rem;
`;
export const DarkText = styled.p`
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.fontColor2};
  font-size: 0.7rem;
  cursor: pointer;
`;

export const SuperLightText = styled.p`
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamily};
  color: #bebebe;
  font-size: 0.5rem;
  text-transform: capitalize;
  text-decoration: none;
`;
