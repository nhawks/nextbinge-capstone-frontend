import React, { useState } from "react";
import axios from "axios";

import { FormControl, Button, FloatingLabel, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ReplyForm = (props) => {
  const [messageBody, setMessageBody] = useState({
    comment: props.commentID,
    username: props.username,
    message: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    setMessageBody((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const postMessageBody = async () => {
        try {
          const jwt = localStorage.getItem("token");
          await axios
            .post("http://localhost:8000/api/discussions/reply", messageBody, {
              headers: { Authorization: `Bearer ${jwt}` },
            })
            .then(() => {
              setMessageBody((prevState) => ({
                ...prevState,
                message: "",
              }));
              setValidated(true);
            });
          props.getDiscussion();
        } catch (err) {
          console.log(
            "🚀 ~ file: ReplyForm.jsx ~ line 45 ~ postMessageBody ~ err",
            err
          );
        }
      };
      postMessageBody();
    }
    event.preventDefault();
    setValidated(false);
  };

  return (
    <Row className="g-2 mb-5">
      <Form
        className="d-flex"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Col>
          <Form.Group controlId="messageValidation">
            <FloatingLabel label={`Reply to ${props.commentOP}...`}>
              <FormControl
                type="text"
                placeholder="Discussion"
                aria-label="message"
                name="message"
                onChange={handleChange}
                value={messageBody.message}
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>
        <Button variant="primary" type="submit" size="lg">
          Reply
        </Button>
      </Form>
    </Row>
  );
};

export default ReplyForm;
