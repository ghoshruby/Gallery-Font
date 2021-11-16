import React from 'react';
import cake from '../images/cake.jpg';
import burger from '../images/burger.jfif';
import rangoli from '../images/rangoli.jpg';
import home from '../images/home.jpeg';
import img8 from '../images/img8.jfif';
import { Content, Header } from '../components/Styles';
import '../index.css';
import Footer from './Footer';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';

function Business() {
    return(
       <div>

             <div className="layout4"> 
                {/* <style>{'body { background-color: #EDF3F6; }'}</style> */}
                
                <img src={cake}  width="240" height="350"  className="cake" />
                <img src={burger} alt="Write something here" width="230" height="240" className="burger" />
                <img src={rangoli} alt="Write something here" top="240"width="220" height="360" className="rangoli"/>
                <img src={home} alt="Write something here" width="220" height="300" className="home" />
                <img src={img8} alt="Write something here" width="230" height="320"  className="im8"/> 
                
           
             </div>
  

        </div>  

        
   
    )
}

export default Business;