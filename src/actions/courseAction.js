export const getCourse = (courseId) => (dispatch, getState) => {
    dispatch({
            type: 'GET_COURSE',
            id: courseId,
            state: getState()
    });
}

export const getCourses = (userId) => (dispatch, getState) => {
    dispatch({
            type: 'GET_COURSES',
            id: userId,
            // state: getState()
    });
}

export const addCourse = (courseInfo) => (dispatch, getState) => {
    dispatch({
            type: 'ADD_COURSE',
            payload: courseInfo, //includes userId, and course fields
            // state: getState()
    });
}