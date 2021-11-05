import React from 'react';
import UserAccess from '../UserAccess/UserAccess'

const PageAccess = (props) => {
    return (
        <div>
            Access - Login/Sign Up
            <UserAccess {...props} />
        </div>
    )
}


export default PageAccess;