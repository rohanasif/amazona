import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" varient="dark" expand="lg" collapseOnSelect>
        <Container className="container border">
          <LinkContainer to="/">
            <Nav.Link to="/">
              <Navbar.Brand className="text-white">
                Vvork-Tech-Store
              </Navbar.Brand>
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-end w-100">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart "></i>cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>SignIn
                  </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
