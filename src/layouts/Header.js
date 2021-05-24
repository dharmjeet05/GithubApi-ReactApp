import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { UserContext } from "../context/UserContext";

// Styles
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" light expand="md">
      <Container>
        <NavbarBrand>
          <Link to="/" className="text-white text-decoration-none">
            Github App
          </Link>
        </NavbarBrand>
        <NavbarText className="text-white">
          {context.user?.email ? context.user.email : ""}
        </NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {context.user ? (
              <NavItem>
                <NavLink
                  onClick={() => {
                    context.setUser(null);
                  }}
                  className="text-white text-decoration-none logout-btn"
                >
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/signup"
                    className="text-white text-decoration-none"
                  >
                    Signup
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/signin"
                    className="text-white text-decoration-none"
                  >
                    Signin
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
