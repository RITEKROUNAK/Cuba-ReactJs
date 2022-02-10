import {NEW_TASK,REMOVE_TASK,FETCH_ALL_TASK} from '../actionTypes'
const initial_state = {
    task:[],
    newtaskdata:[],
}

export default (state = initial_state, action) => {
    switch (action.type) {

        case FETCH_ALL_TASK:
                return {...state,task:action.payload }

        case NEW_TASK:
                state.newtaskdata.push({
                    id: state.newtaskdata.length + 1,
                    title: action.payload.newtaskdata.title,
                    desc: action.payload.newtaskdata.desc,
                    collection:action.payload.newtaskdata.collection
                })
                state.task.push({
                    id: state.newtaskdata.length + 1,
                    title: action.payload.newtaskdata.title,
                    desc: action.payload.newtaskdata.desc,
                    collection:action.payload.newtaskdata.collection
                })
            return {...state,newtaskdata:state.newtaskdata,task:state.task};

        case REMOVE_TASK:
                let new_task = state.newtaskdata.filter(item=> action.id !== item.id)
                let created_task = state.task.filter(item=> action.id !== item.id)
                return{...state,newtaskdata: new_task,task: created_task}
                
        default: return { ...state };
    }
}