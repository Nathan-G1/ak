import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import courseReducer from './courseVideosReducer';

export default combineReducers({
    auth: AuthReducer,
    courseVideos: courseReducer
});

