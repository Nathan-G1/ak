import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import courseReducer from './CurrentCourseReducer';
import commentReducer from './CommentReducer';
import currentVideo from './SelectedVideoReducer';
import currentUser from './CurrentUserReducer';
import courseList from './CourseListReducer';
import UsersList from './UserListReducer';

export default combineReducers({
    auth: AuthReducer,
    currentCourse: courseReducer,
    comments: commentReducer,
    selectedVideo: currentVideo,
    courseList: courseList,
    currentUser: currentUser,
    usersList: UsersList
});

