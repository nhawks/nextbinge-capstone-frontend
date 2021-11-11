import React, { useState } from 'react';
import { MDBBtn } from "mdb-react-ui-kit"
import { Button, Modal } from 'react-bootstrap';


const PlayTrailerIcon = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <MDBBtn 
            size="lg" 
            className="mx-2 text-white" 
            color="null"
            onClick={() => setShowModal(true)}

        > 
            <i class="fas fa-play me-1"></i> Play Trailer
        </MDBBtn>

            <Modal
            size="xl"
            show={showModal}
            onHide={() => setShowModal(false)}
        >
            <Modal.Header closeButton>
            <Modal.Title>
                {props.show.name} Trailer
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*//TODO: YouTube Video Player here */}
            </Modal.Body>
        </Modal>
        </>
    )
}

export default PlayTrailerIcon