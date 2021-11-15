import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';

function AccountWatchedShows(props) {

    const [searchTerm, setSearchTerm] = useState("");

    return ( 
        <>  
            <div className="col col-11">
                <input 
                    type="text" 
                    placeholder="Search your watched shows..." 
                    className="form-control bg-dark text-white text-center mb-4 mt-1 p-1"
                    onChange = {(event) =>{
                        setSearchTerm(event.target.value)
                    }}
                    />
            </div>
            <Table className="table table-hover text-center" responsive>
                <thead className="bg-primary">
                <tr>
                    <th>Name</th>
                    <th>Seasons</th>
                    <th>Episodes</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                    {props.watchedShows.filter(show => {
                        if (searchTerm === "") {
                            return show
                        } else if (show.tv_show_data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return show
                        }
                    }).map((show) =>(
                        <tr className="table-active" key={show.tv_show_id}>
                            <td>{show.tv_show_data.name}</td>
                            <td>{show.tv_show_data.number_of_seasons}</td>
                            <td>{show.tv_show_data.number_of_episodes}</td>
                            <td>
                                <Link to="/show-details" onClick={() => props.setShowID(show.tv_show_id)} >
                                    <button type="button" className="btn btn-primary btn-floating me-1">
                                        <i class="bi bi-info-lg fa-lg"></i>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
     );
}

export default AccountWatchedShows;