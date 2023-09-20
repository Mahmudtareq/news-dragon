/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../Qzone/QZone";
import "./RightSidebar.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const RightSidebar = () => {
  const { googleLoginUser } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLoginUser()
      .then((result) => {
        const googleUser = result.user;
        toast("user login successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Container className="my-4">
      <div className="mb-8">
        <h4 className="fs-4 text-start mb-3">Login With</h4>
        <div className="d-flex flex-column gap-3">
          <Button
            className="d-flex align-items-center justify-content-center"
            variant="outline-primary"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="me-2" />
            Login With Google
          </Button>
          <Button
            className="d-flex align-items-center justify-content-center"
            variant="outline-secondary"
          >
            {" "}
            <FaGithub className="me-2" />
            Login With Github
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="fs-4 text-start mb-3  ">Find Us On</h1>
        <ListGroup>
          <ListGroup.Item className="hover:bg-primary">
            <FaFacebook className="text-primary me-2 fs-5" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-primary me-2 fs-5" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-primary me-2 fs-5" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div className="background-container rounded-3">
        <div className="text-content">
          <h1 className="header-text">Create an Amazing Newspaper</h1>
          <p className="text-para">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger" className="mt-2">
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default RightSidebar;
