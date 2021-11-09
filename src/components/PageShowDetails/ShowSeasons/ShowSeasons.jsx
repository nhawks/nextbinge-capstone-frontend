import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TMDB_API_KEY } from '../../../keys';

import { Card, Row, Col, Spinner} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const ShowSeasons = ({ show }) => {

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Seasons: {show.number_of_seasons}{" "}
                    | Episodes: {show.number_of_episodes}
                </Accordion.Header>
                <Accordion.Body>
                    {/*//TODO: Map through number of seasons and display description */}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ShowSeasons