import axios from 'axios';
import { tokenConfig } from './authAction';

export const getComments = (videoId) => (dispatch, getState) => {
    dispatch({
        type: 'GET_COMMENTS',
        id: videoId,
        // state: getState()
    });
}

//demo
// export const getComments = (videoId) => (dispatch, getState) => {

//     axios.get("https://apiak.herokuapp.com/api/AkUsers/comments", {
//         "videoId": videoId
//     }).then(res => {
//         dispatch({
//             type: 'GET_COMMENTS',
//             id: videoId,
//             commentList: res.data
//             // state: getState()
//         });
//     }).catch(err => {

//     })
// }

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
// export const getCommentReplies = (commentId) => (dispatch, getState) => {
//     axios.get("https://apiak.herokuapp.com/api/AkUsers/comments", {
//         "commentId": commentId
//     }).then(res => {
//         dispatch({
//             type: 'GET_REPLIES',
//             id: videoId,
//             commentReplies: res.data
//             // state: getState()
//         });
//     }).catch(err => {

//     })
// }