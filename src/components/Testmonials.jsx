import React from "react";
import { Carousel } from "@material-tailwind/react";
import Banner from "../assets/testmonials.png";

export default function Testmonials() {
  return (
    <div>
      <Carousel loop={true} autoplay={true} autoplayDelay={7000} navigation={() => false} className="h-[32rem]">
        
        <div className="relative h-[32rem]">
          <div className="absolute inset-0 lg:mt-12">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="p-5 pt-8 md:pt-12 lg:p-10">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
                  alt="testimonials"
                  className="w-24 md:w-36 lg:w-80 rounded-full lg:rounded-ss-none lg:rounded-es-[40px] lg:rounded-se-[40px] lg:rounded-ee-none"
                />
              </div>
              <div className="text-gray-800">
                <div className="lg:py-12 lg:pr-5 lg:mt-3">
                  <h2 className="mb-2 text-center lg:text-left text-2xl md:text-3xl font-bold">Anna Doe</h2>
                  <p className="mb-4 text-center lg:text-left text-lg md:text-xl font-semibold">Graphic designer</p>
                  <p className="max-w-xl px-5 lg:px-0 lg:text-lg">
                  I can't say enough good things about Room Rover! Booking a hotel has never been easier or more affordable. The user-friendly website and vast selection of accommodations always ensure I find the perfect place to stay. What sets Room Rover apart is their top-notch customer support. Whenever I've had questions or needed assistance, they're quick to help. Room Rover is my go-to for seamless travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Banner}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative h-[32rem]">
          <div className="absolute inset-0 lg:mt-12">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="p-5 pt-8 md:pt-12 lg:p-10">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                  alt="testimonials"
                  className="w-24 md:w-36 lg:w-80 rounded-full lg:rounded-ss-none lg:rounded-es-[40px] lg:rounded-se-[40px] lg:rounded-ee-none"
                />
              </div>
              <div className="text-gray-800">
                <div className="lg:py-12 lg:pr-5 lg:mt-3">
                  <h2 className="mb-2 text-center lg:text-left text-2xl md:text-3xl font-bold">Halley Frank</h2>
                  <p className="mb-4 text-center lg:text-left text-lg md:text-xl font-semibold">Marketing Specialist</p>
                  <p className="max-w-xl px-5 lg:px-0 lg:text-lg">
                  Thanks to Room Rover, my family enjoyed a perfect vacation. The website's ease of use and a wide range of accommodations helped us find our ideal hotel. From budget-friendly options to luxurious escapes, Room Rover has it all. The booking process is smooth, and we'll definitely use Room Rover again for our next adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Banner}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative h-[32rem]">
          <div className="absolute inset-0 lg:mt-12">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="p-5 pt-8 md:pt-12 lg:p-10">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                  alt="testimonials"
                  className="w-24 md:w-36 lg:w-80 rounded-full lg:rounded-ss-none lg:rounded-es-[40px] lg:rounded-se-[40px] lg:rounded-ee-none"
                />
              </div>
              <div className="text-gray-800">
                <div className="lg:py-12 lg:pr-5 lg:mt-3">
                  <h2 className="mb-2 text-center lg:text-left text-2xl md:text-3xl font-bold">John Doe</h2>
                  <p className="mb-4 text-center lg:text-left text-lg md:text-xl font-semibold">Web Developer</p>
                  <p className="max-w-xl px-5 lg:px-0 lg:text-lg">
                  Room Rover has been a game-changer for my travel experiences. Their diverse hotel selection and great deals cater to every kind of traveler. Their website makes booking a breeze, and I can't imagine using any other service. Room Rover offers unbeatable value and unmatched peace of mind. I'm a loyal customer, and I trust Room Rover for all my travel needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Banner}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative h-[32rem]">
          <div className="absolute inset-0 lg:mt-12">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="p-5 pt-8 md:pt-12 lg:p-10">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                  alt="testimonials"
                  className="w-24 md:w-36 lg:w-80 rounded-full lg:rounded-ss-none lg:rounded-es-[40px] lg:rounded-se-[40px] lg:rounded-ee-none"
                />
              </div>
              <div className="text-gray-800">
                <div className="lg:py-12 lg:pr-5 lg:mt-3">
                  <h2 className="mb-2 text-center lg:text-left text-2xl md:text-3xl font-bold">Lisa Trey</h2>
                  <p className="mb-4 text-center lg:text-left text-lg md:text-xl font-semibold">Public Relations</p>
                  <p className="max-w-xl px-5 lg:px-0 lg:text-lg">
                  I've been using Room Rover for all my travel needs, and it never disappoints. From the extensive range of hotels and vacation rentals to the user-friendly interface, it's the perfect platform for finding accommodations. Their pricing is competitive, and I've saved a lot on my bookings. What truly stands out is their customer service, they go above and beyond to ensure a smooth experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Banner}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative h-[32rem]">
          <div className="absolute inset-0 lg:mt-12">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="p-5 pt-8 md:pt-12 lg:p-10">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                  alt="testimonials"
                  className="w-24 md:w-36 lg:w-80 rounded-full lg:rounded-ss-none lg:rounded-es-[40px] lg:rounded-se-[40px] lg:rounded-ee-none"
                />
              </div>
              <div className="text-gray-800">
                <div className="lg:py-12 lg:pr-5 lg:mt-3">
                  <h2 className="mb-2 text-center lg:text-left text-2xl md:text-3xl font-bold">Maria Smantha</h2>
                  <p className="mb-4 text-center lg:text-left text-lg md:text-xl font-semibold">Travel Vlogger</p>
                  <p className="max-w-xl px-5 lg:px-0 lg:text-lg">
                  I'm a frequent traveler, and Room Rover has become my trusted companion. It's my first choice for booking hotels and resorts. The platform's straightforward design and filtering options simplify the process of finding accommodations that suit my preferences and budget. Room Rover is a game-changer in the travel industry, offering fantastic choices and top-notch service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Banner}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
  
      </Carousel>
    </div>
  );
}
