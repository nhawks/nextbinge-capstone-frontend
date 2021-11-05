import React from 'react';
import UserLogin from '../UserLogin/UserLogin';
import UserRegister from '../UserRegister/UserRegister';
import {Tabs, Tab } from 'react-bootstrap/'
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';


function UserAccess(props) {
    return (
        <div>
        <Tabs defaultActiveKey="signUp" className="mb-3">
            <Tab eventKey="login" title="Login">
                <MDBCard style={{ maxWidth: '30rem' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Login</MDBCardTitle>
                            <UserLogin {...props} />
                    </MDBCardBody>
                </MDBCard>
            </Tab>
            <Tab eventKey="signUp" title="Sign Up">
                <MDBCard style={{ maxWidth: '35rem' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Sign Up</MDBCardTitle>
                            <UserRegister {...props} />
                    </MDBCardBody>
                </MDBCard>
            </Tab>
        </Tabs>
        </div>
    );
}

export default UserAccess;
