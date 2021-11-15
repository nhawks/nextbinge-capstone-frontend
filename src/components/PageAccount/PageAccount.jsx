import React from "react";
import { Col, Tabs, Tab, Card } from "react-bootstrap";
import AccountDetails from "./AccountDetails";
import AccountFavorites from "./AccountFavorites";
import AccountWatchedShows from "./AccountWatchedShows";

const PageAccount = (props) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-4">
        <Col xs={12} md={3} align="center" className="mb-4">
          <AccountDetails {...props} />
        </Col>
        <Col xs={12} md={8} align="center">
          <Card>
            <Tabs
              defaultActiveKey="favorites"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="favorites" title="Favorites">
                <AccountFavorites {...props} />
              </Tab>
              <Tab eventKey="watched" title="Watched">
                <AccountWatchedShows {...props} />
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default PageAccount;
