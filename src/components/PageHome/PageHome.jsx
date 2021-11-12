import React from 'react';
import { RowRequest } from './RowRequests';
import SeriesRow from './SeriesRow';

const PageHome = (props) => {
    return (
        <div className="container-fluid col-11 mt-4" >
            <SeriesRow title="Trending" requestURL={RowRequest.getTrending} {...props} />
            <SeriesRow title="Action" requestURL={RowRequest.getAction} {...props} />
            <SeriesRow title="Comedy" requestURL={RowRequest.getComedy} {...props} />
            <SeriesRow title="Sci-Fi & Fantasy" requestURL={RowRequest.getSciFantasy} {...props} />
            <SeriesRow title="Drama" requestURL={RowRequest.getDrama} {...props} />
            <SeriesRow title="Reality" requestURL={RowRequest.getReality} {...props} />
        </div>
    )

}


export default PageHome;