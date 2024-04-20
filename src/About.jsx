import React from "react";
import photo from './assets/MyC.png';

export default function About() {
  return (
    <div>
      <section id="about" className="md:p-02" style={{alignContent: "center"}}>
        <div className="border-2 border-white p-3 m-10" style={{alignContent: "center"}}>
          <div className="lg:flex gap-x-10" style={{alignContent: "center"}}>
            <div className="w-full lg:w-2/4 h-full font-bebas" style={{ alignItems: "center" }}>

              <h1 className="text-5xl md:text-7xl mt-5" style={{ alignContent: "center", color: 'white' }}>INDIA'S MOST TRUSTED PLATFORM</h1>
              <a href="https://wa.link/mycircle247"> 
              <img src={photo} alt="Description of the image" style={{ width: "100%", maxWidth: "500px", display: "block",paddingTop:50 }} />
              </a>
              {/* <p style={{ color: "#ADD8E6", textAlign: "center", fontWeight: 30 ,paddingTop:20,fontSize:"2em"}}>Ab Jeet Pakki</p> */}
              <p style={{ color: "orange", textAlign: "center", fontWeight: 30 ,paddingTop:20,fontSize:"2em"}}>Ab Jeet Pakki</p>

              <p style={{ color: "white", textAlign: "center" ,fontSize:"2em" }}>BHAROSE KE SATH</p>
              <p style={{ color: 'green', paddingTop: 10, fontSize: "1.5em" , textAlign:"center" }}>Welcome to India's most trusted book! Dive into a world of excitement and fair play, where passion meets integrity. Join us and experience gaming at its finest, with trust as our foundation.</p>
              <button className="border-2 border-white px-5 py-2 text-xl mt-10 hover:bg-yellow hover:text-black hover:border-yellow transition-all font-bebas" style={{ color: "white" }} onClick={() => {
    window.open("https://wa.link/mycircle247", "_blank"); // Replace "your-phone-number" with your actual WhatsApp phone number
  }} >
                <h1 style={{ color: "white" }}>GET ACCOUNT NOW</h1>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
