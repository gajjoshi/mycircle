// Intro.js
import React from 'react';
import bgImage from './assets/MyC.png';
import bgVideo from './assets/casino3.mp4';
import './intro.css';

export default function Intro() {
  return (
    <div className='video-cont'>
      <div className="overlay"></div>
      <div className="bg-image">

      </div>
      <video autoPlay loop muted className="video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className='content'>
        {/* Content goes here */}
      </div>
    </div>
  );
}
