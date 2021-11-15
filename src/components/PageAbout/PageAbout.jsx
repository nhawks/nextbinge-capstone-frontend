import { Card, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import TechCard from "./TechCard";

function PageAbout() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-4">
        <Col xs={12} md={4} align="center" className="mb-4">
          <AboutCard />
        </Col>
        <Col xs={12} md={7} align="center">
          <TechCard />
        </Col>
      </div>
    </div>
  );
}

export default PageAbout;
