import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
    .navbar{
        background-color: white;
        padding-top: 30px;
        margin
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: black;

        &: hover{
            color: #bbb;
        }
    }
`;

export const Navigationbar = () => (
    <Styles>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/"> James Stefanik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/about">About </Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/work">Work </Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact </Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
)