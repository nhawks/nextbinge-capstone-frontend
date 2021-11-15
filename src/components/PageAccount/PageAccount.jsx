import React from 'react';
import { Col, Row, Tabs, Tab, Card } from 'react-bootstrap';
import { MDBCard } from 'mdb-react-ui-kit';
import AccountDetails from './AccountDetails';

const PageAccount = (props) => {
    return (
        <div className="row justify-content-center mt-4">
            <Col xs={12} md={3} align="center" className="mb-4">
                <AccountDetails {...props} />
            </Col>
            <Col xs={12} md={8} align="center">
                <Card>
                    {/* <Card.Header> */}
                <Tabs defaultActiveKey="favorites" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="favorites" title="Favorites">
                        {/* <AccountFavorites {...props} /> */}
                    </Tab>
                    <Tab eventKey="archive" title="Archive">
                        {/* <AccountArchive {...props} /> */}
                    </Tab>
                </Tabs>
                {/* </Card.Header> */}
                </Card>
                </Col>
        </div>
    )
}

export default PageAccount