import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ViewerScoreIcon from './ViewerScoreIcon';
import WatchListIcon from './WatchListIcon';
import WatchedShowIcon from './WatchedShowIcon';
import FavoriteIcon from './FavoriteIcon';
import LikeDislikeIcon from './LikeDislikeIcon';
import PlayTrailerIcon from './PlayTrailerIcon';


const UserRowIcons = (props) => {
    return (
        <>
            <Row className="row align-center mb-4">
                <Col>
                    <ViewerScoreIcon {...props} />
                    <WatchListIcon {...props} />
                    <WatchedShowIcon {...props} />
                    <FavoriteIcon {...props} />
                    <PlayTrailerIcon {...props} />
                </Col>
            </Row>
            <Row className="row align-center mb-4">

                <Col>
                    <LikeDislikeIcon {...props} />
                </Col>
            </Row>
        </>
    )
}

export default UserRowIcons