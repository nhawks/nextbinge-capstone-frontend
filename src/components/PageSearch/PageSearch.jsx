import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Card, Form,} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

const PageSearch = (props) => {

    const [searchByTitle, setSearchByTitle] = useState(false);

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
                                color={!searchByTitle ? "primary" : "dark"}
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