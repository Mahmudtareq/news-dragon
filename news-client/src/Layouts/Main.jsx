/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "../pages/Shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../pages/Shared/RightSidebar/RightSidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs="12" md="3" lg="3">
            <LeftSidebar />
          </Col>
          <Col xs="12" md="6" lg="6">
            <Outlet />
          </Col>
          <Col xs="12" md="3" lg="3">
            <RightSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
