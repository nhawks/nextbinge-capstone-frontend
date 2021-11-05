import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit';
import { loginUser as login } from '../../api/User/User'


function UserLogin(props) {
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        setLoginValues(prevstate => ({
            ...prevstate,
            [event.target.name]: event.target.value
        }));
    }

    const loginUser = (e) => {
        e.preventDefault()
        login(loginValues, props.setUser)
    }


    return (
        <React.Fragment>
            <Form className="my-auto" onSubmit={loginUser}>
                <hr />
                <Row className="mb-3 justify-content-center">
                    <Form.Group as={Col} md="8" controlId="loginFormUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            name="username" 
                            value={loginValues.username}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter username"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-4 justify-content-center">
                    <Form.Group as={Col} md="8" controlId="loginFormPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={loginValues.password}
                            onChange={handleChange}
                            type="password" 
                            placeholder="Enter password" 
                        />
                    </Form.Group>
                </Row>
                <div className="d-grid col-8 mb-2 mx-auto">
                    <MDBBtn color="primary" type="submit">
                        Login
                    </MDBBtn>
                </div>
            </Form>
        </React.Fragment> 
    );
}

export default UserLogin;