import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner} from 'react-bootstrap';
import ShowDetails from './ShowDetails/ShowDetails';

const PageShowDetails = (props) => {
   
    return (
        <div className="col-12">
            <ShowDetails {...props} />
        </div>
    )
}

export default PageShowDetails