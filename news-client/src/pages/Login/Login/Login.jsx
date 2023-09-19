import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto card-body shadow-sm p-4">
      <h4 className="header-text">Login your account</h4>
      <hr className="my-4" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Login
        </Button>
        <Form.Group className="mb-3 text-center mt-3">
          <Form.Label>
            Dont’t Have An Account ?{" "}
            <Link to="/register" className="text-danger">
              {" "}
              Register
            </Link>{" "}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 text-center mt-3">
          <Form.Text className="text-muted">
            never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
