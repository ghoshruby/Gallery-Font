import React from 'react';
import img2 from '../images/img2.jfif';
import img7 from '../images/img7.jfif';
import img11 from '../images/img11.jfif';
import img12 from '../images/img12.jfif';
import img14 from '../images/img14.jfif';
// import Layout2 from './Layout2';
import '../index.css';


function Layout1() {
    return(
       
        <div className="layout1"> 

  
<img src={img2}  width="240" height="400"  className="img2" />
<img src={img7} alt="Write something here" width="230" height="400" className="imag7" />
<img src={img12} alt="Write something here" top="240"width="200" height="400" className="img12"/>
<img src={img11} alt="Write something here" width="220" height="400" className="img11" />
<img src={img14} alt="Write something here" width="230" height="400"  className="img14"/> 

        </div>  

        
   
    )
}

export default Layout1;