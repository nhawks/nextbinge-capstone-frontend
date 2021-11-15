import React, { useEffect, useState } from "react";
import axios from "axios";
import { TMDB_API_KEY } from "../../../keys";

import ShowSeasons from "../ShowSeasons/ShowSeasons";
import ShowDiscussion from "../ShowDiscussion/ShowDiscussion";
import UserRowIcons from "../UserRowIcons/UserRowIcons";

import { Card, Row, Col, Spinner } from "react-bootstrap";
import StreamingProviderRow from "../StreamingProviderRow/StreamingProviderRow";

const ShowDetails = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [show, setShow] = useState(props.show);
  const [userRelationship, setUserRelationship] = useState({
    watchedShowID: null,
    isFavorite: false,
    likedShow: null,
    watchedShow: false,
    watchlistID: null,
    inWatchlist: false,
  });

  useEffect(() => {
    try {
      const getShow = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${props.showID}`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              append_to_response: "videos",
            },
          }
        );
        if (userWatchedShow) {
          setUserRelationship((prevState) => ({
            ...prevState,
            watchedShowID: userWatchedShow.id,
            isFavorite: userWatchedShow.is_favorite,
            likedShow: userWatchedShow.liked_show,
            watchedShow: true,
          }));
        }
        if (showInUserWatchlist) {
          setUserRelationship((prevState) => ({
            ...prevState,
            watchlistID: showInUserWatchlist.id,
            inWatchlist: true,
          }));
        } else {
          setUserRelationship((prevState) => ({
            ...prevState,
            inWatchlist: false,
          }));
        }

        setShow(response.data);
        setLoading(false);
      };

      getShow();
    } catch (err) {
      console.log(
        "🚀 ~ file: ShowDetails.jsx ~ line 24 ~ useEffect ~ err",
        err
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.watchedShows, props.watchlist]);

  const userWatchedShow = props.watchedShows.find(
    (show) => show.tv_show_id === props.showID
  );
  const showInUserWatchlist = props.watchlist.find(
    (show) => show.tv_show_id === props.showID
  );

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Card style={{ maxWidth: "75rem" }}>
      <Row>
        <Col md="4">
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            alt={`${show.name}`}
          />
        </Col>
        <Col md="8">
          <Card.Body>
            <Card.Title>
              {show.name} ({show.first_air_date.slice(0, 4)})
            </Card.Title>
            <Card.Text className="text-muted">{show.tagline}</Card.Text>
            <Card.Text className="text-start lh-lg">{show.overview}</Card.Text>
            <StreamingProviderRow {...props} />
            <UserRowIcons
              // TODO: Add toast notifications.
              {...props}
              {...userRelationship}
              show={show}
            />
            <ShowSeasons show={show} />{" "}
            {/*//TODO: Add pagination to seasons accordion */}
          </Card.Body>
        </Col>
      </Row>
      <ShowDiscussion {...props} show={show} />
    </Card>
  );
};

export default ShowDetails;
