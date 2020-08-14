import axios from 'axios';

export const getCourse = (courseId) => (dispatch, getState) => {
    // dispatch({
    //     type: 'GET_COURSE',
    //     id: courseId,
    //     state: getState()
    // });

    axios.get("https://apiak.herokuapp.com/api/courses", {
        params: {
            // "videoId": videoId
            access_token: getState().auth.token
        }
    }).then(res => {
        dispatch({
            type: 'GET_COURSE',
            course: res.data.filter((course) => {
                return course.id == courseId;
              })
        });

        dispatch(getCourseVideos(courseId));

    }).catch(err => {
        dispatch({
            type: 'NO_COURSE_AVAILABLE',
        })
    })


}

export const getCourseVideos = (courseId) => (dispatch, getState) => {
    axios.get("https://apiak.herokuapp.com/api/videos", {
        params: {
            // "videoId": videoId
            access_token: getState().auth.token
        }
    }).then(res => {
        dispatch({
            type: 'GET_LECTURE_VIDS',
            lectureVid: res.data.filter((video) => {
                return video.courseId == courseId;
            })
        });

    }).catch(err => {
        dispatch({
            type: 'NO_VIDEO_AVAILABLE',
        })
    })
}

export const getCourses = () => (dispatch, getState) => {
    axios.get("https://apiak.herokuapp.com/api/courses", {
        params: {
            // "videoId": videoId
            access_token: getState().auth.token
        }
    }).then(res => {
        if (!getState().courseList.isCourseUpdated) { 
            dispatch({
                type: 'GET_COURSES',
                courseList: res.data
            });
        }


    }).catch(err => {
        dispatch({
            type: 'NO_COURSE_AVAILABLE',
        })
    })

}

// export const checkCoursesArrival = () => (dispatch, getState) => {
//     if(getState().courseList.isCourseUpdated){
//         dispatch({
//             type: 'COURSE_FETCHED',
//         });
        
//     }
// }

export const addCourse = (courseInfo) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_COURSE',
        payload: courseInfo, //includes userId, and course fields
        // state: getState()
    });
}