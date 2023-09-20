import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="">
      <h1>Accept terms and condition</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia
        sit, minima quod debitis incidunt obcaecati deserunt facilis accusantium
        a quisquam saepe in delectus fuga porro natus ipsa libero ad
        voluptatibus excepturi corporis praesentium consequatur! Architecto
        harum quod non, soluta dicta voluptatum dolor, odio dolores repellendus
        quo, quidem officia reiciendis.
      </p>
      <Button variant="primary">
        <Link to="/register" className="text-white text-decoration-none">
          Back
        </Link>
      </Button>
    </Container>
  );
};

export default Terms;
