import React from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";

function PageWatchlist(props) {
  const imageURL = "https://image.tmdb.org/t/p/w500";

  async function removeFromWatchlist(watchlistID) {
    try {
      const jwt = localStorage.getItem("token");
      await axios.delete(
        "http://localhost:8000/api/show/watchlist/show/delete",
        {
          headers: { Authorization: `Bearer ${jwt}` },
          data: {
            id: watchlistID,
          },
        }
      );
      props.getWatchlist();
    } catch (err) {
      console.log(
        "🚀 ~ file: PageWatchlist.jsx ~ line 20 ~ removeFromWatchlist ~ err",
        err
      );
    }
  }

  return (
    <div className="container mt-4 mx-auto">
      <div className="mb-4">
        <h4 className="text-muted text-center">My Watchlist</h4>
        <hr />
        <Row xs={2} md={4} lg={5} className="g-4">
          {props.watchlist.map((show) => (
            <div className="text-center">
              <Card
                style={{ width: "180px" }}
                className="me-4"
                key={show.tv_show_id}
              >
                <Link
                  to="/show-details"
                  onClick={() => props.setShowID(show.tv_show_id)}
                >
                  <Card.Img
                    variant="top"
                    src={`${imageURL}${show.tv_show_data.poster_path}`}
                  />
                </Link>
                <Card.Body>
                  <MDBBtn rounded onClick={() => removeFromWatchlist(show.id)}>
                    Remove
                  </MDBBtn>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default PageWatchlist;
