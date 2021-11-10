import React, {useState} from 'react';
import axios from 'axios';

import {FormControl, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


const CommentForm = (props) => {

    const [messageBody, setMessageBody] = useState({
        tv_show: `${props.show.id}-${props.show.name}`, 
        username: props.username, 
        message: "", 
    })

    const [validated, setValidated] = useState(false)

    const handleChange = (event) => {
        setMessageBody(prevstate => ({
            ...prevstate,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const postMessageBody = async () => {
                try {
                    const jwt = localStorage.getItem('token')
                    await axios.post(
                        'http://localhost:8000/api/discussions/comment', 
                        messageBody,
                        {headers: {Authorization: `Bearer ${jwt}`}}
                    )
                    .then(() => {
                        setMessageBody(prevState => ({
                            ...prevState, message: ""
                        }))
                        setValidated(true)
                    })
                    props.getDiscussion()
                } catch(err) {
                    console.log("🚀 ~ file: CommentForm.jsx ~ line 44 ~ postMessageBody ~ err", err)
                }
            }

            postMessageBody()
            // TODO: Update discussion section state
            
        }
        event.preventDefault();
        setValidated(false)
    }


    return ( 
        <Row className="g-2 mb-5">
            <h5 className="text-start p-2">
                {props.hasDiscussion ? "Join the conversation!": "Be the first to start the discussion!"}
            </h5>
            <Form 
                className="d-flex" 
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <Col>
                    <Form.Group controlId="messageValidation">
                        <FloatingLabel 
                            label={`Comment on ${props.show.name}...`}>
                            <FormControl 
                                type="text"
                                placeholder="Discussion"
                                aria-label='message'
                                name='message'
                                onChange={handleChange}
                                value={messageBody.message}
                                required
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Button variant="primary" type='submit' size ="lg">
                    Submit
                </Button>
            </Form>
        </Row>
    );
}

export default CommentForm;