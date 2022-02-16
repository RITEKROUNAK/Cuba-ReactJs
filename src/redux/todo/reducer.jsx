import {
    GET_TODO_LIST,
    GET_LIST_SUCCESS,
    ADD_NEW_ITEM,
    REMOVE_ITEM,
    MARK_ALL_ITEMS,
    SELECTED_ITEM
} from '../actionTypes'

const INIT_STATE = {
    allTodoItems: [],
    todoItems: [],
    loading: false
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_TODO_LIST:
            const allTodoItems = action.list.data;
            return { ...state, loading: false, allTodoItems:allTodoItems };
            

        case GET_LIST_SUCCESS:
            const liveItems = action.payload.filter((item) => item.status !== "deleted");
            return { ...state, loading: true, allTodoItems: liveItems, todoItems: action.payload };

        case ADD_NEW_ITEM:
            state.allTodoItems.push({
                id: state.allTodoItems.length + 1,
                title: action.payload.task,
            })
            return { ...state, loading: true, todoItems: state.allTodoItems, allTodoItems: state.allTodoItems };

        case SELECTED_ITEM:
            const updatedStatus = state.allTodoItems.reduce((cartAcc, item) => {
                if (item.id === action.payload.itemId) {
                    cartAcc.push({ ...item, status: action.payload.status })
                } else {
                    cartAcc.push(item)
                }
                return cartAcc;
            }, [])
            return { ...state, loading: true, todoItems: updatedStatus, allTodoItems: updatedStatus };

        case MARK_ALL_ITEMS:
            const updateStatus = state.allTodoItems.reduce((cartAcc, item) => {
                if (action.payload === false) {
                    cartAcc.push({ ...item, status: 'completed' })
                } else {
                    cartAcc.push({ ...item, status: 'pending' })
                }
                return cartAcc;
            }, [])
            return { ...state, loading: true, todoItems: updateStatus, allTodoItems: updateStatus };

        case REMOVE_ITEM:
            const updatedItems = state.allTodoItems.reduce((cartAcc, item) => {
                if (item.id === action.payload) {
                    cartAcc.push({ ...item, isStatus: 'deleted' })
                } else {
                    cartAcc.push(item)
                }
                return cartAcc;
            }, [])
            return { ...state, loading: true, allTodoItems: updatedItems, todoItems: updatedItems };

        default: return { ...state };
    }
}