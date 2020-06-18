import { tokenConfig } from './authAction';
export const getComments = (courseData) => (dispatch, getState) => {
    dispatch({
            type: GET_COMMENTS,
            payload: courseData.courseId
        })
    // axios.post('https://apiak.herokuapp.com/api/AkUsers', userData, tokenConfig(getState))
    //     .then(res => {
    //         dispatch({
    //             type: SIGN_UP,
    //             payload: res.data
    //         });

    //         // dispatch(push('/dashboard'));
    //     }).catch(err => {
    //         dispatch({
    //             type: SIGN_UP_FAIL
    //         })
    //     })

}