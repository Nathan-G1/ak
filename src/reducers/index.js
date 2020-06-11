import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import courseReducer from './courseVideosReducer';

export default combineReducers({
    signupReducer: signupReducer,
    courseVideos: courseReducer
});

