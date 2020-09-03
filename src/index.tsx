import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider as NewMuiThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./config/theme";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <NewMuiThemeProvider theme={darkTheme}>
      <App />
    </NewMuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
