import styled from "styled-components";

export const Story = styled.div`
  cursor: pointer;

  img {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    border: 4px solid ${(props) => props.theme.primaryColor};
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }

  span {
    font-size: 0.6rem;
    color: ${(props) => props.theme.fontColor1};
    font-weight: 300;
  }
`;
