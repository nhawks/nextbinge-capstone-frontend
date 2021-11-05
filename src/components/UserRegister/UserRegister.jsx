import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit';


function UserRegister(props) {
    const [registerValues, setRegisterValues] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        streaming_providers: []
    });

    const handleChange = (event) => {
        setRegisterValues(prevstate => ({
            ...prevstate,
            [event.target.name]: event.target.value
        }));
    }

    const handleStream = (e) => {

        const serviceProvider = e.target.value
        const streamingProviders = [...registerValues.streaming_providers]

        if (streamingProviders.includes(serviceProvider)){
            const providerIndex = streamingProviders.indexOf(serviceProvider)
            streamingProviders.splice(providerIndex, 1)
        } else {
            streamingProviders.push(serviceProvider)
        }
        setRegisterValues(prevstate => ({
            ...prevstate,
            streaming_providers: streamingProviders
        }));
       
    }

    const registerUser = (e) => {
        e.preventDefault()
        props.register(registerValues)
    }


    return (
        <React.Fragment>
            <Form className="my-auto" onSubmit={registerUser}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="registerFormFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control 
                            name="first_name" 
                            value={registerValues.first_name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter first name"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="registerFormLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                            name="last_name" 
                            value={registerValues.last_name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter last name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="registerFormEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        name="email" 
                        value={registerValues.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="Enter email"
                    />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="registerFormUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            name="username" 
                            value={registerValues.username}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter username"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="registerFormPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={registerValues.password}
                            onChange={handleChange}
                            type="password" 
                            placeholder="Enter password" 
                        />
                    </Form.Group>
                </Row>
                <Form.Group>
                    <br />
                    <Form.Text>
                        Select your streaming providers
                    </Form.Text>
                    <br />
                    <MDBBtn
                        type="button" 
                            type="button"
                        toggle 
                        style={{ backgroundColor: '#E50914' }} 
                        value="Netflix" 
                        onClick={handleStream}
                    >
                        Netflix
                    </MDBBtn>
                    <MDBBtn 
                        type="button"
                        toggle 
                        style={{ backgroundColor: '#00A8E1' }} 
                        value="Prime Video" 
                        onClick={handleStream}
                    >
                        Prime Video
                    </MDBBtn>
                    <MDBBtn 
                        type="button"
                        toggle 
                        style={{ backgroundColor: '#5822b4' }} 
                        value="Disney+" 
                        onClick={handleStream}
                    >
                        Disney+
                    </MDBBtn>
                    <MDBBtn 
                        type="button"
                        toggle 
                        style={{ backgroundColor: '#1ce783' }} 
                        value="Hulu" 
                        onClick={handleStream}
                    >
                        Hulu
                    </MDBBtn>
                    <MDBBtn 
                        type="button"
                        toggle
                        style={{ backgroundColor: '#991eeb' }} 
                        value="HBO Max" 
                        onClick={handleStream}
                    >
                        HBO Max
                    </MDBBtn>
                </Form.Group>
                <br />
                <MDBBtn className="btn" color="primary" type="submit">
                    Sign Up
                </MDBBtn>
            </Form>
        </React.Fragment> 
    );
}

export default UserRegister;