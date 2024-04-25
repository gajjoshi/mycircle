import React from 'react';
import D247Logo from './assets/MyC.png'; // Import the image

export default function Footer() {
  return (
    <div>
      <footer className="font-bebas flex flex-col justify-center items-center bg-black text-white h-60">
        {/* Your other footer content */}
        <a href="https://wa.link/mycircle247"> 

        <img style={{height:"20vh"}} src={D247Logo} alt="D247 Logo" /> {/* Use the imported image */}
        </a>
      </footer>
    </div>
  );
}
