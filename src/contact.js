import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: white;
    }
`;

export const Contact = () => (
  <div>
    <GlobalStyle />
    <h1>Lets Talk!</h1>
    <hr className="border-top justify-content-between p-3" />
  </div>
);
