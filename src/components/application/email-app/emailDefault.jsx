import React, { Fragment,useEffect} from 'react';
import {useDispatch } from 'react-redux'
import Email from './email'
import {fetchAllEmail} from '../../../redux/email/action'

const EmailDefault = (props) =>  {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllEmail());
    },[dispatch]);

    return (
        <Fragment>
            <Email/>
        </Fragment>
    );
}

export default EmailDefault;