import React from 'react';
import SignInOutContainer from '../containers';
import login from "../images/login.png"
import Navbars from './Navbars';

function BackLog() {
    return(
        <div>
            <Navbars/>
             <style>{'body { background-color: #E0C7EE; }'}</style>
            <SignInOutContainer/> 
             <img style={{width:"600px",height:"400px",marginLeft:"40%",marginTop:"-50%" }} src ={login} classname ='App-logo' ></img> 
          <br/>
          <br/>
           
       
      </div>
    )
}

export default BackLog;