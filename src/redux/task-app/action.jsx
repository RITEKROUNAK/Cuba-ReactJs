import {NEW_TASK,REMOVE_TASK,FETCH_ALL_TASK} from '../actionTypes'

export const getAllTask = (task) => {
    return ({
        type: FETCH_ALL_TASK,
        payload: task
    })
}

export const newTask = (newtaskdata) => {
    return ({
        type: NEW_TASK,
        payload: {newtaskdata}
    })

}

export const removeTask = (id) => {
    return ({
        type: REMOVE_TASK,
        id
    })

}


