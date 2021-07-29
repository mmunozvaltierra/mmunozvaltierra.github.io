import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Mauricio Munoz Valtierra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="nav-link">About</Nav.Link>
                    <Nav.Link href="#link" className="nav-link">Projects</Nav.Link>
                    <NavDropdown title="Contact" id="basic-nav-dropdown" className="nav-link">
                        <NavDropdown.Item href="mailto:mauriciomvaltierra@gmail.com">Email</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/mauricio-munoz-valtierra/">LinkedIn</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}