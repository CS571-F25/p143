import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2 className="mb-3">Registration Complete (Placeholder)</h2>
        <p>
          This is a prototype. In a full version of the site, this form would
          create a real account and allow you to save reviews across devices.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-4">
      <h2 className="mb-3">Create an Account</h2>

      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3" controlId="registerName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create a password"
            required
          />
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3" controlId="registerConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            required
          />
        </Form.Group>

        <Button type="submit" className="btn-travis">
          Register (Placeholder)
        </Button>
      </Form>
    </section>
  );
}

export default RegisterForm;