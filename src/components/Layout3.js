import React from 'react';
import img8 from '../images/img8.jfif';
import img9 from '../images/img9.jfif';
import img10 from '../images/img10.jfif';
import img13 from '../images/img13.jfif';
import img31 from '../images/img31.jfif';

function Layout3() {
    return(
        <div className="layout3">
<img src={img8} alt="Write something here" width="240" height="400" className="img8" />
<img src={img9} alt="Write something here" width="220" height="360" className="img9" />
<img src={img10} alt="Write something here" width="220" height="300" className="img10"/>
<img src={img13} alt="Write something here" width="220" height="360" className="img13" />
<img src={img31} alt="Write something here" width="230" height="400" className="img31" />
       </div>
    )
        
      
};

export default Layout3;