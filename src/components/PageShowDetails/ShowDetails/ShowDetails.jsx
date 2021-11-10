import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TMDB_API_KEY } from '../../../keys';

import ShowSeasons from '../ShowSeasons/ShowSeasons';
import ShowDiscussion from '../ShowDiscussion/ShowDiscussion';
import UserRowIcons from '../UserRowIcons/UserRowIcons';

import { Card, Row, Col, Spinner} from 'react-bootstrap';



const ShowDetails = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [show, setShow] = useState(props.show);
    const [userRelationship, setUserRelationship] = useState({
        databaseID: null,
        isFavorite: false,
        likedShow: null,
        watchedShow: false,
    });

    useEffect(() => {
        try {
            const getShow = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${props.showID}`,
                {params: {
                    api_key: TMDB_API_KEY,
                    language: "en-US"
                }})
                if (showHasUserInput) {
                    setUserRelationship({
                        databaseID: showHasUserInput.id,
                        isFavorite: showHasUserInput.is_favorite,
                        likedShow: showHasUserInput.liked_show,
                        watchedShow: true,
                    })
                }
                setShow(response.data)
                setLoading(false)
            }
            
            console.log("🚀 ~ file: ShowDetails.jsx ~ line 24 ~ useEffect ran")
            getShow()
        } catch(err) {
            console.log("🚀 ~ file: ShowDetails.jsx ~ line 24 ~ useEffect ~ err", err)
        }

        
    }, [props.watchedShows]);

    const showHasUserInput = props.watchedShows.find(show => show.tv_show_id === props.showID)

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
                    <Card.Text className="text-muted">
                        {show.tagline}
                    </Card.Text>
                    <Card.Text className="text-start lh-lg">
                        {show.overview}
                    </Card.Text>
                    <Card.Text className="text-muted">
                        Show Status: {show.status}
                    </Card.Text>
                    <UserRowIcons {...props} {...userRelationship} show={userRelationship.watchedShow ? userRelationship : show} />
                    <ShowSeasons show={show} /> {/*//TODO: Add pagination to seasons accordion */}
                </Card.Body>
                </Col>
            </Row>
            <ShowDiscussion {...props} show={show} />
        </Card>
    )
}

export default ShowDetails