import React from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import CommentForm from './CommentForm';
import ReplyForm from './ReplyForm';

const Replies = (props) => {

    const userReplies = props.discussion[1]

    return (
        
        <Accordion>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="bg-dark">
                    <p className="text-white">
                        <i className="bi bi-reply me-1"></i>
                        View replies to {props.commentOP}
                    </p>
                </Accordion.Header>
                <Accordion.Body>
                    <ReplyForm {...props} />
                    {userReplies.filter(reply => reply.comment === props.commentID)
                        .map((reply) => (
                            <Card className="mb-3">
                                <Card.Header className="text-start p-2">
                                    <div className="row row-cols-auto fs-5">
                                        <div className="col">
                                            <i className="bi bi-person-circle p-2"></i>
                                            {reply.username}
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <p className="d-flex justify-content-start">
                                        {reply.message}
                                    </p>    
                                </Card.Body>
                            </Card>
                    ))}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Replies;