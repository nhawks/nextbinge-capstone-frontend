import { MDBBtn } from "mdb-react-ui-kit"

const WatchedShowIcon = (props) => {
    return (
        <MDBBtn 
            floating size="lg" 
            className="mx-2" 
            color={props.watchedShow ? "primary" : "dark"}
            disabled={props.watchedShow ? true : false}
        > 
            <i class={`fas fa-lg ${props.watchedShow ? "fa-eye" : "fa-eye-slash" }`}></i>
        </MDBBtn>
    )
}

export default WatchedShowIcon