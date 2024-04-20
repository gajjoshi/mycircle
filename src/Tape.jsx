import React from 'react';
import golden from './assets/golden.jpg';
import photo from './assets/MyC.png';
import './Tape.css';

export default function Tape() {
  const backgroundImageStyle = {
    backgroundImage: `url(${golden})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  return (
    <div style={backgroundImageStyle}>
      <footer className="font-bebas flex flex-col justify-center items-center text-white h-60">
        <a href="https://wa.link/mycircle247" className="button">
          <h1 className="text-3xl lg:text-5xl mb-2 text-animation">CLICK NOW FOR WHATSAPP</h1>
        </a>
        <div className="join-with">
          <h1 className="text-3xl lg:text-5xl mb-2">JOIN WITH</h1>
        </div>
        <div>
          <a href="https://wa.link/mycircle247"> 
            <img style={{ height: "20vh" }} src={photo} alt="Description of the image" />
          </a>
        </div>
      </footer>
    </div>
  );
}
