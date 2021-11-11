import axios from "axios"
import { MDBBtn } from "mdb-react-ui-kit"

const LikeDislikeIcon = (props) => {

    const handleClick = async () => {
        try {
            const jwt = localStorage.getItem('token')
            const vote = props.likedShow ? "thumbs_down" : "thumbs_up"
            await axios.patch(`http://127.0.0.1:8000/api/show/${vote}`, {
                id: props.watchedShowID
            }, {
                headers: { Authorization: `Bearer ${jwt}`}
            })
            props.getWatchedShows()
        } catch(err) {
            console.log("🚀 ~ file: LikeDislikeIcon.jsx ~ line 17 ~ handleClick ~ err", err)
        }
    }

    return (
        <>
        <MDBBtn 
            floating 
            size="lg" 
            className="mx-2"
            color={props.likedShow ? "primary" : "dark"}
            disabled={!props.watchedShow}
            onClick={handleClick}
        > 
            <span class="material-icons">thumb_up</span>
        </MDBBtn>
        <MDBBtn 
            floating 
            size="lg" 
            className="mx-2"
            color={props.likedShow === false ? "primary" : "dark"}
            disabled={!props.watchedShow}
            onClick={handleClick}
        > 
            <span class="material-icons">thumb_down</span>
        </MDBBtn>
        <br />
        {!props.watchedShow && 
            <p className="text-muted mt-2">
                Please mark the show as watched to vote.
            </p>
        }
        </>
    )
}

export default LikeDislikeIcon