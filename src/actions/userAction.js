import axios from 'axios';
import { SET_USER } from './types';
import { tokenConfig } from './authAction';


export const handleSetUser = (userId) => (dispatch, getState) => {
    // dispatch({
    //     type: SET_USER,
    //     payload: userId
    // })
    // alert(userId);
    // axios.defaults.headers.common = {'Authorization': `Bearer ${getState().auth.token}`}
    axios.get('https://apiak.herokuapp.com/api/AkUsers/'+userId, {
        params: {
            // id: userId,
            access_token: getState().auth.token
        }
    })
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data,
            });
            // console.log(res.data)
        }).catch(err => {
            dispatch({
                type: 'USER_ERROR'
            });
        })

}