import React from 'react';
import { Card } from "react-bootstrap";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function AboutCard() {
    return ( 
        <Card>
        <Card.Header>About</Card.Header>
        <Card.Body>
            <Card.Text>
                Welcome to my solo capstone project, NextBinge! NextBinge helps users find their favorite shows in one application. With all the major networks starting their steaming service it has become complicated to keep up with what's on TV.
            </Card.Text>
            <Card.Text>
                Create a Watchlist.
                <br />
                Discuss the show with other users.
                <br />
                See where TV Shows are streaming.
                <br />
                Like/Dislike a TV Show.
                <br />
                Add a TV Show to your favorites.
                <br />
                Keep track of all the TV Shows that you've watched.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            Connect w/Me!
        </Card.Body>
            <Card.Text>
            <MDBBtn 
                size='lg' 
                floating 
                className="me-4"
                onClick={() => window.open("https://www.linkedin.com/in/nmhawkins/", "_blank")}
            >
                <MDBIcon fab icon="linkedin-in" className="fa-2x" />
            </MDBBtn>
            <MDBBtn 
                size='lg' 
                floating 
                color="dark"
                onClick={() => window.open("https://github.com/nhawks", "_blank")}
            >
                <MDBIcon fab icon="github" className="fa-2x" />
            </MDBBtn>
            </Card.Text>
        <Card.Footer>Created by NiGeanya Hawkins</Card.Footer>
        </Card>
     );
}

export default AboutCard;