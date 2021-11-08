import React from 'react';
import ShowDetails from './ShowDetails/ShowDetails';


const PageShowDetails = (props) => {
    return (
        <div className="col-12">
            <ShowDetails {...props} />
        </div>
    )
}

export default PageShowDetails