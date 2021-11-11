import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Comments from './Comments';
import axios from 'axios';
import CommentForm from './CommentForm';

function ShowDiscussion(props) {

    const [isLoading, setLoading] = useState(true)
    const [discussion, setDiscussion] = useState();

    useEffect(() => {
        getDiscussion()
    }, []);

    const getDiscussion = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/discussions/${props.show.id}-${props.show.name}/discussion`
            )
            setDiscussion(response.data)
            setLoading(false)
        } catch(err) {
            console.log("🚀 ~ file: ShowDiscussion.jsx ~ line 38 ~ getDiscussion ~ err", err)
        }
    }

    
    return ( 
    
        <div className = "discussionSection">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h6 className="text-white"> Discussion </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                            {isLoading &&
                                <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            
                            }
                            {!isLoading &&
                            <>
                                <CommentForm 
                                    {...props} 
                                    hasDiscussion={discussion[0].length !== 0 ? true : false} 
                                    getDiscussion={getDiscussion} 
                                />
                                <Card>
                                    <Comments 
                                        {...props} 
                                        discussion={discussion} 
                                        getDiscussion={getDiscussion} 
                                    />
                                </Card>
                            </>
                            }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default ShowDiscussion;