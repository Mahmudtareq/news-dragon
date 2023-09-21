/* eslint-disable no-unused-vars */
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const gotoLocation = location.state?.from?.pathname || "/category/0";
  // login handle
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser)
        toast("Login Successfully");
        form.reset();
        navigate(gotoLocation, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto card-body shadow-sm p-4">
      <h4 className="header-text">Login your account</h4>
      <hr className="my-4" />
      <Form onSubmit={handleSignIn}>
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
