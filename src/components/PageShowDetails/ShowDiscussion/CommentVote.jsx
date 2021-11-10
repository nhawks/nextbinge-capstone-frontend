import React from 'react';
import axios from 'axios';
import { MDBBadge, MDBTooltip } from 'mdb-react-ui-kit';

const CommentVote = ({ vote, commentID, commentVotes, getDiscussion }) => {

    const submitVote = async () => {
        try {
            const jwt = localStorage.getItem('token')
            await axios.patch(
                `http://localhost:8000/api/discussions/comment/${commentID}/${vote}`
            )
            getDiscussion()
        } catch (err) {
            console.log("🚀 ~ file: CommentVote.jsx ~ line 16 ~ submitVote ~ err", err)
        }
    }

    return (
        <MDBTooltip 
            tag="text" 
            placement="bottom" 
            title={`${vote === "thumb_up" ? "Like" : "Dislike"}`}
        >
            <a className='mx-3' href='#!' onClick={submitVote}>
                    <span class="material-icons me-2 text-white">{vote}</span>
                <MDBBadge 
                    color={`${vote === "thumb_up" ? "success" : "danger"}`} 
                    notification pill
                >
                    {commentVotes}
                </MDBBadge>
            </a>
        </MDBTooltip>
    )
}

export default CommentVote