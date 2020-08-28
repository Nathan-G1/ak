import axios from 'axios';
import FormData from 'form-data'
import { getVideo } from './courseVideoAction';
import { getRequests } from './courseRequestAction'
import { tokenConfig } from './authAction';

export const getCourse = (courseId) => (dispatch, getState) => {
    dispatch(getCourseLoading(true));

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
        dispatch(getCourseLoading(false));
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

            dispatch(getCourseListLoading(true));
            dispatch(getRequests());
        }

    }).catch(err => {
        dispatch({
            type: 'NO_COURSE_AVAILABLE',
        })
    })

}

export const getCourseListLoading = (isLoading) => (dispatch, getState) => {
    dispatch({
        type: 'LOAD_COURSE_LIST',
        payload: isLoading
    });
}

export const getCourseLoading = (isLoading) => (dispatch, getState) => {
        dispatch({
            type: 'LOAD_COURSE',
            payload: isLoading
        });
}

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

//not working
export const approveUserRequest = (courseId, studentId) => (dispatch, getState) => {

    axios.post(`https://apiak.herokuapp.com/api/courses/${studentId}/akUsers?access_token=${getState().auth.token}`, 
        
        tokenConfig(getState)
    ).then(res => {
        dispatch({
            type: 'REQUEST_APPROVED',
            payload: res.data
        });
        
        // dispatch(getCourses());
    }).catch(err => {
        dispatch({
            type: 'APPROVING_FAILED',
        })
    })

    
}

export const uploadImage = (image) => (dispatch, getState) => {
    let formData = new FormData();
    formData.append('image', image);

    axios.post('https://samvisionapi.herokuapp.com/images/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        // console.log(res.data.name)

        dispatch({
            type: 'IMAGE_UPLOADED',
            payload: res
        });

    }).catch(err => {
        dispatch({
            type: 'IMAGE_UPLOADING_FAILED'
        });
    })
}

// export const setImage = (imageName) => (dispatch, getState) => {
//     axios.get(`https://samvisionapi.herokuapp.com/images/${imageName}`, {}
//     ).then(res => {
//         dispatch({
//             type: 'GET_IMAGE_DATA',
//             payload: res.data
//         });
//     }).catch(err => {
//         // console.log(imageName);
//         dispatch({
//             type: 'IMAGE_DATA_NOT_FOUND'
//         })
//     })
// }
