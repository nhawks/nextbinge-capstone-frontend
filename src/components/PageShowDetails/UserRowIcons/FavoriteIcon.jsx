import axios from "axios"
import { MDBBtn } from "mdb-react-ui-kit"

const FavoriteIcon = (props) => {

    const newFavorite = async () => {
        try {
            const jwt = localStorage.getItem("token")
            await axios.post("http://loclahost:8000/api/show/watched/add", {
                tv_show_id: props.show.id,
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
        const jwt = localStorage.getItem("token")
        const update = {
            id: props.show.databaseID,
            is_favorite: !props.isFavorite
        }
        await axios.patch("http://127.0.0.1:8000/api/show/favorites/update", 
        {
            id: props.show.databaseID,
            is_favorite: !props.isFavorite
        }, {
            headers: { Authorization: `Bearer ${jwt}`}
        })
        props.getWatchedShows()
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
            <i className="bi bi-heart-fill"></i>
        </MDBBtn>
    )
}

export default FavoriteIcon