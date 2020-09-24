import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
//imgs
import github from "../../assests/img/Github.png";
import linkedin from "../../assests/img/LinkedIn.png";

const Styles = styled.div`
  a {
    color: black;
    padding: 4px;
  }
  a:hover {
    color: white;
  }
`;

export const Footer = () => (
  <Styles>
    <footer id="foot" className="mt-5 fixed-bottom">
      <Row id="colored" className=" justify-content-between p-3">
        <Col className="p-8" md={3} sm={12}>
          &#169; James Stefanik 2020
        </Col>
        <Col className="p-8 d-flex justify-content-end" md={3} sm={12}>
          <a href="https://github.com/hiityu">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/james-stefanik-532382a4/">
            <img src={linkedin} alt="" />
          </a>
        </Col>
      </Row>
    </footer>
  </Styles>
);
