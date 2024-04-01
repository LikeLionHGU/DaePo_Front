import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import App from "./App";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  /* height: 98vh; */
  align-items: center;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Div>
      <App />
    </Div>
  </React.StrictMode>
);
