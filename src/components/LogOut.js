// import { Redirect } from "react-router-dom";
import React from 'react';
import { useHistory } from "react-router";


function LogOut() {
    let history = useHistory();

     sessionStorage.removeItem('user')
     sessionStorage.removeItem('name')
    
     sessionStorage.removeItem('uid')
    
     history.push("/")
   
    return (
    <>
    </>
    )
}

export default LogOut;