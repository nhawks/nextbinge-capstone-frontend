import React, { useState } from "react";
import { Button, Row, Col, Modal } from "react-bootstrap";

const StreamingProviderRow = (props) => {
  const [showModal, setShowModal] = useState(false);

  const buttonData = {
    netflix: { color: "#E50914", name: "Netflix" },
    prime: { color: "#00A8E1", name: "Prime Video" },
    hulu: { color: "#5822b4", name: "Hulu" },
    disney: { color: "#1ce783", name: "Disney+" },
    hbo: { color: "#991eeb", name: "HBOMAX" },
  };

  return (
    <>
      <p className="text-muted">Streaming On</p>
      <Row className="mb-4 justify-content-center row row-cols-auto gy-3">
        {Object.keys(props.streamingProviders).map((provider) => (
          <Col>
            {provider in buttonData && (
              <Button
                onClick={() =>
                  window.open(
                    props.streamingProviders[provider].us.link,
                    "_blank"
                  )
                }
                style={{ backgroundColor: buttonData[provider].color }}
              >
                {buttonData[provider].name}
                <i class="fas fa-external-link-alt ms-1"></i>
              </Button>
            )}
            {!(provider in buttonData) && (
              <Button
                onClick={() =>
                  window.open(
                    props.streamingProviders[provider].us.link,
                    "_blank"
                  )
                }
              >
                {provider}
                <i class="fas fa-external-link-alt ms-1"></i>
              </Button>
            )}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StreamingProviderRow;
