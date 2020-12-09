import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { customTheme } from "./theme/customTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
