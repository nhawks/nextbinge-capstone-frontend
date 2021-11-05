import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { MDBBtn } from 'mdb-react-ui-kit';


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
        props.login(loginValues)
    }


    return (
        <React.Fragment>
            <Form className="my-auto" onSubmit={loginUser}>
                <Form.Group controlId="loginFormUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        name="username" 
                        value={loginValues.username}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Enter username"
                    />
                </Form.Group>
                <Form.Group controlId="loginFormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={loginValues.password}
                        onChange={handleChange}
                        type="password" 
                        placeholder="Enter password" 
                    />
                </Form.Group>
                <MDBBtn className="btn" color="primary" type="submit">
                    Login
                </MDBBtn>
            </Form>
        </React.Fragment> 
    );
}

export default UserLogin;