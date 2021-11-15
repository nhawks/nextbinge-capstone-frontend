import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const StreamingProviderRow = (props) => {
  return (
    <>
      <p className="text-muted">Streaming On</p>
      <Row className="mb-4 justify-content-center row row-cols-auto gy-3">
        {Object.keys(props.streamingProviders).map((provider) => (
          <Col key={provider}>
            <Button
              onClick={() =>
                window.open(
                  props.streamingProviders[provider].us.link,
                  "_blank"
                )
              }
            >
              {provider}
              <i className="fas fa-external-link-alt ms-1"></i>
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StreamingProviderRow;
