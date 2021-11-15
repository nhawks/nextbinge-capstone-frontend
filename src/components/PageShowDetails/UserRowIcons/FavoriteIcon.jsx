import axios from "axios";
import { MDBBtn, MDBTooltip } from "mdb-react-ui-kit";

const FavoriteIcon = (props) => {
  const newFavorite = async () => {
    try {
      const jwt = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/api/show/watched/add",
        {
          tv_show_id: props.showID,
          is_favorite: true,
          liked_show: true,
          tv_show_data: props.show,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      props.getWatchedShows();
    } catch (err) {
      console.log(
        "🚀 ~ file: FavoriteIcon.jsx ~ line 26 ~ newFavorite ~ err",
        err
      );
    }
  };

  const updateFavorite = async () => {
    try {
      const jwt = localStorage.getItem("token");
      await axios.patch(
        "http://localhost:8000/api/show/favorites/update",
        {
          id: props.watchedShowID,
          is_favorite: !props.isFavorite,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      props.getWatchedShows();
    } catch (err) {
      console.log(
        "🚀 ~ file: FavoriteIcon.jsx ~ line 36 ~ updateFavorite ~ err",
        err
      );
    }
  };

  const handleClick = () => {
    if (props.watchedShow) {
      updateFavorite();
    } else {
      newFavorite();
    }
  };

  return (
    <MDBTooltip
      tag="text"
      placement="bottom"
      title={props.isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <MDBBtn
        floating
        size="lg"
        className="mx-2"
        color={props.isFavorite ? "primary" : "dark"}
        onClick={handleClick}
      >
        <i className="fas fa-heart fa-lg"></i>
      </MDBBtn>
    </MDBTooltip>
  );
};

export default FavoriteIcon;
