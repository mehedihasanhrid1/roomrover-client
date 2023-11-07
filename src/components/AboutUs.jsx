import React from 'react';
import { Carousel } from "@material-tailwind/react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-6">
    
     <Carousel className="rounded-xl h-80 md:mt-5 md:h-96 lg:h-[40rem]">
       <img
         src="https://i.ibb.co/ZcdBz9h/h-1.jpg"
         alt="image 1"
         className="h-full w-full object-cover"
       />
       <img
         src="https://i.ibb.co/hXVdVhK/h-4.jpg"
         alt="image 2"
         className="h-full w-full object-cover"
       />
       <img
        src="https://i.ibb.co/fCmWKwL/h-3.jpg"
         alt="image 3"
         className="h-full w-full object-cover"
       />
        <img
        src="https://i.ibb.co/rFQkwfx/h-2.jpg"
         alt="image 4"
         className="h-full w-full object-cover"
       />
     </Carousel>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white my-8">
          About Us
        </h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-4 md:mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Welcome to Room Rover, your go-to platform for finding the perfect
            accommodation during your travels. We are dedicated to providing
            you with a seamless and enjoyable booking experience.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our mission is to connect travelers with their ideal places to stay,
            whether it's a luxury hotel, a cozy bed and breakfast, or a trendy
            boutique hotel. We believe that the right accommodation can enhance
            your travel experience, and we're here to make it easy for you.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At Room Rover, you can explore a wide range of options, read reviews,
            and make secure bookings. We work with a network of trusted partners
            to ensure you have access to quality accommodations at competitive
            prices.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We understand that each traveler is unique, and that's why we offer a
            variety of filters and search options to match your preferences. From
            romantic getaways to family vacations and business trips, Room Rover
            has you covered.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Whether you're planning a weekend getaway or a long vacation, Room
            Rover is here to help you find your home away from home. Thank you
            for choosing us as your trusted travel companion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
