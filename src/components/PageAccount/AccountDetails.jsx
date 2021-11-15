import React from "react";
import { Card } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";

const AccountDetails = ({ user }) => {
  return (
    <Card>
      <Card.Header>Personal Info</Card.Header>
      <Card.Body>
        {user.first_name} {user.last_name} | {user.username}
      </Card.Body>
      <Card.Body>{user.email}</Card.Body>
      <hr />
      My Streaming Providers
      <Card.Body className="mb-2">
        <div className="d-grid gap-4 d-md-block" align="center">
          {user.streaming_providers.map((service) => (
            <MDBBtn
              key={service}
              type="button"
              color="primary"
              name={service}
              className="me-2"
              rounded
            >
              {service}
            </MDBBtn>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccountDetails;
