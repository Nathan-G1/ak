const initialState = {
    video: {
        id: '',
        title: '',
        video: '',
        order: ''
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
                video: action.state.currentCourse.videos.filter((v) => v.id === action.id)[0],
            }

        default:
            return state;
    }
}