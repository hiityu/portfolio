import React from "react";
//css
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
//bootstrap
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
const Styles = styled.div`
  .row {
    margin-left: 0;
    padding-bottom: 1%;
  }
  .col {
    padding-left: 0;
  }
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

export const About = () => (
  <Styles>
    <GlobalStyle />
    <div>
      <h1>A little about me.</h1>
      <hr className="border-top justify-content-between p-3" />
      <Card>
        <Card.Header>
          <h3>
            <strong> About</strong>
          </h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <strong>James Stefanik </strong>
          </Card.Title>
          <Card.Text>
            <Row>
              <Col></Col>
              <Col>
                Im a 25 year old Software Developer Who previously was a Digital
                Project Manager
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h3>
            <strong> Skills</strong>
          </h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <h5>
                <strong>Frontend Development</strong>
              </h5>
            </Row>
            <Row>
              <Col>
                <p>HTML</p>
                <ProgressBar now={85} />
                <p>CSS</p>
                <ProgressBar now={85} />
                <p>Django</p>
                <ProgressBar now={50} />
                <p>Squarespace</p>
                <ProgressBar now={75} />
              </Col>
              <Col>
                <p>Styled-components</p>
                <ProgressBar now={50} />
                <p>JavaScript</p>
                <ProgressBar now={70} />
                <p>ReactJS</p>
                <ProgressBar now={50} />
                <p>Shopfiy</p>
                <ProgressBar now={75} />
                <p>SalesForce</p>
                <ProgressBar now={55} />
              </Col>
            </Row>

            <Row>
              <h5>
                <strong>Backend Development</strong>
              </h5>
            </Row>
            <Row>
              <Col>
                <p>AWS</p>
                <ProgressBar now={70} />
                <p>php</p>
                <ProgressBar now={50} />
                <p>MySQL</p>
                <ProgressBar now={70} />
                <p>Java</p>
                <ProgressBar now={60} />
                <p>C++</p>
                <ProgressBar now={60} />
              </Col>
              <Col>
                <p>NodeJS</p>
                <ProgressBar now={40} />
                <p>JQuery</p>
                <ProgressBar now={70} />
                <p>Git/Github</p>
                <ProgressBar now={80} />
                <p>Python</p>
                <ProgressBar now={85} />
                <p>C#</p>
                <ProgressBar now={60} />
              </Col>
            </Row>

            <Row>
              <h5>
                <strong>Other</strong>
              </h5>
            </Row>
            <Row>
              <Col sm md lg="auto">
                <strong>
                  <p>Cybersecurity </p>
                </strong>
                <strong>
                  <p>Design </p>
                </strong>
                <strong>
                  <p>Digital Marketing</p>
                </strong>
                <strong>
                  <p>Communications/other </p>
                </strong>
              </Col>
              <Col>
                <p>
                  Wireshark, Autopsy, Snort, Splunk, Nmap, Burp, Kali linux, 5
                  Principles
                </p>
                <p>
                  <p>
                    Creative Brainstorming and Development, Adobe Creative Cloud
                    ,figma
                  </p>
                </p>
                <p>
                  Facebook, Instagram, Twitter Business, Google Ad words/Sense,
                  MailChimp, Search Engine Optimization (SEO), Data Analytics,
                  Brand Development, Sales
                </p>
                <p>Public speaking, Team management , MS office suite</p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h3>
            <strong> Experience</strong>
          </h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={3}>
                <strong>June 2020 - September 2020</strong>
              </Col>
              <Col>
                <h5>Software Engineering Intern, AFreeBird</h5>
                <ul>
                  <li>
                    Major refactoring of AFreeBird Front-end site using with
                    Django stack
                  </li>
                  <li>
                    Legacy code clean up and organization standards put in place
                  </li>
                  <li>Style guide creation</li>
                  <li>Salesforce Development (Building Lighting apps)</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>January 2015 - November 2019</strong>
              </Col>
              <Col>
                <h5>Head of Digital, Children’s Theatre Company</h5>
                <ul>
                  <li>
                    Website and social media management (150% increase in page
                    views and sizable increase in page rankings)
                  </li>
                  <li>
                    Development, expansion, and management of data analytics
                    (efforts lead to direct savings within marketing).
                    Development, consolidation, and management assets (Visual &
                    Style guides for Website, Facebook, Twitter posts)
                  </li>
                  <li>Site redesign and management</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>January 2015 - April 2016</strong>
              </Col>
              <Col>
                <h5>Digital Projects Manager, 1800 Lawyers</h5>
                <ul>
                  <li>
                    Providing expertise towards web and social media management
                    (50% increase in page views and increase in page ranking)
                  </li>
                  <li>
                    Development, expansion, and management of data analytics
                    (efforts lead to 10% cost reduction in marketing)
                  </li>
                  <li>Site redesign and management</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <strong>June 2011 - August 2011</strong>
              </Col>
              <Col>
                <h5>Software Engineering Intern, Accenture</h5>
                <ul>
                  <li>Internal Fullstack Web development</li>
                  <li>Reports & Organization of AFP-J Business Software</li>
                  <li>
                    Organizing files, copying, printing, and clerical work
                  </li>
                </ul>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h3>
            <strong> Education</strong>
          </h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col sm md lg="auto">
                <strong>2019 - 2020</strong>
              </Col>
              <Col>
                <p>
                  BS, Computer Science and Information Security,
                  <strong> John Jay College | Dean’s List | GPA : 3.8</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm md lg="auto">
                <strong>2017 - 2018</strong>
              </Col>
              <Col>
                <p>
                  AS, Computer Science,<strong> Bronx Community College</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm md lg="auto">
                <strong>2012 - 2015</strong>
              </Col>
              <Col>
                <p>
                  Computer Science Major,
                  <strong> Rochester Institute of Technology</strong>
                </p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Styles>
);
