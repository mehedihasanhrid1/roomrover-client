import React from "react";
import Marquee from "react-fast-marquee";

export default function Featureroom() {
  return (
    <div className="my-6 lg:my-12">
      <div className="mx-10 mb-4 md:mb-8">
        <Marquee speed={20} pauseOnHover='true'>
        <div className="p-5 h-60 md:h-80">
        <img
         src="https://i.ibb.co/ZcdBz9h/h-1.jpg"
         alt="image 1"
         className="h-full w-full rounded-xl object-cover"
       />
        </div>
        <div className="p-5 h-60 md:h-80">
        <img
         src="https://i.ibb.co/hXVdVhK/h-4.jpg"
         alt="image 1"
         className="h-full w-full rounded-xl object-cover"
       />
        </div>
        <div className="p-5 h-60 md:h-80">
        <img
         src="https://i.ibb.co/fCmWKwL/h-3.jpg"
         alt="image 1"
         className="h-full w-full rounded-xl object-cover"
       />
        </div>
        </Marquee>
        
      </div>
      <h2 className="mb-5 lg:mb-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Featured <span className="text-primary">Rooms</span>
      </h2>
    </div>
  );
}
