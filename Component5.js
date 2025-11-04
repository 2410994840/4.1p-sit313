import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

function Email() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };

  return (
    <div style={{ background: "#e0e0e0", padding: "10px" }}>
      <Form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
        <strong style={{ marginRight: "15px", fontSize: "16px" }}>
          SIGN UP FOR OUR DAILY INSIDER
        </strong>

        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: "1", marginRight: "10px" }}
        />

        <Button color="grey">Subscribe</Button>
      </Form>

      {submittedEmail && (
        <p style={{ marginTop: "10px" }}>
          Thanks for subscribing: <strong>{submittedEmail}</strong>
        </p>
      )}
    </div>
  );
}

export default Email;
