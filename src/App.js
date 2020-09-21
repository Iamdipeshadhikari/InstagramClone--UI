import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyles from "./utils/globalStyles";
import InstagramTheme from "./utils/theme";
import Grid from "@material-ui/core/Grid";
import Stories from "./components/Stories/Stories";
import Profile from "./components/Profile/Profile";
import FollowSuggestion from "./components/FollowSuggestion/FollowSuggestion";
import Pages from "./components/Pages/Pages";
import { SuperLightText } from "./components/StyledComponents/Text";

const App = () => {
  return (
    <ThemeProvider theme={InstagramTheme}>
      <GlobalStyles />

      {/* Components */}
      <Header />
      <div className="mainContainer">
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Stories />
          </Grid>

          <Grid item md={4}>
            <Profile />
            <FollowSuggestion />
            <Pages />
            <SuperLightText style={{ fontSize: "0.6rem", fontWeight: 300 }}>
              2020 @ COPYRIGHT BY MANJIL JUNIOR
            </SuperLightText>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
