import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Home from './containers/Home.js';


import About from './components/about';

import BackLog from './components/BackLog';
import MainBuss from './components/MainBuss';
import LogOut from './components/LogOut';
import Full_Upload from './components/Full_Upload';
import View_Img from './components/View_Img';
import All_Show from './components/All_Show';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbars/> */}
           <Routes>
             
           <Route path="/login" component={<BackLog />} />
           <Route  path="/about" component={<About />} />
           {/* <Route exact path="/business" component={FinalBoard} /> */}
           <Route path="/buss" component={<MainBuss />} />
        <Route path="/" component={<Home />} />
        <Route path="/gallery" component={<All_Show />} />
        <Route path="/upload" component={<Full_Upload />} />
        <Route path="/view" component={<View_Img />} />
        <Route path="/logout" component={<LogOut />} />

       </Routes>
       
            </BrowserRouter>
  
   
    
    </div>
  );
}

export default App;
