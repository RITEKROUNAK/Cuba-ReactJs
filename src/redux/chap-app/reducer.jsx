import {
    GET_MEMBERS,
    GET_MEMBERS_SUCCESS,
    GET_CHATS,
    GET_CHATS_SUCCESS,
    CHANGE_CHAT,
    CREATE_CHAT,
    UPDATE_SELECTED_USER,
    SEARCH_MEMBER,
    SEND_MESSAGE,
    REPLY_BY_SELECTED_USER

} from '../actionTypes';


const initial_state = {
    allMembers: null,
    members: null,
    chats: null,
    loading: false,
    currentUser: null,
    selectedUser: null,
};
export default (state = initial_state, action) => {
    switch (action.type) {

        case GET_MEMBERS:
            return { ...state, loading: true };

        case GET_MEMBERS_SUCCESS:
            const members = action.payload;
            const currentUser = members.chats[0]
            return { ...state, loading: false, allMembers: members, members: members.chats, currentUser: currentUser };

        case GET_CHATS:
            return { ...state,chats:action.payload.chats, loading: true };

        case GET_CHATS_SUCCESS:
            return { ...state, loading: false, chats: action.payload.chats, selectedUser: state.allMembers.chats.find(x => x.id === action.payload.selectedUser) };

        case CHANGE_CHAT:
            return { ...state, selectedUser: state.allMembers.chats.find(x => x.id === action.payload) };

        case CREATE_CHAT:
            return { ...state };


        case SEARCH_MEMBER:
            if (action.payload === '') {
                return { ...state, members: state.allMembers.chats };
            } else {
                const keyword = action.payload.toLowerCase();
                const searchedMembers = state.allMembers.chats.filter((member) =>  member.name.toLowerCase().indexOf(keyword) > -1);
                return { ...state, members: searchedMembers }
            }

        case SEND_MESSAGE:
            return { ...state };

        case REPLY_BY_SELECTED_USER:
            return { ...state };
    
        case UPDATE_SELECTED_USER:
            return { ...state, updateSelectedUser: state.allMembers.chats.find(x => x.id === action.payload.selectedUser) }

        default: return { ...state };
    }
}