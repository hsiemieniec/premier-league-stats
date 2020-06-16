import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../logo.png';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar bg="default" variant="header">
                <img
                    src={logo}
                    height="80"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand href="#home">Premier <br></br>League <br></br>Stats</Navbar.Brand>
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
            </Navbar>
            <hr className="custom"></hr>
        </header>
    )
}
