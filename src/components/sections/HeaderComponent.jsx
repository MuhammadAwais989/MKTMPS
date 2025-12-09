// HeaderComponent.jsx
import React from 'react';
import headerBG from "../../assets/images/headerbg.png";

function HeaderComponent({ title }) {
  return (

    <div className="relative -translate-y-28  w-full h-[150px] max-sm:h-[200px] md:h-[260px] lg:h-[300px] overflow-hidden m-0 p-0  rounded-b-lg">

      {/* Background Image */}
      <img
        src={headerBG}
        alt="Header Background"
        className="w-full h-full object-cover  block m-0 p-0 "
      />
      {/* Dark + Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Title */}
      <h1
        className="
    absolute bottom-6 left-[8%]
    text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
    
    [text-shadow:0_2px_4px_rgba(0,0,0,0.9)]
  "
      >
        {title}
      </h1>

    </div>

  );
}

export default HeaderComponent;
