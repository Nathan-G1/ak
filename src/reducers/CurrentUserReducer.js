const initialState = {
    user: {
        userType: "student",
        firstName: "James",
        lastName: "Michael",
        avatar: "",
        phoneNumber: "",
        realm: "",
        username: "",
        email: "jj@gmail.com",
        emailVerified: false,
        id: "5f2938e7fa543a00175f0a29",
        courseId: ""
      },

    isUserFetched: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isUserFetched: true
            };
        case 'persist/REHYDRATE':
            return {
                ...state,
                user: action.payload.currentUser.user,
                isUserFetched: action.payload.currentUser.isUserFetched,
            };

        default:
            return state;
    }
}