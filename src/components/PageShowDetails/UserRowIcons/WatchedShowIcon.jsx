import { MDBBtn } from "mdb-react-ui-kit"

const WatchedShowIcon = (props) => {
    return (
        <MDBBtn 
            floating size="lg" 
            className="mx-2" 
            color={props.watchedShow ? "primary" : "dark"}
            disabled={props.watchedShow ? true : false}
        > 
            <i className="bi bi-eye-fill"></i>
        </MDBBtn>
    )
}

export default WatchedShowIcon