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
    }).catch(err => {
        dispatch({
            type: 'REQUEST_NOT_SENT',
        })
    })
}


export const closeSuccessMsg = () => (dispatch, getState) => {
    dispatch({
        type: 'CLOSE_SCSS_MSG'
    });
}