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

export const jacklenz = () => (
  <Styles>
    <div>
      <h1>jacklenz</h1>
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
          <strong>Description:</strong>
        </h4>
      </Row>
      <Row>
        <h5>Building a simple shopify site.</h5>
      </Row>
      <Row>
        <h4>
          <strong>Role(s): Web Designer</strong>
        </h4>
      </Row>

      <Row>
        <h4>
          <strong>Tools: </strong>
        </h4>
      </Row>
      <Row>
        <h5>Shopify,HTML,CSS</h5>
      </Row>
      <Row>
        <h4>
          <strong>Website: </strong>
        </h4>
      </Row>
      <Row>
        <Col>
          <a href="https://jacklenzmusic.com/">
            <h5> Jack Lenz Music</h5>
          </a>
        </Col>
        <Col>
          <p></p>
        </Col>
      </Row>
    </div>
  </Styles>
);
