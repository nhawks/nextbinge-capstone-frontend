import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

const ViewerScoreIcon = (props) => {

    return (
       <>
       <small className="text-muted">{props.imdbRating}% liked this TV Show (IMDb Users)</small>
        <MDBProgress className="mt-1"> 
            <MDBProgressBar width={props.imdbRating} valuemin={0} valuemax={100} />
        </MDBProgress>
        </>
    )
}

export default ViewerScoreIcon