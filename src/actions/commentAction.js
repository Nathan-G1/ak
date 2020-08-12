import axios from 'axios';
import { tokenConfig } from './authAction';

// export const getComments = (videoId) => (dispatch, getState) => {
//     dispatch({
//         type: 'GET_COMMENTS',
//         id: videoId,
//         // state: getState()
//     });
// }

//add videoId here
export const getComments = () => (dispatch, getState) => {

    axios.get("https://apiak.herokuapp.com/api/comments", {
        // "videoId": videoId
        // videoId : "5f3178044262d10017f033ba",
        access_token: getState().auth.token
    }).then(res => {
        dispatch({
            type: 'GET_COMMENTS',
            // id: videoId,
            commentList: res.data.filter((comment) => {
                return comment.videoId == "5f3178044262d10017f033ba";
              })
        });
    }).catch(err => {
        dispatch({
            type: 'COMMENT_NOT_FOUND',
        })
    })
}

export const getCourseReview = (courseId) => (dispatch, getState) => {
    dispatch({
        type: 'GET_COURSE_REVIEW',
        id: courseId,
        // state: getState()
    });
}

export const addComment = (commentContent) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_COMMENT',
        payload: commentContent, // includes videoId, userId, commentText,...
        // state: getState()
    });
}

export const updateComments = () => (dispatch, getState) => {
    dispatch({
        type: 'UPDATE_STATE',
    });
}


export const addReply = (commentId, commentContent) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_REPLY',
        commentId: commentId,
        payload: commentContent, // includes videoId, userId, commentText,...
        // state: getState()
    });
}

//matched with the api except the filter property
export const getCommentReplies = (commentId) => (dispatch, getState) => {
    axios.get("https://apiak.herokuapp.com/api/comments", {
        // "commentId": commentId
        access_token: getState().auth.token
    }).then(res => {
        const replies = res.data.filter((reply) => {
            return reply.commentId == commentId;                
          })
        dispatch({
            type: 'GET_REPLIES',
            commentReplies: replies
            
        });
    }).catch(err => {
        dispatch({
            type: 'REPLY_NOT_FOUND'
        })
    })
}