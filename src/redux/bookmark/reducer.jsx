import {GET_BOOKMARK_LIST,
        ADD_TO_MY_BOOKMARK,
        ADD_NEW_BOOKMARK,
        REMOVE_BOOKMARK,
        REMOVE_FROM_MY_BOOKMARK,
        UPDATE_BOOKMARK,
        UPDATE_MY_BOOKMARK} from '../actionTypes'


const initial_state = {
    bookmark:[],
    mybookmarkdata:[],
    loading: false,
}

export default (state = initial_state, action) => {

    switch (action.type) {

        case GET_BOOKMARK_LIST:
            return {...state,bookmark:action.bookmark.data, loading: true,};

        case ADD_TO_MY_BOOKMARK:
            return {...state,mybookmarkdata:[...state.mybookmarkdata, { ...action.payload.mybookmarkdata}]};
        
        case ADD_NEW_BOOKMARK:
            state.bookmark.push({
                id: state.bookmark.length + 1,
                fillstar:false,
                image: action.payload.image_url,
                title: action.payload.bookmarkdata.title,
                website_url: action.payload.bookmarkdata.url,
                desc: action.payload.bookmarkdata.desc,
                collection:action.payload.bookmarkdata.collection
            })
        return {...state,bookmark:state.bookmark};
        
        case UPDATE_BOOKMARK:
            return {
                ...state,bookmark: state.bookmark.map(item => item.id === action.payload.id ?
                    { ...item, 
                        id: action.payload.id,
                        fillstar:action.payload.updatedata.fillstar,
                        image: action.payload.image_url,
                        title: action.payload.updatedata.title,
                        website_url: action.payload.updatedata.url,
                        desc: action.payload.updatedata.desc,
                        collection:action.payload.updatedata.collection
                    } : 
                    item
                ) 
            };
        
        case UPDATE_MY_BOOKMARK:
                return {
                    ...state,mybookmarkdata: state.mybookmarkdata.map(item => item.id === action.payload.id ?
                        { ...item, 
                            id: action.payload.id,
                            fillstar:action.payload.updateMydata.fillstar,
                            image: action.payload.image_url,
                            title: action.payload.updateMydata.title,
                            website_url: action.payload.updateMydata.url,
                            desc: action.payload.updateMydata.desc,
                            collection:action.payload.updateMydata.collection
                        } : 
                        item
                    ) 
                };

        case REMOVE_BOOKMARK:
            let new_bookmark = state.bookmark.filter(item=> action.removeid !== item.id)
            return{...state,bookmark: new_bookmark}
        
        case REMOVE_FROM_MY_BOOKMARK:
            let new_my_bookmark = state.mybookmarkdata.filter(item=> action.bookmarkid !== item.id)
            return{...state,mybookmarkdata: new_my_bookmark}
                
        default: return { ...state };
    }
    
}