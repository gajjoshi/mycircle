import React, { useEffect, useState } from "react";
import bgImage from './assets/MyC.png';

export default function Header() {
  const [s, setS] = useState(0);
  const [st, setSt] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      console.log(scrollY);
      if (scrollY < 200) {
        setS(0);
      } else if (scrollY >= 200 && scrollY < 2970) {
        setS(1);
      }
      if (scrollY < 1000) {
        setSt(5);
      }
      if (scrollY >= 1000 && scrollY < 1700) {
        setSt(1);
      } else if (scrollY >= 1700 && scrollY < 2700) {
        setSt(2);
      } else if (scrollY >= 2700 && scrollY < 3100) {
        setSt(3);
      } else if (scrollY >= 3100) {
        setSt(4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = s === 1
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        background: "rgba(231, 227, 227, 0.35)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(6.5px)",
        webkitBackdropFilter: "blur(11px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        zIndex: 999,
        paddingTop: '30px', // Add padding to shift the image down
      }
    : {
        position: "fixed",
        top: 30,
        left: 0,
        right: 0,
        backgroundColor: "",
        paddingTop: '50px', // Add padding to shift the image down
        zIndex: 999,
      };

  return (
    <>
      <div style={{ position: "sticky", zIndex: "5 ", top: 0, backgroundColor: "", paddingTop: "0px" }}>
        <header class="w-full h-20 flex justify-center absolute " style={nav}>
          <nav class="w-4/5 flex justify-between items-center font-bebas">
            <img src={bgImage} alt="Spark Reach Media" style={{ height: '400px' }} />
          </nav>
        </header>
      </div>
    </>
  );
}
