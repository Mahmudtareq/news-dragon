import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightSidebar from "../pages/Shared/RightSidebar/RightSidebar";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const NewsLayouts = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs="12" md="9" lg="9">
            <Outlet />
          </Col>
          <Col xs="12" md="3" lg="3">
            <RightSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NewsLayouts;
