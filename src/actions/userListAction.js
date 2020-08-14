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