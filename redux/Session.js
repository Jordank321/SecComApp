import { AsyncStorage } from "react-native"

// Actions

const UPDATE = 'SecCom/Sessions/UPDATE';
const REMOVE = 'SecCom/Sessions/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case UPDATE:
            return {...state, current: action.session}
        case REMOVE:
            return {...state, current: null}
        // do reducer stuff
        default: return state;
    }
}

function updateSession(session) {
    return { type: UPDATE, session };
}

function removeSession() {
    return { type: REMOVE };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function loadSession() {
    return dispatch => AsyncStorage.getItem('SESSION').then(session => {
        if (session != null) {
            dispatch(updateSession(session))
        }
    })
}

export function newSession(session) {
    return dispatch => {
        dispatch(updateSession(session));
        AsyncStorage.setItem('SESSION', session);
    }
}

export function deleteSession() {
    return dispatch => AsyncStorage.removeItem('SESSION', (err) => {if(err !== null) alert(err)}).then(() => dispatch(removeSession()))
}