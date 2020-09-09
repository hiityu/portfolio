import React from 'react'
import TextLoop from "react-text-loop";
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid yellow;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: red;
    color: white;
  `}
`;
const Styles = styled.div`

.body{
-webkit-animation: background 12s cubic-bezier(1,0,0,1) infinite;
animation: background 12s cubic-bezier(1,0,0,1) infinite; 
}

@-webkit-keyframes background {
    0% { background-color: #f99; }
    33% { background-color: #9f9; }  
    67% { background-color: #99f; }
    100% { background-color: #f99; }
  }
  
  @keyframes background {
    0% { background-color: #f99; }
    33% { background-color: #9f9; }  
    67% { background-color: #99f; }
    100% { background-color: #f99; }
  }
`;

export const Home = () => (
    <Styles>
        <div>
            <h1>
                Home
        </h1>
            <h2>Whats up I'm James Stefanik</h2>
            <h3>
                and I'm...
            <TextLoop>
                    <span>a Software Engineer</span>
                    <span>a Web Developer</span>
                    <span>a Digital Marketer / Project Manager</span>
                    <span>a Lemonade and Donut Lover</span>
                </TextLoop>{" "}
            </h3>
            <Button>Normal Button</Button>
        </div>
    </Styles >
)