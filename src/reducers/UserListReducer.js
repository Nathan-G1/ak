import uuid from 'uuid/v1';

const initialState = {
    users: [
        {
            "userType": "Stundet",
            "firstName": "ALulkaj",
            "lastName": "Kemachew",
            "avatar": "/images/user.png",
            "phoneNumber": "0912435699",
            "realm": "string",
            "username": "abreham",
            "email": "fake@gmail.com",
            "emailVerified": false,
            "id": "5f367ee70a556600174b4d92",
            "courseId": "string"
        }
    ],
    isUsersFetched: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
                isUsersFetched: true
            }
        case 'FETCH_USERS_FOR_ADMIN':
            return {
                ...state,
                users: action.payload,
                isUsersFetched: true
            }
        case 'persist/REHYDRATE':
            if (action.payload.usersList) {
                return {
                    ...state,
                    users: action.payload.usersList.users
                }
            } else {
                return state
            }
        default:
            return state;
    }
}