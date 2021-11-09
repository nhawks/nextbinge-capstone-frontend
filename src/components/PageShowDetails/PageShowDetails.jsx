import React from 'react';
import ShowDetails from './ShowDetails/ShowDetails';
import { Col, Container, Row } from 'react-bootstrap';

const PageShowDetails = (props) => {
    return (
        <Container fluid align="center" className="mt-4">
            <Row className="row align-center">
                <Col>
                    <ShowDetails {...props} />
                </Col>
            </Row>
        </Container>
    )
}

export default PageShowDetails