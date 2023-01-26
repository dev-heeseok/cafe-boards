import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  const handleClicked = () => {
    setExpanded(false);
  };

  const expand = "sm";

  return (
    <>
      <Navbar
        key={expand}
        bg="light"
        expand={expand}
        className="mb-3"
        onToggle={handleToggle}
        expanded={isExpanded}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/brand/logo-img.svg`}
              alt="logo-img"
              className={styles["logo-img"]}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/brand/logo-text.svg`}
              alt="logo-text"
              className={styles["logo-text"]}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
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
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="hidden-item"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 hidden-item"
                  aria-label="Search"
                />
                <Button className="hidden-item" variant="outline-success">
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MainMenu;
