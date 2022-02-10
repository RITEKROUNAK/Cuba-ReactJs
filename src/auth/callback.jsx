import React,{useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Loader from '../layout/loader'
import {useAuth0} from '@auth0/auth0-react'
import { DefaultLayout } from '../layout/theme-customizer';

const Callback = (props) => {
  
  const {user} = useAuth0()
  const id = window.location.pathname.split('/').pop()
  const defaultLayout= Object.keys(DefaultLayout);
  const layout= id ? id : defaultLayout
  useEffect(() => {
    if(user){
      localStorage.setItem("auth0_profile",JSON.stringify(user))
      localStorage.setItem("authenticated",true)
      window.location.href = `${process.env.PUBLIC_URL}/dashboard/default/${layout}`;
    }
  })

  return (
    <div>
        <Loader/>
    </div>
  );

}

export default withRouter(Callback);