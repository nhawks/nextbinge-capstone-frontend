import React from 'react';
import { ListGroupItem, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const ShowSeasons = ({ show }) => {

    const seasons = show.seasons

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="bg-dark">
                    Seasons: {show.number_of_seasons}{" "}
                    | Episodes: {show.number_of_episodes}
                </Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {/*//TODO: Map through number of seasons and display description */}
                        {seasons.map((season => (
                            <ListGroupItem>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{season.name}</h5>
                                    <small>Season {season.season_number} | Episodes {season.episode_count}</small>
                                </div>
                                <p className="mb-1 text-start">
                                    {season.overview}
                                </p>
                            </ListGroupItem>

                                
                        )))}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ShowSeasons