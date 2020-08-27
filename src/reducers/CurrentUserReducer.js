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

    isUserFetched: false,
    userImage: '',
    isImageLoaded: false,
    userPassword: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isUserFetched: true
            };

        case 'SET_PASSWORD':
            return{
                ...state,
                userPassword: action.payload,
            }
        case 'persist/REHYDRATE':
            if(action.payload.currentUser){
                return {
                    ...state,
                    user: action.payload.currentUser.user,
                    userPassword: action.payload.currentUser.userPassword,
                    isUserFetched: action.payload.currentUser.isUserFetched,
                };
            }

        case 'PROFILE_IMAGE_UPLOADED':
            return {
                ...state, 
                userImage: action.payload
            }

        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload,
                // isUserFetched: true
            };

        case 'UPDATE_IMAGE_LOADING':
            return {
                ...state,
                isImageLoaded: action.isLoading
            }

        default:
            return state;
    }
}