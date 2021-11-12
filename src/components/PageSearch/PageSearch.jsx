import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Card, FloatingLabel, Form,} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { genres } from './GenreList';

const PageSearch = (props) => {

    const [searchByTitle, setSearchByTitle] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("ran")
    }, [searchByTitle]);

    

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-2" align="center">
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
                    {!searchByTitle && (
                        <Card.Body>
                        <FloatingLabel controlId="genreSelector" label="Genres">
                        <Form.Select className="bg-dark text-white">
                            <option  selected disabled value="">Select a Genre...</option>
                            {genres.map((genre) => (
                                <option value={genre.id}>{genre.name}</option>
                            ))}
                        </Form.Select>
                        </FloatingLabel>
                        </Card.Body>
                        

                    )}
                    {searchByTitle && (

                        null

                    )}
                </Card>
            </div>
            <div className="col-8">
                <Card>
                    <Card.Header>Search Results</Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}


export default PageSearch;