import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TMDB_API_KEY } from '../../../keys';

import ShowSeasons from '../ShowSeasons/ShowSeasons';

import { Card, Row, Col, Spinner} from 'react-bootstrap';
import ShowDiscussion from '../ShowDiscussion/ShowDiscussion';


const ShowDetails = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        try {
            const getShow = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${props.tv_id}`,
                {params: {
                    api_key: TMDB_API_KEY,
                    language: "en-US"
                }})
                setShow(response.data)
                setLoading(false)
            }
            getShow()
        } catch(err) {
            console.log("🚀 ~ file: ShowDetails.jsx ~ line 24 ~ useEffect ~ err", err)
        }

        
    }, []);

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <Card style={{ maxWidth: "75rem" }}>
            <Row >
                <Col md="4">
                <Card.Img 
                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                    alt={`${show.name}`} 
                    fluid
                />
                </Col>
                <Col md="8">
                <Card.Body>
                    <Card.Title>{show.name} ({show.first_air_date.slice(0, 4)})</Card.Title>
                    <Card.Text className="text-start lh-lg">
                        {show.overview}
                    </Card.Text>
                    <Card.Text className="lh-lg">
                        Number of seasons: {show.number_of_seasons}
                        <br />
                        Number of Episodes: {show.number_of_episodes}
                    </Card.Text>
                    <Card.Text className="text-muted">
                        Show Status: {show.status}
                    </Card.Text>
                    {/*//TODO: Add pagination to seasons accordion */}
                    <ShowSeasons show={show} />
                </Card.Body>
                </Col>
            </Row>
            <ShowDiscussion {...props} show={show} />
        </Card>
    )
}

export default ShowDetails