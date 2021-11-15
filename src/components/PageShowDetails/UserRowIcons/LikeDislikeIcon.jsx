import axios from "axios";
import { MDBBtn, MDBTooltip } from "mdb-react-ui-kit";

import "./UserRowIcons.css";

const LikeDislikeIcon = (props) => {
  const handleClick = async () => {
    try {
      const jwt = localStorage.getItem("token");
      const vote = props.likedShow ? "thumbs_down" : "thumbs_up";
      await axios.patch(
        `http://127.0.0.1:8000/api/show/${vote}`,
        {
          id: props.watchedShowID,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      props.getWatchedShows();
    } catch (err) {
      console.log(
        "🚀 ~ file: LikeDislikeIcon.jsx ~ line 17 ~ handleClick ~ err",
        err
      );
    }
  };

  return (
    <>
      <MDBTooltip
        tag="text"
        placement="bottom"
        title={props.likedShow ? "Liked" : "Like?"}
      >
        <MDBBtn
          floating
          size="lg"
          className="mx-2 rowIcon"
          color={props.likedShow ? "primary" : "dark"}
          disabled={!props.watchedShow}
          onClick={handleClick}
        >
          <span className="material-icons">thumb_up</span>
        </MDBBtn>
      </MDBTooltip>
      <MDBTooltip
        tag="text"
        placement="bottom"
        title={props.likedShow ? "Dislike?" : "Disliked"}
      >
        <MDBBtn
          floating
          size="lg"
          className="mx-2"
          color={props.likedShow === false ? "primary" : "dark"}
          disabled={!props.watchedShow}
          onClick={handleClick}
        >
          <span className="material-icons">thumb_down</span>
        </MDBBtn>
      </MDBTooltip>
    </>
  );
};

export default LikeDislikeIcon;
