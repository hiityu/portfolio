import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
//img
import ctcimg from "../../assests/ctc/ctc.PNG";

const Styles = styled.div`
  .row {
    margin-left: 0px;

  }
  .col {
    padding-left: 0px;
  }
  .col-md-4{
    max-width:45%;
  }
  a {
    color: black;
    :hover {
        color: white;
  }
  .container-div{ 
    Display: flex;
    Height: 100vh;
    Width: 100vw; 

    }
`;

export const ctc = () => (
  <Styles>
    <div>
      <h1>CTC</h1>
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
        <h5>
          Tasked with bring them into the 21st century. I revamped the look of
          there website while keeping the feel of the orginal. Being a non
          profit centered around theatre with a lot of different sections of
          things going on I made sure to strip things down as far as possible
          without ruining the message and information Delievery. I was also
          tasked with creating style guidlines, anayltic pipeline & reports,
          Digital footprint, Ads, And Newsletters.
        </h5>
      </Row>
      <Row>
        <h4>
          <strong>Role(s):</strong>
        </h4>
      </Row>
      <Row>
        <h5>Digital Project Manger, Digital Marketing , IT , Web Devleoper</h5>
      </Row>
      <Row>
        <h4>
          <strong>Tools:</strong>
        </h4>
      </Row>
      <Row>
        <h5>Squarespace, HTML , CSS , JS</h5>
      </Row>
      <Row>
        <h4>
          <strong>Website: </strong>
        </h4>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <a href="http://www.childrenstheatercompany.org/">
            <img
              src={ctcimg}
              alt="Live Site"
              style={{
                Mode: "cover",
                width: 500,
              }}
            />
          </a>
        </Col>
      </Row>
    </div>
  </Styles>
);
