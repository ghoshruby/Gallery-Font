import React from 'react';

import upload from "../images/upload.jpg"
import Navbars from './Navbars';
import Upload_Img from './Upload_Img';

function Full_Upload() {
    return(
        <div>
            <Navbars/>
             <style>{'body { background-color: #E0C7EE; }'}</style>
           
            <Upload_Img/>
             <img style={{width:"500px",height:"350px",marginLeft:"40%",marginTop:"-25%" }} src ={upload} classname ='App-logo' ></img> 
          <br/>
          <br/>
           
       
      </div>
    )
}

export default Full_Upload;