import axios from 'axios';
import { getVideo } from './courseVideoAction';
import { tokenConfig } from './authAction';

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
        const lectureVideoList = res.data.filter((video) => {
            return video.courseId == courseId;
        })

        dispatch({
            type: 'GET_LECTURE_VIDS',
            lectureVid: lectureVideoList
        });

        dispatch(getVideo(lectureVideoList[0].id));

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
    // dispatch({
    //     type: 'ADD_COURSE',
    //     payload: courseInfo, //includes userId, and course fields
    //     // state: getState()
    // });

    axios.post(`https://apiak.herokuapp.com/api/courses?access_token=${getState().auth.token}`, 
        courseInfo,
        tokenConfig(getState)
    ).then(res => {
        dispatch({
            type: 'ADD_COURSE',
            // id: videoId,
            // commentList: res.data.filter((comment) => {
            //     return comment.videoId == "5f3178044262d10017f033ba";
            //   })
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: 'COURSE_NOT_ADDED',
        })
    })
}

export const addCourseVideo = (courseId, videoInfo) => (dispatch, getState) => {
    // dispatch({
    //     type: 'ADD_COURSE_VIDEO',
    //     payload: videoInfo, //includes userId, and course fields
    //     // state: getState()
    // });

    axios.post(`https://apiak.herokuapp.com/api/videos?access_token=${getState().auth.token}`, 
        videoInfo,
        tokenConfig(getState)
    ).then(res => {
        dispatch({
            type: 'ADD_COURSE_VIDEO',
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: 'VIDEO_NOT_ADDED',
        })
    })
}


export const updateCourse = (courseId, courseInfo) => (dispatch, getState) => {

    axios.put(`https://apiak.herokuapp.com/api/courses/${courseId}?access_token=${getState().auth.token}`, 
        courseInfo,
        tokenConfig(getState)
    ).then(res => {
        dispatch({
            type: 'UPDATE_COURSE',
            payload: res.data
        });
        
        dispatch(getCourses());
    }).catch(err => {
        dispatch({
            type: 'UPDATE_FAILED',
        })
    })

    
}

