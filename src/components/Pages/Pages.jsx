import React from "react";
import styled from "styled-components";
import { SuperLightText } from "../StyledComponents/Text";

const Pages = () => {
  return (
    <PagesContainer>
      <SuperLightText className="item" as="a" href="/about">
        about
      </SuperLightText>
      <SuperLightText className="item">.</SuperLightText>
      <SuperLightText className="item" as="a" href="/about">
        contact
      </SuperLightText>
      <SuperLightText className="item">.</SuperLightText>
      <SuperLightText className="item" as="a" href="/about">
        privacy policy
      </SuperLightText>
      <SuperLightText className="item">.</SuperLightText>
      <SuperLightText className="item" as="a" href="/about">
        help
      </SuperLightText>
      <SuperLightText className="item">.</SuperLightText>
      <SuperLightText className="item" as="a" href="/about">
        api
      </SuperLightText>
      <SuperLightText className="item">.</SuperLightText>
      <SuperLightText className="item" as="a" href="/about">
        locations
      </SuperLightText>
    </PagesContainer>
  );
};

export default Pages;

const PagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 0;

  .item {
    padding: 0 3px;
    margin: 5px 0;
  }
`;
