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
        }
    ],

    isRequestDelivered: false,
    isRequestlistUpdated: false,
    currentRequestImage: '',
    isRequestLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_COURSE_REQUESTS':
            return {
                ...state,
                requests: action.payload,
                isRequestlistUpdated: true
            }

        case 'RECEIPT_IMAGE_UPLOADED':
            return {
                ...state,
                currentRequestImage: action.payload.data.name
            }    

        case 'REQUEST_ADDED':
            return {
                ...state,
                // requests: action.payload,
                isRequestDelivered: true
            }
        case 'CLOSE_SCSS_MSG':
            return {
                ...state,
                isRequestDelivered: false
            }

        case 'IS_LOADING': 
            return {
                ...state,
                isRequestLoading: action.isLoading
            }
            
        case 'persist/REHYDRATE':
            if (action.payload.courseRequests) {
                return {
                    ...state,
                    requests: action.payload.courseRequests.requests,
                    // isCourseUpdated: action.payload.courseList.isCourseUpdated,
                };
            }
        default:
            return state;
    }
}