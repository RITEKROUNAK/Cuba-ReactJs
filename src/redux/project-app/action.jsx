import {ADD_NEW_PROJECT} from '../actionTypes';


export const addNewProject = (data) => {
    return{
        type:ADD_NEW_PROJECT,
        payload: {data}
    }
}
    