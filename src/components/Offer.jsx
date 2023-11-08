import React from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Offer() {
  return (
    <div>
        <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
        src="https://i.ibb.co/rFQkwfx/h-2.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <h2>Room Rover</h2>
            
        </div>
        </div>
      </div>
      
    </Carousel>
    </div>
  )
}

