import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import NavbarController from "../components/ui/NavbarController";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavbarController />
      <Container fluid className="layout__container">
        <Row>
          <div className="layout__wrap">
            <Outlet />
          </div>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Layout;
