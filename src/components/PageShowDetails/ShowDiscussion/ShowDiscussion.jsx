import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import DiscussionForm from './DiscussionForm';
import Comments from './Comments';
import axios from 'axios';

function ShowDiscussion(props) {

    const [isLoading, setLoading] = useState(true)
    const [discussion, setDiscussion] = useState();

    useEffect(() => {
        try{
            const getDiscussion = async () => {
                const response = await axios.get(
                    `http://localhost:8000/api/discussions/${props.show.id}-${props.show.name}/discussion`
                )
                setDiscussion(response.data)
                setLoading(false)
            }
            getDiscussion()
        } catch(err) {
            console.log("🚀 ~ file: ShowDiscussion.jsx ~ line 24 ~ useEffect ~ err", err)
        }
    }, []);

    
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
                                <DiscussionForm {...props} hasDiscussion={discussion ? true : false} />
                                <Card>
                                    <Comments {...props} userComments={discussion[0]} userReplies={discussion[1]} />
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