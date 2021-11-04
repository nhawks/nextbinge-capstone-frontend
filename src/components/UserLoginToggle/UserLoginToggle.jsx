import React from 'react';
import UserLogin from '../UserLogin/UserLogin';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

function UserLoginToggle() {
    return (
        <div>
        <MDBCard style={{ maxWidth: '50rem' }}>
            <MDBCardBody>
                <MDBCardTitle>Login</MDBCardTitle>
                <UserLogin />
                {/* <MDBCardText>
                </MDBCardText> */}
            </MDBCardBody>
        </MDBCard>
        </div>
    );
}

export default UserLoginToggle;
