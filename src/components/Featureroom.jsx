import React from "react";
import Marquee from "react-fast-marquee";

const images = [
    "https://i.ibb.co/GcBfxHv/h-13.jpg",
    "https://i.ibb.co/ZSnhL9t/h-12.jpg",
    "https://i.ibb.co/SQpknV0/h-11.jpg",
    "https://i.ibb.co/rtpx2BH/h-10.jpg",
    "https://i.ibb.co/ZcdBz9h/h-1.jpg",
    "https://i.ibb.co/hXVdVhK/h-4.jpg",
    "https://i.ibb.co/fCmWKwL/h-3.jpg"
]

export default function Featureroom() {
  return (
    <div className="my-6 lg:my-12">
      <div className="mx-10 mb-4 md:mb-8">
        <Marquee speed={20} pauseOnHover='true'>
            {
                images.map((image,index) => (
                    <div key={index} className="p-5 h-60 md:h-80">
                    <img
                     src={image}
                     alt={`image ${index}`}
                     className="h-full w-full rounded-xl object-cover"
                   />
                    </div>
                ))
            }

        </Marquee>
        
      </div>
      <h2 className="mb-5 lg:mb-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Featured <span className="text-primary">Rooms</span>
      </h2>
    </div>
  );
}
