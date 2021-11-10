import { MDBBtn } from "mdb-react-ui-kit"

const LikeDislikeIcon = (props) => {
    return (
        <>
        <MDBBtn floating size="lg" className="mx-2"> 
            <span class="material-icons">thumb_up</span>
        </MDBBtn>
        <MDBBtn floating size="lg" className="mx-2"> 
            <span class="material-icons">thumb_down</span>
        </MDBBtn>
        </>
    )
}

export default LikeDislikeIcon