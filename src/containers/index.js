import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,Tab,Tabs,Box } from '@material-ui/core'
import Login from '../components/Login'
import Signup from '../components/Signup' 

import bg from '../images/bg.png';
import Image from '../components/Image';

const SignInOutContainer=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle={width:300,margin:"120px"}
  function TabPanel(props) {
    // <div className="background"></div>
    const { children, value, index, ...other } = props;
  // const avatarStyle={backgroundColor:'#BC190C', margin:"-130% auto", left:"190%"}
  
  return ( 
    <div
       
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
     
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
     
      </div>
      
    );
  }

  return (
    
       <Paper elevation={20} style={paperStyle}>
    <Tabs
      value={value}
      indicatorColor="secondary"
      textColor="secondary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Sign In" />
     
      <Tab label="Sign Up" />
    </Tabs>
    <TabPanel value={value} index={0}>
   <Login handleChange={handleChange}/>
  </TabPanel>
  <TabPanel value={value} index={1}>
  <Signup/>
  </TabPanel>
  
  </Paper>
    
   
  
)
}


export default SignInOutContainer;


 
