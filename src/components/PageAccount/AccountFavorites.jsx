import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";

function AccountFavorites(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const imageURL = "https://image.tmdb.org/t/p/w500";

  async function removeFromFavorites(favoriteID) {
    try {
      const jwt = localStorage.getItem("token");
      await axios.patch(
        "http://localhost:8000/api/show/favorites/update",
        {
          id: favoriteID,
          is_favorite: false,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      props.getWatchedShows();
    } catch (err) {
      console.log(
        "🚀 ~ file: PageWatchlist.jsx ~ line 20 ~ removeFromFavorites ~ err",
        err
      );
    }
  }

  return (
    <>
      {" "}
      <div className="col col-11">
        <input
          type="text"
          placeholder="Search your favorites..."
          className="form-control bg-dark text-white text-center mb-4 mt-1 p-1"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <Row
        xs={2}
        md={2}
        lg={3}
        xl={4}
        className="g-4 justify-content-center mb-4"
      >
        {props.watchedShows
          .filter((show) => show.is_favorite)
          .filter((show) => {
            if (searchTerm === "") {
              return show;
            } else if (
              show.tv_show_data.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return show;
            }
          })
          .map((show) => (
            <div className="col">
              <Card
                style={{ width: "180px" }}
                className="me-2"
                key={show.tv_show_id}
              >
                <Link
                  to="/show-details"
                  onClick={() => props.setShowID(show.tv_show_id)}
                >
                  <Card.Img
                    variant="top"
                    src={`${imageURL}${show.tv_show_data.poster_path}`}
                    rounded
                  />
                </Link>
                <Card.Body>
                  <MDBBtn rounded onClick={() => removeFromFavorites(show.id)}>
                    Remove
                  </MDBBtn>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Row>
    </>
  );
}

export default AccountFavorites;
