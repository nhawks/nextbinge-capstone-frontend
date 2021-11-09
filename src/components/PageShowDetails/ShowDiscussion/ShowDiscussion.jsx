import React from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import DiscussionForm from './DiscussionForm';
import Comments from './Comments';

function ShowDiscussion(props) {
    
    return ( 

        <div className = "discussionSection">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h6 className="text-white"> Discussion </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                            <DiscussionForm {...props} />
                            <Card>
                                <Comments {...props} />
                            </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
     );
}

export default ShowDiscussion;