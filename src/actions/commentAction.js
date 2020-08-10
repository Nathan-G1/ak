import { tokenConfig } from './authAction';
// export const getComments = (courseData) => (dispatch, getState) => {
//     dispatch({
//             type: GET_COMMENTS,
//             payload: courseData.courseId
//         })
    // axios.post('https://apiak.herokuapp.com/api/AkUsers', userData, tokenConfig(getState))
    //     .then(res => {
    //         dispatch({
    //             type: SIGN_UP,
    //             payload: res.data
    //         });

    //         // dispatch(push('/dashboard'));
    //     }).catch(err => {
    //         dispatch({
    //             type: SIGN_UP_FAIL
    //         })
    //     })

// }

export const getComments = (videoId) => (dispatch, getState) => {
    dispatch({
            type: 'GET_COMMENTS',
            id: videoId,
            // state: getState()
    });
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