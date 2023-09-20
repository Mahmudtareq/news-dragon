/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Menubar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then((result) => {
        toast("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary my-4">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Link
              to="/category/0"
              className={`text-decoration-none ${
                navigate === "/" ? "text-yellow-100" : "text-primary"
              }`}
            >
              Home
            </Link>
            <Link to="/about" className="text-decoration-none">
              About
            </Link>

            <Link to="/career" className="text-decoration-none">
              Career
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto">
          {user ? (
            <div className="d-flex gap-2 align-items-center">
              <span>
                <FaUserCircle className="fs-2" />
              </span>
              <span>{user.displayName?.slice(0, 6)}</span>
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-decoration-none btn btn-secondary"
            >
              Login
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menubar;
