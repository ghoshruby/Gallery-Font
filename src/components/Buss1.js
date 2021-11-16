import React from 'react';
import img1 from '../images/img1.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import { Content, Header } from '../components/Styles';
import '../index.css';
import Footer from './Footer';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';

function Buss1() {
    return(
       <div>

             <div className="layout4"> 
                {/* <style>{'body { background-color: #cde9b6; }'}</style> */}
                
                <img src={img1}  width="240" height="350"  className="cake" />
                <img src={img3} alt="Write something here" width="230" height="240" className="burger" />
                <img src={img4} alt="Write something here" top="240"width="220" height="360" className="rangoli"/>
                <img src={img5} alt="Write something here" width="220" height="300" className="home" />
                <img src={img6} alt="Write something here" width="230" height="320"  className="im8"/> 
                
           
             </div>       



        </div>  

        
   
    )
}

export default Buss1;