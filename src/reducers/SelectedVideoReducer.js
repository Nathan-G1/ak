const initialState = {
    // load courses part one video here
    video: {
        url: '',
        title: '',
        description: '',
        courseId: '',
        videoLength: '',
        materials: '',
        part: '', 
        id: '',
    },
    isFetched: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        // case 'GET_COMMENTS':
        //     return {
        //         ...state,
        //         comments: [...state.comments]
        //         // value: action.payload
        //     };
        case 'GET_VIDEO':
            return {
                ...state,
                video: action.state.currentCourse.lectureVideos.filter((v) => v.id === action.id)[0],
            }
        case 'GET_LECTURE_VIDS':
            return {
                ...state,
                video: action.lectureVid[0]
            }

        case 'persist/REHYDRATE':
            if (action.payload.selectedVideo) {
                return {
                    ...state,
                    video: action.payload.selectedVideo.video
                };
            }else{
                return state;
            }
        default:
            return state;
    }
}