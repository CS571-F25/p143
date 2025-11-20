import { Form, Button } from "react-bootstrap";

function AccountPage() {
  return (
    <div>
      <h1 className="mb-3">Account</h1>
      <p className="mb-4">
        This page will eventually allow fans to create accounts, log in, and
        manage their ratings and reviews. For this milestone, it serves as a
        visual placeholder showing where authentication and profile features
        will live.
      </p>

      <Form style={{ maxWidth: "400px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email (mock only)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password (mock only)" />
        </Form.Group>

        <Button variant="warning" type="submit">
          Log In (Placeholder)
        </Button>
      </Form>
    </div>
  );
}

export default AccountPage;