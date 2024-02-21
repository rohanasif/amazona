import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../../action/userAction";

function Header() {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    // console.log('logout');
    dispatch(logout())
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
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
              {
                userInfo ? (
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              }
                {userInfo && userInfo.isAdmin && (
                                   <NavDropdown title="admin" id="adminmenu">
                                   <LinkContainer to="/admin/userlist">
                                       <NavDropdown.Item>Users</NavDropdown.Item>
                                   </LinkContainer>
                                   <LinkContainer to="/admin/productlist">
                                       <NavDropdown.Item>Products</NavDropdown.Item>
                                   </LinkContainer>
                                   <LinkContainer to="/admin/orderlist">
                                       <NavDropdown.Item>Orders</NavDropdown.Item>
                                   </LinkContainer>
                               </NavDropdown> )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
