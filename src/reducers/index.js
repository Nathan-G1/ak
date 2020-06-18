import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import courseReducer from './CurrentCourseReducer';
import commentReducer from './CommentReducer';

export default combineReducers({
    auth: AuthReducer,
    currentCourse: courseReducer,
    comments: commentReducer
});

