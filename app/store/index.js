import { createStore, combineReducers, compose } from 'redux';
import { userProfile } from './reducers';

const initialState = {}

const rootReducer = combineReducers({
    // firebase: firebaseReducer
    userProfile
})

const store = createStore(
    rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;