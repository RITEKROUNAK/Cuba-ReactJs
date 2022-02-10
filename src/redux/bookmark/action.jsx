import {ADD_TO_MY_BOOKMARK,
        ADD_NEW_BOOKMARK,
        REMOVE_BOOKMARK,
        REMOVE_FROM_MY_BOOKMARK,
        UPDATE_BOOKMARK,
        UPDATE_MY_BOOKMARK} from '../actionTypes';


export const mybookmark = (mybookmarkdata) => {
    return ({
        type: ADD_TO_MY_BOOKMARK,
        payload: {mybookmarkdata}
    })
}

export const newbookmark = (bookmarkdata,image_url) => {
    return ({
        type: ADD_NEW_BOOKMARK,
        payload: {bookmarkdata,image_url}
    })
}

export const updatebookmark = (id,updatedata,image_url) => {
    return ({
        type: UPDATE_BOOKMARK,
        payload: {id,updatedata,image_url}
    })

}

export const updateMybookmark = (id,updateMydata,image_url) => {
    return ({
        type: UPDATE_MY_BOOKMARK,
        payload: {id,updateMydata,image_url}
    })

}

export const removebookmark = (removeid) => {
    return ({
        type: REMOVE_BOOKMARK,
         removeid
    })

}

export const removemybookmark = (bookmarkid) => {
    return ({
        type: REMOVE_FROM_MY_BOOKMARK,
        bookmarkid
    })
}