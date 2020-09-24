import React from "react";
import { createGlobalStyle } from "styled-components";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: white;
    }
`;
const Styles = styled.div`
  .card {
    margin-bottom: 10px;
    border-radius: 0rem;
    bg: info;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .card-header {
    background-color: white;
    border-bottom: 0px;
  }
`;
export const Contact = () => (
  <Styles>
    <GlobalStyle />
    <div>
      <h1>Lets Talk!</h1>
      <hr className="border-top justify-content-between p-3" />
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col sm md lg="auto">
                <h3>
                  <strong> Email</strong>
                </h3>
              </Col>
              <Col>
                <h3>
                  <a href="mailto:james.stefanik@gmail.com">
                    James.stefanik@gmail.com
                  </a>
                </h3>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Styles>
);
