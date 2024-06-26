import React from 'react';
import golden from './assets/golden.jpg';
import greenGlitter from './assets/green_glitter.jpg'; // Import the green_glitter image
import blueGlitter from './assets/blue_glitter.jpg'; // Import the green_glitter image

import photo from './assets/MyC.png';
import './Tape.css';

export default function Tape() {
  const backgroundImageStyle = {
    backgroundImage: `url(${golden})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  const buttonBackgroundStyle = {
    backgroundImage: `url(${greenGlitter})`, // Use green_glitter image for the button background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const buttonBackgroundStyle2 = {
    backgroundImage: `url(${blueGlitter})`, // Use green_glitter image for the button background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={backgroundImageStyle}>
      <footer className="font-bebas flex flex-col justify-center items-center text-white h-60">
      <div className="mt-20"> {/* Add margin top to push content downward */}
  <a href="https://wa.link/mycircle247" className="button" style={buttonBackgroundStyle}> {/* Apply button background style */}
    <h1 className="text-3xl lg:text-5xl text-animation">CLICK NOW FOR WHATSAPP</h1>
  </a>
</div>
        <a href="https://t.me/mycircle247_book" className="button" style={buttonBackgroundStyle2}> {/* Apply button background style */}
          <h1 className="text-3xl lg:text-5xl  text-animation">CLICK NOW FOR TELEGRAM</h1>
        </a>
        <div className="join-with" style={{color:"black"}}>
          <h1 className="text-3xl lg:text-5xl ">JOIN WITH</h1>
        </div>
        <div>
          <a href="https://wa.link/mycircle247"> 
            <img style={{ height: "15vh" }} src={photo} alt="Description of the image" />
          </a>
        </div>
      </footer>
    </div>
  );
}
