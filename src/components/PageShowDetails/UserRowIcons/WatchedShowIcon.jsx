import axios from "axios"
import { MDBBtn, MDBTooltip } from "mdb-react-ui-kit"


const WatchedShowIcon = (props) => {

    const handleClick = async () => {
        try {
            const jwt = localStorage.getItem("token")
            await axios.post("http://localhost:8000/api/show/watched/add", 
            {
                tv_show_id: props.showID,
                is_favorite: false,
                liked_show: null,
                tv_show_data: props.show
            }, {
                headers: { Authorization: `Bearer ${jwt}`}
            })
            props.getWatchedShows() 
        } catch(err) {
            console.log("🚀 ~ file: WatchedShowIcon.jsx ~ line 21 ~ handleClick ~ err", err)
        }
    }

    return (
        <MDBTooltip 
            tag="text" 
            placement="bottom" 
            title={props.watchedShow ? "Watched" : "Watched?"}
        >
            <MDBBtn 
                floating size="lg" 
                className="mx-2" 
                color={props.watchedShow ? "primary" : "dark"}
                disabled={props.watchedShow ? true : false}
                onClick={handleClick}
            > 
                <i class={`fas fa-lg ${props.watchedShow ? "fa-eye" : "fa-eye-slash" }`}></i>
            </MDBBtn>
        </MDBTooltip>
    )
}

export default WatchedShowIcon