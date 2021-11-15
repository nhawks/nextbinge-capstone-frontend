import React from 'react';
import { Card } from "react-bootstrap";


function TechCard() {
    return ( 
        <Card>
            <Card.Header>Project Stack & Technologies</Card.Header>
            <Card.Body>
                Front End & Styling
            </Card.Body>
            <Card.Text>
                <i className="devicon-javascript-plain colored fa-3x me-2"></i>
                <i class="devicon-react-original-wordmark colored fa-3x me-2"></i>
                <i class="devicon-bootstrap-plain-wordmark fa-3x me-2"></i>
                <i class="fab fa-mdb fa-3x me-2"></i>
                <i className="fab fa-3x">
                    <img 
                    src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4" 
                    width="40" height="40"
                    alt="React-Bootstrap" 
                />
                </i>
            </Card.Text>
            <hr />
            <Card.Body>
                Back End & Database
            </Card.Body>
            <Card.Text>
            <i class="devicon-python-plain colored fa-3x me-2"></i>
            <i class="devicon-django-plain fa-3x me-2"></i>
            <i class="devicon-mysql-plain fa-3x"></i>
            </Card.Text>
            <hr />
            <Card.Body>
                APIs & Technologies
            </Card.Body>
            <Card.Text className="mb-4">
                <i className="fab fa-3x me-2">
                    <img 
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        width="40" height="40"
                        className="me-2"
                        alt="The Movie Database"
                    />
                </i>
                <i className="fab fa-3x me-2">
                    <img 
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
                    width="40" height="40"
                    alt="postman" 
                />
                </i>
                <i className="fab fa-3x me-2">
                    <img 
                    src="https://axios-http.com/assets/logo.svg" 
                    width="40" height="40"
                    alt="Axios" 
                    className="bg-white"
                />
                </i>
                <i className="fab fa-3x me-2">
                    <img 
                    src="https://rapidapi-prod-collections.s3.amazonaws.com/org/65883a45-41aa-4de6-9de9-3c39908d3f89.png" 
                    width="40" height="40"
                    alt="Movie of the Night" 
                />
                </i>
                <i className="fab fa-youtube fa-3x"></i>
            </Card.Text>
        </Card>
    );
}

export default TechCard;