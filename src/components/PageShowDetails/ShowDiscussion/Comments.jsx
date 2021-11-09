import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Comments (props) {

    return ( 
        <div className = "row">
            <div className = "col-md-12">
                <h5 className="text-start p-2">
                    {props.userComments ? "See what others have to say!" : "Start the conversation!"}
                </h5>
                <ListGroup>
                {props.userComments.map((comment) => {
                    return (   
                        <ListGroupItem key={`${comment.id}`} className="border border-primary">
                            <Card className="">
                                <Card.Header className="text-start p-2">
                                    <div className="row row-cols-auto fs-5">
                                        <div className="col">
                                            <i className="bi bi-person-circle p-2"></i>
                                            {comment.username}
                                        </div>
                                        <div className="col">
                                            {/*//TODO: Like & Dislike Comment */}
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <p className="d-flex justify-content-start">
                                        {comment.message}
                                    </p>    
                                </Card.Body>
                            </Card>
                        </ListGroupItem>
                    )
                })}
                </ListGroup>
            </div>
        </div>
    );
}

export default Comments;