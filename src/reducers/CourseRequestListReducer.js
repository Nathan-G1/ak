const initialState = {
    requests: [
        {
            studentId: "string",
            courseId: "string",
            phoneNumber: "string",
            receiptImage: "string",
            requestDate: "2020-08-19T19:22:33.994Z",
            coursePrice: 0,
            id: "string"
        },
    ],

    isRequestDelivered: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_COURSE_REQUESTS':
            return {
                ...state,
                requests: action.payload
            }

            
        case 'REQUEST_ADDED':
            return {
                ...state,
                requests: action.payload,
                isRequestDelivered: true
            }
        case 'CLOSE_SCSS_MSG':
            return {
                ...state,
                isRequestDelivered: false
            }

        case 'persist/REHYDRATE':
            if (action.payload.courseRequestList) {
                return {
                    ...state,
                    requests: action.payload.courseRequestList.requests,
                    // isCourseUpdated: action.payload.courseList.isCourseUpdated,
                };
            }
        default:
            return state;
    }
}