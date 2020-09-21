import styled from "styled-components";

export const MenuIcon = styled.a`
  img {
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }

  i {
    color: ${(props) => props.theme.fontColor1};
    font-size: 1.1rem;
    transition: all 0.3s ease-in;

    &:hover {
      background: -webkit-linear-gradient(
        ${(props) => props.theme.secondaryColor},
        ${(props) => props.theme.primaryColor}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 10px 6px -6px;
    }
  }
`;
