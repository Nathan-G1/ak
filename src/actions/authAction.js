import axios from 'axios';
import { push, replace } from 'react-router-redux';
import { getCourses } from './courseAction';
import {
    SIGN_UP,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT,
    SIGN_UP_FAIL
} from './types';

export const handleSignup = (userData) => (dispatch, getState) => {
    // dispatch({
    //         type: SIGN_UP,
    //         payload: userData
    //     })
    axios.post('https://apiak.herokuapp.com/api/AkUsers', userData, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: SIGN_UP,
                payload: res.data
            });
            // dispatch(push('/dashboard'));
        }).catch(err => {
            dispatch({
                type: SIGN_UP_FAIL
            })
        })

}

export const handleSignin = (userData, userPassword) => (dispatch, getState) => {
    dispatch({
        type: SIGN_IN_REQUEST
    });

    axios.post('https://apiak.herokuapp.com/api/AkUsers/login', userData, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: res.data,
                state: getState()
            });
            // dispatch(getCourses());

            dispatch({
                type: 'SET_PASSWORD',
                payload: userPassword
            });
        }).catch(err => {
            dispatch({
                type: SIGN_IN_FAIL
            })
        })

}

export const handleSignout = () => (dispatch, getState) => {
    dispatch({
        type: SIGN_OUT
    });
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json'
        }
    };

    if (token) {
        // config.headers['X-USER-token'] = `Bearer ${token}`;
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    

    return config;
}

