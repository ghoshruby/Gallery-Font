// import { Redirect } from "react-router-dom";
import React from 'react';
import {useNavigate} from 'react-router-dom';


function LogOut() {
    let Navigate = useNavigate();

     sessionStorage.removeItem('user')
     sessionStorage.removeItem('name')
    
     sessionStorage.removeItem('uid')
    
     Navigate("/")
   
    return (
    <>
    </>
    )
}

export default LogOut;