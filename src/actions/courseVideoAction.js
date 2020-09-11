import { tokenConfig } from './authAction';
import { getComments } from './commentAction';
import { GET_VIDEO } from './types';
// export const getVideos = (courseData) => (dispatch, getState) => {
//     dispatch({
//             type: 'GET_VIDEOS',
//             payload: courseData.id
//     })
// }

export const getVideo = (videoId) => (dispatch, getState) => {
    dispatch({
            type: GET_VIDEO,
            id: videoId,
            state: getState()
    });

    dispatch(getComments(videoId));
}