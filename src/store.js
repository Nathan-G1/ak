import {createStore, applyMiddleware, compose} from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(
//         applyMiddleware(...middleware)
//     )
// );

const store = composeEnhancers(
    applyMiddleware(...middleware),
    autoRehydrate()
)(createStore)(rootReducer);

persistStore(store);

export default store;
