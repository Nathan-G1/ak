import { SIGN_UP } from './types';
export const handleSignup = (userData) => dispatch => {
    dispatch({
        type: SIGN_UP,
        payload: userData
    });
} 