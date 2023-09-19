import { Container } from "react-bootstrap";
import Menubar from "../Menubar/Menubar";
import Header from "../Header/Header";

const TopHeader = () => {
  return (
    <Container>
      <Header />
      <Menubar />
    </Container>
  );
};

export default TopHeader;
