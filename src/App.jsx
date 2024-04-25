import { useEffect } from 'react'
import Intro from './Intro'
import About from './About'
import Footer from './Footer'
import Tape from './Tape'

import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const handleScroll = () => {
    
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    if(scrollY<900)
    {
      //intro
    }
    if(scrollY>=900 && scrollY<1800)
    {
      //aboutus
    }
    if(scrollY>=1800 && scrollY<2600)
    {
      //services
    }
    
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     <div style={{backgroundColor:'black'}}>
     
      
      
      
      
      
      <div id='aboutlink'>
        <About/>
      </div> 
      <Footer/>

     </div>
    </>
  )
}

export default App
