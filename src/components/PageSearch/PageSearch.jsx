import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Card, FloatingLabel, Form, Spinner, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { genres } from './GenreList';
import axios from 'axios';
import { TMDB_API_KEY } from '../../keys';


const PageSearch = (props) => {

    const [searchByTitle, setSearchByTitle] = useState(null);
    const [loading, setLoading] = useState(false)
    const [genreID, setGenreID] = useState()
    const [query, setQuery] = useState ("")
    const [searchResults, setSearchResults] = useState([]);

    const baseURL = "https://api.themoviedb.org/3/"
    const idSearchURL = `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&with_genres=${genreID}&watch_region=US`
    const querySearchURL = `search/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&query=${query.query}`
    const imageURL = "https://image.tmdb.org/t/p/w500/"


    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            setLoading(true)
            const response = await axios.get(`${baseURL}${searchByTitle ? querySearchURL : idSearchURL}`)
            setSearchResults(response.data.results)
            setLoading(false)
        } catch(err) {
            console.log("🚀 ~ file: PageSearch.jsx ~ line 39 ~ handleSubmit ~ err", err)
        }
    }

    
    

    const handleChange = (event) => {
        setQuery(prevState => ({
            ...prevState, query: event.target.value
        }));
    }

    return (
        <div className="row justify-content-center mt-4">
            <Col xs={12} md={3} align="center" className="mb-4">
                <Card>
                    <Card.Header>Search By</Card.Header>
                    <Card.Body>
                        <div className="d-grid gap-2 mx-auto">
                            <MDBBtn
                                tag="a"
                                rounded
                                color={!searchByTitle && searchByTitle !== null ? "primary" : "dark"}
                                onClick={() => setSearchByTitle(false)}
                            >
                                Genre
                            </MDBBtn>
                            <MDBBtn
                                tag="a"
                                rounded
                                color={searchByTitle ? "primary" : "dark"}
                                onClick={() => setSearchByTitle(true)}
                            >
                                Title
                            </MDBBtn>
                        </div>
                    </Card.Body>
                    <Form onSubmit={handleSubmit}>
                    {!searchByTitle && searchByTitle !== null && (
                        <Card.Body>
                        <FloatingLabel controlId="genreSelector" label="Genres">
                        <Form.Select 
                            className="bg-dark text-white"
                            onChange={(e) => {setGenreID(e.target.value)}}
                        >
                            <option  selected disabled value="">Select a Genre...</option>
                            {genres.map((genre) => (
                                <option value={genre.id}>{genre.name}</option>
                            ))}
                        </Form.Select>
                        </FloatingLabel>
                        </Card.Body>
                    )}
                    {searchByTitle && (
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control 
                                    placeholder="Enter Title" 
                                    className="bg-dark text-white"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Card.Body>
                    )}
                    {searchByTitle !== null && (
                        <div className="d-grid mx-auto col-10">
                            <MDBBtn
                                rounded
                                className='mb-3'  
                                tag='input' 
                                type='submit' 
                            />
                        </div>
                    )}
                    </Form>
                </Card>
            </Col>
            <Col xs={12} md={8} align="center">
                <Card>
                    <Card.Header>Search Results</Card.Header>
                    <Card.Body>
                    {loading && (
                        <div align="center">
                        <Spinner animation="border" role="status" className="align-self-center">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        </div>
                    )}
                    <Row xs={1} md={3} className="g-4 justify-content-center">
                    {!loading && (
                        searchResults.map((show) => (
                            <Link to="/show-details" onClick={() => props.setShowID(show.id)} >
                            <Card style={{ width: '250px' }} className="me-4" key={show.id}>
                            <Card.Img variant="top" src={`${imageURL}${show.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{show.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            </Link>
                        ))
                    )}
                    </Row>
                    
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}


export default PageSearch;