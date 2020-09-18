import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #108690;
    }
`;
const Styles = styled.div`
  .row {
    margin-left: 0;
  }
`;

export const Work = () => (
  <Styles>
    <GlobalStyle />
    <div>
      <h1>What I've been up to.</h1>
      <hr className="border-top justify-content-between p-3" />
      <Row>
        <div>
          <h2>Development - Software / Web </h2>
        </div>
      </Row>
      <Row>
        <Col>
          <a href="https://github.com/hiityu">
            {" "}
            <p>Github</p>{" "}
          </a>
        </Col>

        <Col>
          <a href="https://afreebird.org/">
            <p>AFreeBird</p>
          </a>
        </Col>
        <Col>
          <a href="http://www.childrenstheatercompany.org/">
            <p>Childrens Theatre Comapny</p>
          </a>
        </Col>
        <Col>
          <a href="https://www.henryboxbrownthemusical.com/">
            <p>Henry Box Brown</p>
          </a>
        </Col>
        <Col>
          <a href="https://jacklenzmusic.com/">
            <p> Jack Lenz Music</p>
          </a>
        </Col>
      </Row>
      <Row>
        <h2>Digital - Marketing / Project Mangement</h2>
      </Row>
      <Row>
        <Col>1800 Lawyers</Col>
        <Col>Childrens Theatre Company</Col>
        <Col>Still Danger</Col>
      </Row>
    </div>
  </Styles>
);
