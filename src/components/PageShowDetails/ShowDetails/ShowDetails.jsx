import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TMDB_API_KEY } from '../../../keys';

import { Card, Row, Col, Spinner} from 'react-bootstrap';


const ShowDetails = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        try {
            axios.get(`https://api.themoviedb.org/3/tv/${props.tv_id}`,
            {params: {
                api_key: TMDB_API_KEY,
                language: "en-US"
            }})
            .then(response => {
                setShow(response.data)
                setLoading(false)
            })
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
        <React.Fragment>
            <Card style={{ maxWidth: '65%' }}>
                <Row className='g-0'>
                    <Col md='4'>
                    <Card.Img 
                        src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                        alt={`${show.name}`} 
                        fluid 
                    />
                    </Col>
                    <Col md='8'>
                    <Card.Body>
                        <Card.Title>{show.name}</Card.Title>
                        <Card.Text>
                            {show.overview}
                        </Card.Text>
                        <Card.Text>
                            <small className='text-muted'>Show Status: {show.status}</small>
                        </Card.Text>
                    </Card.Body>
                    </Col>
                </Row>
            </Card>
        </React.Fragment> 
    )
}

export default ShowDetails