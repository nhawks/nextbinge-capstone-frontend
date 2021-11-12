import React from 'react';
import { RowRequest } from './RowRequests';
import SeriesRow from './SeriesRow';

const PageHome = (props) => {
    return (
        <div className="container-fluid col-11" >
            <SeriesRow title="Trending" requestURL={RowRequest.getTrending} />
            <SeriesRow title="Action" requestURL={RowRequest.getAction} />
            <SeriesRow title="Comedy" requestURL={RowRequest.getComedy} />
            <SeriesRow title="Sci-Fi & Fantasy" requestURL={RowRequest.getSciFantasy} />
            <SeriesRow title="Drama" requestURL={RowRequest.getDrama} />
            <SeriesRow title="Reality" requestURL={RowRequest.getReality} />
        </div>
    )

}


export default PageHome;