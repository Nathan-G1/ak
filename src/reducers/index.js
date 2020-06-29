import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import courseReducer from './CurrentCourseReducer';
import commentReducer from './CommentReducer';
import currentVideo from './SelectedVideoReducer';

export default combineReducers({
    auth: AuthReducer,
    currentCourse: courseReducer,
    comments: commentReducer,
    selectedVideo: currentVideo,
});

