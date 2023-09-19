import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="mx-auto card-body shadow-sm p-4">
      <h4 className="header-text">Register your account</h4>
      <hr className="my-4" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept Term & Conditions" />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Register
        </Button>
        <Form.Group className="mb-3 text-center mt-3">
          <Form.Label>
            You Have An Account ?{" "}
            <Link to="/login" className="text-danger">
              {" "}
              Login
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

export default Register;
