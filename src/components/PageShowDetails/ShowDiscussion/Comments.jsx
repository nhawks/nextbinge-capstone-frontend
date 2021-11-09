import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CommentVote from './CommentVote';
import Replies from './Replies';


function Comments (props) {

    const userComments = props.discussion[0]

    return ( 
        <div className = "row">
            <div className = "col-md-12">
                <h5 className="text-start p-2">
                    {userComments ? "See what others have to say!" : "Start the conversation!"}
                </h5>
                {userComments.map((comment) => {
                    return (
                        <>   
                        <Card className="mb-3">
                            <Card.Header className="text-start p-2">
                                <div className="row row-cols-auto fs-5">
                                    <div className="col">
                                        <i className="bi bi-person-circle p-2"></i>
                                        {comment.username}
                                    </div>
                                    <div className="col">
                                        <CommentVote 
                                            vote={"thumb_up"} 
                                            commentID={comment.id} 
                                            commentVotes={comment.likes} 
                                            getDiscussion={props.getDiscussion} 
                                        />
                                        <CommentVote 
                                            vote={"thumb_down"} 
                                            commentID={comment.id} 
                                            commentVotes={comment.dislikes} 
                                            getDiscussion={props.getDiscussion} 
                                        />
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p className="d-flex justify-content-start">
                                    {comment.message}
                                </p>    
                            </Card.Body>
                        <Replies 
                            {...props} 
                            commentOP={comment.username} 
                            commentID={comment.id} 
                        />
                        </Card>
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default Comments;