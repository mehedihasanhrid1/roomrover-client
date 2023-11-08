import React from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Offer() {
  return (
    <div>
        <Carousel navigation={()=> null} prevArrow={()=> null} nextArrow={()=> null} className="h-80 md:h-96 lg:h-[32rem]">
      <div className="relative h-full w-full">
        <img
        src="https://i.ibb.co/rFQkwfx/h-2.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="text-white w-3/4 pl-3 lg:pl-10 md:w-2/4">
            <h2 className='text-2xl lg:text-3xl mb-3 font-medium'>Room Rover</h2>
            <h2 className='text-4xl md:text-5xl lg:text-6xl mb-3 text-primary font-bold'>Up to 50% OFF</h2>
            <h2 className='text-3xl lg:text-4xl mb-5 font-bold'>On online Hotel Booking</h2>
            <button className=' text-white px-5 text-lg lg:text-xl lg:px-6 md:text-lg py-3 button-btn rounded-lg'>
                Book Now
              </button>
            
        </div>
        </div>
      </div>
    </Carousel>
    </div>
  )
}

