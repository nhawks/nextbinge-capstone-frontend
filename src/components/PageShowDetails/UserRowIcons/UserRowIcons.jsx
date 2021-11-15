import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ViewerScoreIcon from "./ViewerScoreIcon";
import WatchListIcon from "./WatchListIcon";
import WatchedShowIcon from "./WatchedShowIcon";
import FavoriteIcon from "./FavoriteIcon";
import LikeDislikeIcon from "./LikeDislikeIcon";
import PlayTrailerIcon from "./PlayTrailerIcon";

const UserRowIcons = (props) => {
  return (
    <>
      <Row className="justify-content-center mb-3">
        <Col className="col-md-6">
          <ViewerScoreIcon {...props} />
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center row row-cols-auto gy-3">
        <Col>
          <WatchListIcon {...props} />
        </Col>
        <Col>
          <WatchedShowIcon {...props} />
        </Col>
        <Col>
          <FavoriteIcon {...props} />
        </Col>
        <Col>
          <LikeDislikeIcon {...props} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <PlayTrailerIcon {...props} />
        </Col>
      </Row>
    </>
  );
};

export default UserRowIcons;
