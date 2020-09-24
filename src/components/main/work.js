import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #108690;
    }
`;
const Styles = styled.div`
  .row {
    margin-left: 0;
    padding-bottom: 1%;
  }
  .col {
    text-align: center;
    margin-left: 0;
  }
  a {
    color: black;
    :hover {
      color: white;
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
            <p>My Github</p>
          </a>
        </Col>

        <Col>
          <Link to="/afreebird">Afreebird</Link>
        </Col>
        <Col>
          <Link to="/ctc">Childrens Theater company</Link>
        </Col>
        <Col>
          <Link to="/henryboxbrown">Henry Box Brown</Link>
        </Col>
        <Col>
          <Link to="/jacklenz">Jack Lenz</Link>
        </Col>
      </Row>
      <Row>
        <h2>Digital - Marketing / Project Mangement</h2>
      </Row>
      <Row>
        <Col>
          <Link to="/1800lawyers"> 1800Lawyers</Link>
        </Col>
        <Col>
          <Link to="/ctc"> Childrens Theater company</Link>
        </Col>
        <Col>
          <Link to="/stilldanger"> Still Danger</Link>
        </Col>
      </Row>
    </div>
  </Styles>
);
