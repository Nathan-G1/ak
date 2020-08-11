const initialState = {
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

        default:
            return state;
    }
}