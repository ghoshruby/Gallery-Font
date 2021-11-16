import React from 'react';
import img1 from '../images/img1.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

function Layout2() {
    return(
        <div className="layout2">
<img src={img1} alt="Write something here" width="240" height="380" className="img1" />
<img src={img3} alt="Write something here" width="220" height="320" className="img3" />
<img src={img4} alt="Write something here" width="220" height="300" className="img4"/>
<img src={img6} alt="Write something here" width="220" height="400" className="img6" />
<img src={img5} alt="Write something here" width="240" height="380"  className="img5"/> 

        </div>
    )
};

export default Layout2;