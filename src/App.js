import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyles from "./utils/globalStyles";
import InstagramTheme from "./utils/theme";
import Stories from "./components/Stories/Stories";
import Profile from "./components/Profile/Profile";
import FollowSuggestion from "./components/FollowSuggestion/FollowSuggestion";
import Pages from "./components/Pages/Pages";
import Post from "./components/Post/Post";
import { SuperLightText } from "./components/StyledComponents/Text";

const App = () => {
  return (
    <ThemeProvider theme={InstagramTheme}>
      <GlobalStyles />

      {/* Components */}
      <Header />
      <div className="mainContainer">
        <div className="gridOne">
          <Stories />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className="gridTwo">
          <div className="Sidebar">
            <Profile />
            <FollowSuggestion />
            <Pages />
            <SuperLightText style={{ fontSize: "0.6rem", fontWeight: 300 }}>
              2020 @ COPYRIGHT BY MANJIL JUNIOR
            </SuperLightText>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
