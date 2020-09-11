import axios from 'axios';
import FormData from 'form-data';
import { SET_USER } from './types';
import { tokenConfig } from './authAction';


export const handleSetUser = (userId) => (dispatch, getState) => {
    // dispatch({
    //     type: SET_USER,
    //     payload: userId
    // })
    // alert(userId);
    // axios.defaults.headers.common = {'Authorization': `Bearer ${getState().auth.token}`}
    axios.get(`https://apiak.herokuapp.com/api/AkUsers/${userId}?access_token=${getState().auth.token}`, {
        // params: {
        //     // id: userId,
        //     access_token: getState().auth.token
        // }
    })
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data,
            });
        }).catch(err => {
            dispatch({
                type: 'USER_ERROR'
            });
        })

}

export const updateUser = (userData) => (dispatch, getState) => {
    updateImageLoading(true);
    axios.put(`https://apiak.herokuapp.com/api/AkUsers?access_token=${getState().auth.token}`, 
        userData,
        tokenConfig(getState)
    ).then(res => {
            dispatch({
                type: 'UPDATE_USER',
                payload: res.data,
            });
            updateImageLoading(false);
        }).catch(err => {
            dispatch({
                type: 'USER_UPDATE_FAILED'
            });
        })

}

export const uploadProfileImage = (image, userData) => (dispatch, getState) => {
    let formData = new FormData();
    formData.append('image', image);

    axios.post('https://samvisionapi.herokuapp.com/images/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {

        dispatch({
            type: 'PROFILE_IMAGE_UPLOADED',
            payload: res.data.name
        });

        const userDataCopy = userData;
        userDataCopy.avatar = res.data.name
        dispatch(updateUser(userDataCopy));
    }).catch(err => {
        dispatch({
            type: 'PROFILE_IMAGE_UPLOADING_FAILED'
        });
    })
}

export const updateImageLoading = (isLoading) => (dispatch, getState) => {
    dispatch({
        type: 'UPDATE_IMAGE_LOADING',
        isLoading: isLoading
    })
} 