import {
    GET_MEMBERS,
    GET_MEMBERS_SUCCESS,
    GET_CHATS,
    GET_CHATS_SUCCESS,
    CREATE_CHAT,
    CHANGE_CHAT,
    UPDATE_SELECTED_USER,
    SEARCH_MEMBER,
    SEND_MESSAGE,
    REPLY_BY_SELECTED_USER,
    WATCH_CHAT_MEMBERS,
    WATCH_CHAT_SUCCESS,
    WATCH_ALL_CHAT_SUCCESS
    
} from '../actionTypes';


export const  watchfetchChatMember = () => ({
    type: WATCH_CHAT_MEMBERS
})

export const  watchfetchChat = () => ({
    type: WATCH_CHAT_SUCCESS
})

export const  watchfetchAllChat = () => ({
    type: WATCH_ALL_CHAT_SUCCESS
})

export const getChats = (chats) => ({
    type: GET_CHATS,
    payload:chats
});

export const getMembers = () => ({
    type: GET_MEMBERS
});

export const searchMember = (keyword) => ({
    type: SEARCH_MEMBER,
    payload: keyword
});

export const getMembersSuccess = (chats) => {
    return ({
        type: GET_MEMBERS_SUCCESS,
        payload: {chats}
    })
};


export const getChatsSuccess = (chats, selectedUser,online) => {
    return{
        type: GET_CHATS_SUCCESS,
        payload: { chats, selectedUser,online }
    }
}

export const sendMessageToChat = (currentUserId,selectedUserId,message,allchats,online) => ({
    type: SEND_MESSAGE,
    payload: {currentUserId,selectedUserId,message,allchats,online}
});

export const replyMessageToChat = (currentUserId,selectedUserId,message,allchats,online) => ({
    type: REPLY_BY_SELECTED_USER,
    payload: {currentUserId,selectedUserId,message,allchats,online}
});

export const changeChat = (userId) => ({
    type: CHANGE_CHAT,
    payload: userId
});

export const createChat = (currentUserId,selectedUserId,allChats) => ({
    type: CREATE_CHAT,
    payload: {currentUserId,selectedUserId,allChats}
});

export const updateSelectedUser = (selectedUser,online) => ({
    type:UPDATE_SELECTED_USER,
    payload:{selectedUser,online}
})


