import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavbarController = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  const handleClicked = () => {
    setExpanded(false);
  };

  const expand = "sm";
  const placement = "end";

  return (
    <>
      <Navbar
        key={expand}
        bg="light"
        expand={expand}
        className="mb-3 nav__logo"
        onToggle={handleToggle}
        expanded={isExpanded}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/img.svg`}
              alt="logo"
              className="nav__img"
            />
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/text.svg`}
              alt="logo text"
              className="nav__text"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement={placement}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={handleClicked}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/menu" onClick={handleClicked}>
                  Menu
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={handleClicked}>
                  About
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarController;
