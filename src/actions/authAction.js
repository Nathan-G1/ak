import axios from 'axios';
import { SIGN_UP, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT } from './types';

export const handleSignup = (userData) => dispatch => {
    dispatch({
        type: SIGN_UP,
        payload: userData
    });
}

export const handleSignin = (userData) => (dispatch, getState) => {
    axios.post('https://apiak.herokuapp.com/api/AkUsers/login', userData, tokenConfig(getState))
        .then(res => dispatch({
            type: SIGN_IN_SUCCESS,
            payload: res.data
        }
        )).catch(err => {
            dispatch({
                type: SIGN_IN_FAIL
            })
        })

}

export const handleSignout = () => (dispatch) => {
    dispatch({
        type: SIGN_OUT
    });
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

