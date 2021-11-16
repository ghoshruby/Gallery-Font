import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
// import Layout from '../Slider/layout';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';


function Slider() {
   
    
    return(
       
        <Carousel fade>
  <Carousel.Item interval={5000}>
  <div>
     <style>{'body { background-color: #F0E2D1; }'}</style>
      <br/>
      <br/>
      <br/>

      <h3 className="font">Get your Next</h3>
     <h3 className="font1">Snacks Idea</h3>
    
     <Layout1/>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
  <div>
      <br/>
      <br/>
      <br/>
      <h3 className="font">Get your Next</h3>
     <h3 className="font2">Home decor Idea</h3>
     <Layout2/>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={5000}> 
  <div>
      <br/>
      <br/>
      <br/>
      <h3 className="font">Get your Next</h3>
     <h3 className="font3">Arts Idea</h3>
     <Layout3/>
  </div>
  </Carousel.Item>
</Carousel>


    )
}

export default Slider;