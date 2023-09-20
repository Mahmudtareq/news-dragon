/* eslint-disable no-unused-vars */
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  // create new user
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        toast("user create successfully");
        form.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };
  return (
    <div className="mx-auto card-body shadow-sm p-4">
      <h4 className="header-text">Register your account</h4>
      <hr className="my-4" />
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo Url"
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
          <Form.Check
            type="checkbox"
            name="accept"
            onClick={handleAccepted}
            label={
              <>
                Accept <Link to="/terms">Term & Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          disabled={!accepted}
          className="w-100"
        >
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
