import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" varient="dark" expand="lg" collapseOnSelect>
        <Container>
          <Nav.Link to="/">
            <Navbar.Brand className='text-light'>Vvork-tech-Store</Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle arial-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end ">
            <Nav style={{width:"100%" , display:"flex" , justifyContent:"end"}}>
              <Nav.Link to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart text-light gx-2">Cart</i>
                </Nav.Link>
              </Nav.Link>
              <Nav.Link to="/login">
                <Nav.Link>
                  <i className="fas fa-shopping-cart text-light">sign In</i>
                </Nav.Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header> 
  );
};

export default Header;
