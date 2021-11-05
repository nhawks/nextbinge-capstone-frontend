import React from 'react';
import UserLogin from '../UserLogin/UserLogin';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

function UserAccess(props) {
    return (
        <div>
        <MDBCard style={{ maxWidth: '50rem' }}>
            <MDBCardBody>
                <MDBCardTitle>Login</MDBCardTitle>
                <MDBCardText>
                    <UserLogin {...props} />
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        </div>
    );
}

export default UserAccess;
