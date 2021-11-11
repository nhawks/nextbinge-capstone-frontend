import React, { useState } from 'react';
import { MDBBtn } from "mdb-react-ui-kit"
import { Button, Modal } from 'react-bootstrap';
import './UserRowIcons.css'

const PlayTrailerIcon = (props) => {

    const [showModal, setShowModal] = useState(false);
    let hasTrailer = props.show.videos.results.length > 0

    return (
        <>
        <MDBBtn 
            size="lg" 
            className="mx-2 text-white" 
            color="null"
            onClick={() => setShowModal(true)}
            disabled={!hasTrailer}

        > 
            <i class="fas fa-play me-1"></i> Play Trailer
        </MDBBtn>
            {hasTrailer && 
                <Modal
                    size="lg"
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {props.show.name} Trailer
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="video-container">
                    <iframe 
                        src={`https://www.youtube.com/embed/${props.show.videos.results[0].key}?autoplay=1`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
                    </iframe>
                    </div>
                    </Modal.Body>
                </Modal>
            }
        </>
    )
}

export default PlayTrailerIcon