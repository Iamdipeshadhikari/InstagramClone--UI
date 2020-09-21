import React from "react";
import styled from "styled-components";
import { LightText, DarkText } from "../StyledComponents/Text";
import { SuggestionFollow } from "../StyledComponents/SuggestionFollow";
import { SimpleButton } from "../StyledComponents/Button";

const FollowSuggestion = () => {
  const FormatUsername = (str) => {
    const output = [];
    for (let i = 0; i < 12; i++) {
      output.push(str[i]);
    }

    return output.join("") + "...";
  };

  return (
    <FollowSuggestionContainer>
      <div className="header">
        <LightText>Suggestions for you</LightText>
        <DarkText>See All</DarkText>
      </div>

      <div className="list">
        <SuggestionFollow>
          <div className="list--left">
            <img
              src="https://images.outlookindia.com/public/uploads/articles/2019/12/7/Akshay-Kumar-3_630_630.jpg"
              alt="Askhey Kumar"
            />

            <div className="list--left_info">
              <DarkText>{FormatUsername("Santosh Thapa030")}</DarkText>
              <LightText style={{ fontSize: "0.6rem", padding: "5px 0" }}>
                Suggested for you
              </LightText>
            </div>
          </div>

          <div className="list--right">
            <SimpleButton>Follow</SimpleButton>
          </div>
        </SuggestionFollow>

        <SuggestionFollow>
          <div className="list--left">
            <img
              src="https://images.outlookindia.com/public/uploads/articles/2019/12/7/Akshay-Kumar-3_630_630.jpg"
              alt="Askhey Kumar"
            />

            <div className="list--left_info">
              <DarkText>{FormatUsername("Santosh Thapa030")}</DarkText>
              <LightText style={{ fontSize: "0.6rem", padding: "5px 0" }}>
                Suggested for you
              </LightText>
            </div>
          </div>

          <div className="list--right">
            <SimpleButton>Follow</SimpleButton>
          </div>
        </SuggestionFollow>

        <SuggestionFollow>
          <div className="list--left">
            <img
              src="https://images.outlookindia.com/public/uploads/articles/2019/12/7/Akshay-Kumar-3_630_630.jpg"
              alt="Askhey Kumar"
            />

            <div className="list--left_info">
              <DarkText>{FormatUsername("Santosh Thapa030")}</DarkText>
              <LightText style={{ fontSize: "0.6rem", padding: "5px 0" }}>
                Suggested for you
              </LightText>
            </div>
          </div>

          <div className="list--right">
            <SimpleButton>Follow</SimpleButton>
          </div>
        </SuggestionFollow>

        <SuggestionFollow>
          <div className="list--left">
            <img
              src="https://images.outlookindia.com/public/uploads/articles/2019/12/7/Akshay-Kumar-3_630_630.jpg"
              alt="Askhey Kumar"
            />

            <div className="list--left_info">
              <DarkText>{FormatUsername("Santosh Thapa030")}</DarkText>
              <LightText style={{ fontSize: "0.6rem", padding: "5px 0" }}>
                Suggested for you
              </LightText>
            </div>
          </div>

          <div className="list--right">
            <SimpleButton>Follow</SimpleButton>
          </div>
        </SuggestionFollow>
      </div>
    </FollowSuggestionContainer>
  );
};

export default FollowSuggestion;

const FollowSuggestionContainer = styled.div`
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
