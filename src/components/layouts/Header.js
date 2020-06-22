import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../logo.png';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
    return (
        <header>
            <Container fluid="lg">
                <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-header">
                    <div className="logo">
                        <Navbar.Brand href="#">
                            <img
                                src={logo}
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <div className="logo-text">Premier <br></br>League <br></br>Stats</div>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/">
                                <Nav.Link>
                                    Standings
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/fixtures">
                                <Nav.Link>
                                    Fixtures
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/best-scorers">
                                <Nav.Link>
                                    Best scorers
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/teams-info">
                                <Nav.Link>
                                    Teams info
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/epl-winners">
                                <Nav.Link>
                                    Historical EPL winners
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <hr className="custom"></hr>
            </Container>
        </header>
    )
}
