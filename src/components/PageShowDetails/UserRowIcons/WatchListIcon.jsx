import axios from "axios"
import { MDBBtn } from "mdb-react-ui-kit"


const WatchListIcon = (props) => {

    const addToWatchlist = async () => {
        try {
            const jwt = localStorage.getItem("token")
            await axios.post("http://localhost:8000/api/show/watchlist/show/add", 
            {
                tv_show_id: props.showID,
                tv_show_data: props.show
            }, {
                headers: { Authorization: `Bearer ${jwt}`}
            })
            props.getWatchlist() 
        } catch(err) {
            console.log("🚀 ~ file: WatchedShowIcon.jsx ~ line 21 ~ handleClick ~ err", err)
        }
    }

    const removeFromWatchlist = async () => {
        try {
            const jwt = localStorage.getItem("token")
            await axios.delete("http://localhost:8000/api/show/watchlist/show/delete", {
                headers: { Authorization: `Bearer ${jwt}`},
                data: {
                    id: props.watchlistID
                }
            })
            props.getWatchlist()
        } catch(err) {

        }
    }

    const handleClick = () => {
        if (props.inWatchlist) {
            removeFromWatchlist()
        } else {
            addToWatchlist()
        }
    }
    
    return (
        
        <MDBBtn 
            floating size="lg" 
            className="mx-2" 
            color={props.inWatchlist ? "primary" : "dark"}
            onClick={handleClick}
        > 
            <i class="fas fa-bookmark fa-lg"></i>
        </MDBBtn>
    )
}

export default WatchListIcon