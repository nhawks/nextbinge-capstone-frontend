import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";

function UserRegister(props) {
  const [registerValues, setRegisterValues] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    streaming_providers: [],
  });

  const [has, setHas] = useState({
    netflix: false,
    prime: false,
    disney: false,
    hulu: false,
    hbo: false,
  });

  const handleChange = (event) => {
    setRegisterValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const services = [
    { displayName: "Netflix", value: "netflix" },
    { displayName: "Prime Video", value: "prime" },
    { displayName: "Disney+", value: "disney" },
    { displayName: "Hulu", value: "hulu" },
    { displayName: "HBOMax", value: "hbo" },
  ];

  const handleStream = (e) => {
    const serviceProvider = e.target.value;
    const streamingProviders = [...registerValues.streaming_providers];

    if (streamingProviders.includes(serviceProvider)) {
      const providerIndex = streamingProviders.indexOf(serviceProvider);
      streamingProviders.splice(providerIndex, 1);
    } else {
      streamingProviders.push(serviceProvider);
    }
    setRegisterValues((prevState) => ({
      ...prevState,
      streaming_providers: streamingProviders,
    }));
    setHas((prevState) => ({
      ...prevState,
      [e.target.name]: !has[e.target.name],
    }));
  };

  const registerUser = (e) => {
    e.preventDefault();
    props.register(registerValues, props.setUser);
  };

  return (
    <React.Fragment>
      <Form className="my-auto text-start" onSubmit={registerUser}>
        <hr />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="registerFormFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="first_name"
              value={registerValues.first_name}
              onChange={handleChange}
              type="text"
              placeholder="Enter first name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="registerFormLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="last_name"
              value={registerValues.last_name}
              onChange={handleChange}
              type="text"
              placeholder="Enter last name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="registerFormEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={registerValues.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="registerFormUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={registerValues.username}
              onChange={handleChange}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="registerFormPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={registerValues.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
        </Row>
        <Row>
          <br />
          <p className="text-center text-muted">
            Select your streaming providers
          </p>
          <div className="d-grid gap-4 d-md-block" align="center">
            {services.map((service) => (
              <MDBBtn
                type="button"
                color={has[service.value] ? "primary" : "muted"}
                value="Netflix"
                name={service.value}
                onClick={handleStream}
                className={`me-1 ${
                  has[service.value] ? "text-white" : "text-muted"
                }`}
              >
                {service.displayName}
              </MDBBtn>
            ))}
          </div>
        </Row>
        <br />
        <div className="d-grid col-8 mt-2 mb-2 mx-auto">
          <MDBBtn className="btn" color="primary" type="submit" rounded>
            Sign Up
          </MDBBtn>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default UserRegister;
