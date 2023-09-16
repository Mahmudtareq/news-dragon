/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";
import Menubar from "../Menubar/Menubar";

const Header = () => {
  return (
    <Container className="my-3">
      <div className="text-center">
        <img src={logo} alt="logo" className="header_logo" />
        <p className="header_text">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="header_dateYear">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex flex-shrink-0 mt-4 align-items-center gap-3 marquee-text p-2">
        <Button variant="danger">Latest</Button>
        <Marquee
          speed={60}
          direction="right"
          className="text-danger fs-5 fw-600 "
        >
          I can be a React component, multiple React components, or just some
          text...... I can be a React component, multiple React components, or
          just some text......
        </Marquee>
      </div>
      <Menubar />
    </Container>
  );
};

export default Header;
