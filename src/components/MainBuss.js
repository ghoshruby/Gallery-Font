import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Business from './Business';
import Buss1 from './Buss1';
import Buss2 from './Buss2';
import {  Button } from '@material-ui/core';
import Footer from './Footer';
import Navbars from './Navbars';

function MainBuss() {
    return(
        <div>
       <Navbars/>
        <Carousel fade className="background">
  <Carousel.Item interval={5000}>
  <div>
     {/* <style>{'body { background-color: #F0EEBA; }'}</style> */}
      <br/>
      <br/>
      <br/>

                    <div className="font6"><h1><b>It pays to be Positive</b></h1>
                        
                        <h3><p>where people see your</p>
                        <p>brand matters more than</p>
                        <p>ever.</p></h3>
                    </div>
                        
    
     <Business/>
     <Button style={{backgroundColor:"#233478",color:"white",width:"150px",height:"50px",marginLeft:"-62%",fontSize:"120%",marginTop:"-36%",borderRadius:"45%"}} className="font8" href="https://gallery-main.herokuapp.com/login"  type="submit"  onClick >
            <b>Sign Up </b>
                           
        </Button>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div>
        {/* <style>{'body { background-color: #cde9b6; }'}</style> */}
      <br/>
      <br/>
      <br/>
      <div className="font6"><h1><b>It pays to be Positive</b></h1>
                        
                        <h3><p>where people see your</p>
                        <p>brand matters more than</p>
                        <p>ever.</p></h3></div>
                 
     <Buss1/>
            <Button style={{backgroundColor:"#233478",color:"white",width:"150px",height:"50px",marginLeft:"-62%",fontSize:"120%",marginTop:"-36%",borderRadius:"45%"}} className="font8" href="https://gallery-main.herokuapp.com/login"  type="submit"  onClick >
            <b>Sign Up </b>
                           
        </Button>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}> 
  <div>
         {/* <style>{'body { background-color: #EDF3F6; }'}</style> */}
      <br/>
      <br/>
      <br/>
       <div className="font6"><h1><b>It pays to be Positive</b></h1>
                        
                        <h3><p>where people see your</p>
                        <p>brand matters more than</p>
                        <p>ever.</p></h3></div>
                
     <Buss2/>
             <Button style={{backgroundColor:"#233478",color:"white",width:"150px",height:"50px",marginLeft:"-62%",fontSize:"120%",marginTop:"-36%",borderRadius:"45%"}} className="font8" href="https://gallery-main.herokuapp.com/login"  type="submit"  onClick >
            <b>Sign Up </b>
                           
        </Button>
 
  </div>

  </Carousel.Item>
</Carousel>

<Footer/>
  
</div>
    )
}

export default MainBuss;