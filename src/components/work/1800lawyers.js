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

export const lawyers = () => (
  <Styles>
    <div>
      <h1>1800Lawyers</h1>
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
        <h4>
          <strong>Role(s): </strong>
        </h4>
      </Row>
      <Row>
        <h5>Digital Marketing, Brand Development , IT</h5>
      </Row>
      <Row>
        <h4>
          <strong>Tools:</strong>{" "}
        </h4>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  </Styles>
);
