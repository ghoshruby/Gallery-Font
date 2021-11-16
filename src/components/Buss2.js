import React from 'react';
import img8 from '../images/img8.jfif';
import img9 from '../images/img9.jfif';
import img10 from '../images/img10.jfif';
import img13 from '../images/img13.jfif';
import img31 from '../images/img31.jfif';
import { Content, Header } from '../components/Styles';
import '../index.css';
import Footer from './Footer';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';

function Buss2() {
    return(
       <div>

             <div className="layout4"> 
                {/* <style>{'body { background-color: #F0EEBA; }'}</style> */}
                
                <img src={img8}  width="240" height="350"  className="cake" />
                <img src={img9} alt="Write something here" width="230" height="240" className="burger" />
                <img src={img10} alt="Write something here" top="240"width="220" height="360" className="rangoli"/>
                <img src={img13} alt="Write something here" width="220" height="300" className="home" />
                <img src={img31} alt="Write something here" width="230" height="320"  className="im8"/> 
                
           
             </div>


        </div>  

        
   
    )
}

export default Buss2;