import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .row {
    margin-left: 0px;
  }
  .col {
    padding-left: 0px;
  }
  a {
    color: black;
    :hover {
        color: white;
  }

`;

export const henryboxbrown = () => (
  <Styles>
    <div>
      <h1>Henry Box Brown</h1>
      <hr className="border-top justify-content-between p-3" />
      <Row className="justify-content-md-center">
        <Link to="/work">
          <strong>
            <h4>Back</h4>
          </strong>
        </Link>
      </Row>
      <Row>
        <h4>
          <strong>
            Description: A Website for CTCs Herny Box Brown: The Musical
          </strong>
        </h4>
      </Row>
      <Row>
        <h4>
          <strong>Role(s): Web Developer</strong>
        </h4>
      </Row>
      <Row>
        <h4>
          <strong>Tools: Squarespace,HTML,CSS</strong>
        </h4>
      </Row>
      <Row>
        <h4>
          <strong>Website: </strong>
        </h4>
      </Row>
      <Row>
        <Col>
          <a href="https://www.henryboxbrownthemusical.com/">
            <h5>Henry Box Brown</h5>
          </a>
        </Col>
        <Col>
          <p></p>
        </Col>
      </Row>
    </div>
  </Styles>
);
