import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm.jsx";

function AccountPage() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <h1 className="mb-3">Account</h1>
      <p className="mb-4">
        Log in to rate albums and songs, write reviews, and manage your
        favorites. Registration is shown as a placeholder for this prototype.
      </p>

      {!showRegister ? (
        <>
          {/* Login Form */}
          <h2 className="mb-3">Log In</h2>
          <Form style={{ maxWidth: "400px" }}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>

            <div className="d-flex gap-3">
              <Button className="btn-travis" type="submit">
                Log In (Placeholder)
              </Button>

              <Button
                variant="outline-light"
                className="btn-travis-outline"
                type="button"
                onClick={() => setShowRegister(true)}
              >
                Register
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <>
          <RegisterForm />
          <Button
            variant="outline-light"
            className="btn-travis-outline"
            onClick={() => setShowRegister(false)}
          >
            Back to Login
          </Button>
        </>
      )}
    </div>
  );
}

export default AccountPage;