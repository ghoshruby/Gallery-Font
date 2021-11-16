import React from 'react';
import SignInOutContainer from '../containers';
import bg from "../images/bg.png"
import Signup from './Signup';
function Image() {
    return(
        <div
        class="bg_image"
     
      >
          <br/>
          <br/>
          <SignInOutContainer/>  
          {/* <Signup/> */}
        <h1 className="font4">Sign Up to get
        <p>your Ideas</p> </h1>
      </div>
    )
}

export default Image;