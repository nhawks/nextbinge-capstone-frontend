import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

import { ListGroupItem, Image, Row, Col } from "react-bootstrap";

const ShowSeasons = ({ show }) => {
  const seasons = show.seasons;

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="text-white">
            Seasons: {show.number_of_seasons} | Episodes:{" "}
            {show.number_of_episodes}
          </p>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            {seasons
              .filter((season) => season.season_number !== 0)
              .map((season) => (
                <ListGroupItem className="mt-2" key={season.season_number}>
                  <Row className="g-0">
                    <Col md="3" className="me-4">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                        alt={`${show.name}`}
                        fluid
                        rounded
                        className="img-fluid"
                      />
                    </Col>
                    <Col md="8">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{season.name}</h5>
                        <small>
                          Season {season.season_number} | Episodes{" "}
                          {season.episode_count}
                        </small>
                      </div>
                      <hr />
                      <p className="mb-1 text-start">{season.overview}</p>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ShowSeasons;
