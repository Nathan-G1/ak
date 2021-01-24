import { push, replace } from 'react-router-redux';

const initialState = {
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    isAuthenticating: false,
    isAuthenticated: false,
    isAuthenticationFailed: false,
    statusText: null,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'SIGN_UP':
            // alert(action.payload);
            return {
                ...state,
                isAuthenticating: true
            };
        case 'SIGN_IN_REQUEST':
            // console.log(action.payload);
            return {
                ...state,
                isAuthenticating: true
            };
        case 'SIGN_IN_SUCCESS':
            {
                localStorage.setItem('token', action.payload.id);
                localStorage.setItem('userId', action.payload.userId);

                // if(action.state.currentUser.isUserFetched){
                    window.location.replace('/courses');
                // }

                
                return {
                    ...state,
                    token: action.payload.id,
                    userId: action.payload.userId,
                    isAuthenticated: true,
                    isAuthenticating: false,
                    isAuthenticationFailed: false
                };
                
            }

        // case '@@router/CALL_HISTORY_METHOD':
        //     window.location.replace('/dashboard');

        case 'SIGN_IN_FAIL':
            return {
                ...state,
                isAuthenticationFailed: true,
                isAuthenticating: false
            }
        case 'SIGN_UP_FAIL':
            return {
                ...state,
                isAuthenticating: true
            }
        case 'SIGN_OUT':
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            return {
                ...state,
                token: null,
                userId: null,
                isAuthenticated: false,
                isAuthenticating: false,
            };
        default:
            return state;
    }
}