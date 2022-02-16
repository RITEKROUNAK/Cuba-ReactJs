import {
    GET_EMAIL_TYPES,WATCH_EMAIL,GET_ALL_EMAILS
} from '../actionTypes';

export const fetchAllEmail = () => ({
    type:WATCH_EMAIL
})

export const getAllEmails = (data) => ({
    type : GET_ALL_EMAILS,
    payload : data
})

export const getAllTypes = (result) => ({
    type : GET_EMAIL_TYPES,
    payload : result
})

export const groupBy = ( array , f ) => {
    var groups = {};
    array.forEach( function( o )
    {
        var group = f(o)[0]
        groups[group] = groups[group] || [];
        groups[group].push( o );  
    });
    return groups;
}

