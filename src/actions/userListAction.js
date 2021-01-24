import axios from 'axios';
import { tokenConfig }  from './authAction';

export const handleSetUsers = () => (dispatch, getState) => {
    axios.get('https://apiak.herokuapp.com/api/AkUsers', {
        params: {
            access_token: getState().auth.token
        }
    })
        .then(res => {
            dispatch({
                type: 'SET_USERS',
                payload: res.data.filter((user) => {
                    return user.userType.toLowerCase() === 'student';
                })
            });
        }).catch(err => {
            dispatch({
                type: 'USERS_ERROR'
            });
        })

}

export const fetchUsersForAdmin = (userType) => (dispatch, getState) => {
    axios.get(`https://apiak.herokuapp.com/api/AkUsers?access_token=${getState().auth.token}&filter[where][userType]=${userType}`,
        tokenConfig(getState)
    )
        .then(res => {
            dispatch({
                type: 'FETCH_USERS_FOR_ADMIN',
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: 'FETCH_USERS_FOR_ADMIN_FAILED'
            });
        })

}