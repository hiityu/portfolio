import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #F4A261;
    }
`;

export const About = () => (
    <div>
        <GlobalStyle />
        <h1>
            A little about me.
        </h1>
        <hr className="border-top justify-content-between p-3" />
        <p>
            stuff about me
        </p>
        <h3>
            Resume
        </h3>
        <h3>
            Skills
        </h3>
        <hr className="border-top justify-content-between p-3" />
        <p>
            these are my skill set
        </p>
    </div>
)