
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button1 } from './Styles';
  
const ScrollTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button1 className="button11">
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button1>
  );
}
  
export default ScrollTop;