import axios from "axios"
import { MDBBtn } from "mdb-react-ui-kit"

const FavoriteIcon = (props) => {

    const newFavorite = async () => {
        try {
            const jwt = localStorage.getItem("token")
            await axios.post("http://localhost:8000/api/show/watched/add", 
            {
                tv_show_id: props.showID,
                is_favorite: true,
                liked_show: true,
                tv_show_data: props.show
            }, {
                headers: { Authorization: `Bearer ${jwt}`}
            })
            props.getWatchedShows() 
        } catch(err) {
            console.log("🚀 ~ file: FavoriteIcon.jsx ~ line 26 ~ newFavorite ~ err", err)
        }
    }

    const updateFavorite = async () => {
        try {
            const jwt = localStorage.getItem("token")
            await axios.patch("http://localhost:8000/api/show/favorites/update", 
            {
                id: props.show.databaseID,
                is_favorite: !props.isFavorite
            }, {
                headers: { Authorization: `Bearer ${jwt}`}
            })
            props.getWatchedShows()
        } catch (err) {
            console.log("🚀 ~ file: FavoriteIcon.jsx ~ line 36 ~ updateFavorite ~ err", err)
        }
    }

    const handleClick = () => {
        if (props.watchedShow) {
            updateFavorite()
        } else {
            newFavorite()
        }
    }

    return (
        <MDBBtn 
            floating 
            size="lg" 
            className="mx-2"
            color={props.isFavorite ? "primary" : "dark"}
            onClick={handleClick}
            
        > 
            <i class="fas fa-heart fa-lg"></i>
        </MDBBtn>
    )
}

export default FavoriteIcon