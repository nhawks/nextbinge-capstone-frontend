import React, { useState } from 'react';
import axios from 'axios';
import { Card, Col } from 'react-bootstrap';


const AccountDetails = ({ user }) => {

    return (
            <Card>
                <Card.Header>Personal Info</Card.Header>
                <Card.Body>{user.first_name} {user.last_name}</Card.Body>
                <Card.Body>{user.username}</Card.Body>
                <Card.Body>{user.email}</Card.Body>
            </Card>
    )
}

export default AccountDetails;