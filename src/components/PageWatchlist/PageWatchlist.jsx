import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';


function PageWatchlist(props) {
    const baseURL = "https://api.themoviedb.org/3/"
    const imageURL = "https://image.tmdb.org/t/p/w500"

    return (
        <div className="container mt-4 mx-auto">
        <div className="mb-4">
            <h4 className="text-muted">My Watchlist</h4>
            <hr />
            <Row xs={2} md={4} lg={5} className="g-4">
                {props.watchlist.map((show) => (
                    <div className="text-center">
                        <Link to="/show-details" onClick={() => props.setShowID(show.tv_show_id)} >
                        <Card style={{ width: '200px' }} className="me-4">
                        <Card.Img variant="top" src={`${imageURL}${show.tv_show_data.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{show.tv_show_data.name}</Card.Title>
                        </Card.Body>
                        </Card>
                        </Link>
                    </div>
                ))}
            </Row>
        </div>
        </div> 
     );
}

export default PageWatchlist;