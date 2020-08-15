import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function(props){
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Orla 500</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicial</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/casas">Casas e terrenos</Nav.Link>
            <Nav.Link href="/vender">Vender</Nav.Link>
            <NavDropdown title="Entre em contato" id="basic-nav-dropdown">
              <NavDropdown.Item href="/associar_se">Assossiar</NavDropdown.Item>
              <NavDropdown.Item href="/desassociar_se">Desassociar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/fale_conosco">Fale conosco</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}