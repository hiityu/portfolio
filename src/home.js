import React from 'react'
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  -webkit-animation: background 11s cubic-bezier(1,0,0,0) infinite;
  animation: background 11s cubic-bezier(1,0,0,0) infinite; 
  }
  
  @-webkit-keyframes background {
    0% { background-color: #264653; }
    33% { background-color: #108690; }  
    67% { background-color: #F4A261; }
    100% { background-color: #FCCF14; }
  }
    
  @keyframes background {
      0% { background-color: #264653; }
      33% { background-color: #108690; }  
      67% { background-color: #F4A261; }
      100% { background-color: #FCCF14; }
    }
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 3px solid black;
  color: #e76f51;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
  :hover{
    background: black;
  }

`;

const Styles = styled.div`

`;

export const Home = () => (
  <Styles>
    <GlobalStyle />
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
      <Link to="/about"><Button >Learn More</Button></ Link>
    </div>
  </Styles >
)