import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Styles = styled.div`


`;

export const Footer = () => (
    <Styles>
        <footer id='foot' className='mt-5 fixed-bottom'>
            <Container>
                <Row id="colored" className="border-top justify-content-between p-3">
                    <Col className="p-8" md={3} sm={12}>
                        &#169; James Stefanik 2020
                    </Col>
                    <Col className="p-8 d-flex justify-content-end" md={3} sm={12}>
                        <a href='https://github.com/hiityu'>github</a> ,   <a href='https://www.linkedin.com/in/james-stefanik-532382a4/'>linkedin</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    </Styles>
) 