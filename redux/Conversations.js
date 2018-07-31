import { getConversastions } from '../API/Api';

// Actions

const UPDATE = 'SecCom/Conversations/UPDATE';

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        case UPDATE:
            return {...state, conversations: action.conversations}
        default: return state;
    }
}

function updateConversations(conversations) {
    return { type: UPDATE, conversations };
}


export function getConversations(sessionCookie) {
    return async dispatch => {
        var conversations = await getConversastions(sessionCookie)
        dispatch(updateConversations(conversations));
    }
}