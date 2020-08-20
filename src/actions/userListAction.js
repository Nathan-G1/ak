import axios from 'axios';

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

export const fetchUsersForAdmin = (access_token, userType) => (dispatch, getState) => {
    axios.get(`https://apiak.herokuapp.com/api/AkUsers?access_token=${access_token}&filter[where][userType]=${userType}`, {
        params: {
            access_token: getState().auth.token
        }
    })
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