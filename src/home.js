import React from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {

	background: linear-gradient(-45deg, #264653, #108690, #F4A261, #FCCF14);
	background-size: 400% 500%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 3px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  :hover {
    background: #fccf14;
  }
`;

const Styles = styled.div``;

export const Home = () => (
  <Styles>
    <GlobalStyle />
    <div>
      <h1>Home</h1>
      <h2>Whats up I'm James Stefanik</h2>
      <h3>
        and I'm...
        <TextLoop>
          <span>a Software Engineer</span>
          <span>a Web Developer</span>
          <span>a Digital Marketing / Project Manager</span>
          <span>a Lemonade & Donut Lover</span>
        </TextLoop>{" "}
      </h3>
      <Link to="/about">
        <Button>Learn More</Button>
      </Link>
    </div>
  </Styles>
);
