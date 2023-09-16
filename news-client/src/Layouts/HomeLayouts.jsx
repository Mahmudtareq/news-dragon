/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "../pages/Shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../pages/Shared/RightSidebar/RightSidebar";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  return (
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
  );
};

export default HomeLayouts;
