import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

//Redux
import { Provider } from "react-redux";
import store from "./store";

// context api
import GlobalContext from "./context/global_context";

import Routes from "./routes";

import theme from "./styles/theme";
import "../src/styles/main.scss";
import "typeface-montserrat";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <GlobalContext>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </GlobalContext>
    </Provider>
  );
}

export default App;
