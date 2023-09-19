import { Container } from "react-bootstrap";
import Menubar from "../pages/Shared/Menubar/Menubar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <Container>
      <Menubar />
      <Outlet />
    </Container>
  );
};

export default LoginLayout;
