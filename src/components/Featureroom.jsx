import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

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
      <h2 className="mb-5 md:mb-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Featured <span className="text-primary">Rooms</span>
      </h2>
      <div className="xl:mx-10 flex items-center justify-center flex-col md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4 xl:gap-6">

        <div className="hover:scale-105 duration-500 rounded-xl w-80 p-5 bg-gray-200 dark:bg-[#253246]">
          <img className="rounded-xl h-56 object-cover mb-4 md:mb-5" src="https://i.ibb.co/9nP6JQ5/h-5.jpg" alt="" />
            <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">150$/ <span className="text-lg font-medium">per night</span></h2>
           <Link to=""> <button className=' text-white px-4 text-sm md:px-4 lg:px-5 md:text-lg py-2 button-btn rounded-lg'>
                Book Now
              </button></Link>
            </div>
        </div>

      </div>
      </div>
    </div>
  );
}
