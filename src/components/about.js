import React from 'react';
import {  Button } from '@material-ui/core';
import Footer from './Footer';
import Navbars from './Navbars';


function About() {

    return(
        <div class="about_image">
        <Navbars/>
          <br/>
          <br/>
       
        <h1 className="font5">When it comes to a  
        <p>great idea, you know</p> 
        <p>it when you see it.</p></h1>
        <br/>
        <Button style={{backgroundColor:"#B50956",color:"white",width:"200px",marginLeft:"-67%",fontSize:"120%"}}  href="https://www.gmitkolkata.org/"  type="submit"  onClick >
            <b>Know GMIT </b>
                           
        </Button>
        <br/>
        <br/>
        <br/>
        <br/>
      <Footer/>
      </div>
    )
}

export default About;