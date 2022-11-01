import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import App from "./App.js";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  color: #fcf1f1;
  width: 100%;
  font-family: Oswald;
  font-size: 16px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContainer>
    <App />
  </AppContainer>
);
