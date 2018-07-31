import { combineReducers } from 'redux';
import Session from './Session';
import Conversations from './Conversations';

const rootReducer = combineReducers({
    Session,
    Conversations
});

export default rootReducer;