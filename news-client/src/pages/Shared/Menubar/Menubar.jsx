/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary my-4">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="d-flex ">
          <Nav.Link eventKey={2} href="#memes">
            Login
          </Nav.Link>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Menubar;
