import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyles from "./utils/globalStyles";
import InstagramTheme from "./utils/theme";
import Grid from "@material-ui/core/Grid";
import Stories from "./components/Stories/Stories";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <ThemeProvider theme={InstagramTheme}>
      <GlobalStyles />

      {/* Components */}
      <Header />
      <div className="mainContainer">
        <Grid container>
          <Grid item md={8}>
            <Stories />
          </Grid>

          <Grid item md={4}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
