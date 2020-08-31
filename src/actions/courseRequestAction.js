import axios from 'axios';
import { tokenConfig } from './authAction';

export const sendRequest = (requestInfo) => (dispatch, getState) => {

    axios.post(`https://apiak.herokuapp.com/api/courseRequests?access_token=${getState().auth.token}`, 
        requestInfo,
        tokenConfig(getState)
    ).then(res => {
        dispatch({
            type: 'REQUEST_ADDED',
            payload: res.data
        });
        dispatch(getRequests); // make a condition for this
    }).catch(err => {
        dispatch({
            type: 'REQUEST_NOT_SENT',
        })
    })
}

export const getRequests = () => (dispatch, getState) => {

    axios.get(`https://apiak.herokuapp.com/api/courseRequests?access_token=${getState().auth.token}`, 
        tokenConfig(getState)
    ).then(res => {
        dispatch({
            type: 'GET_COURSE_REQUESTS',
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: 'REQUEST_NOT_FOUND',
        })
    })
}


export const closeSuccessMsg = () => (dispatch, getState) => {
    dispatch({
        type: 'CLOSE_SCSS_MSG'
    });
}

export const sendReceiptPicture = (image) => (dispatch, getState) => {
    let formData = new FormData();
    formData.append('image', image);

    axios.post('https://samvisionapi.herokuapp.com/images/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        // console.log(res.data.name)

        dispatch({
            type: 'RECEIPT_IMAGE_UPLOADED',
            payload: res
        });

    }).catch(err => {
        dispatch({
            type: 'RECEIPT_IMAGE_UPLOADING_FAILED'
        });
    })
}

export const checkCourseAccess = (courseId, studentId) => (dispatch, getState) => {

    axios.get(`https://apiak.herokuapp.com/api/courses/${courseId}/courseRequests?filter[where][studentId][like]=${studentId}`, 
        tokenConfig(getState)
    ).then(res => {
        console.log(res.data);
        if(res.data[0].isApproved){
            dispatch({
                type: 'USER_ACCESS_GRANTED',
                // payload: res
            });
        }else{
            dispatch({
                type: 'USER_ACCESS_DENIED'
            });
        }
    }).catch(err => {
        dispatch({
            type: 'USER_ACCESS_FAILED'
        });
    })
}
