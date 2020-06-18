import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import courseReducer from './courseVideosReducer';
import commentReducer from './CommentReducer';

export default combineReducers({
    auth: AuthReducer,
    courseVideos: courseReducer,
    comments: commentReducer
});

