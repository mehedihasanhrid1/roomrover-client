import React from "react";

export default function Mybookings() {
  return (
    <div>
        <h2 className="my-5 md:my-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        My <span className="text-primary">Bookings</span>
      </h2>
        <section className="flex items-center mb-8 lg:mb-14">
        <div
            className="justify-center flex-1 max-w-7xl px-6 py-6 lg:py-12 mx-auto bg-gray-100 rounded-md shadow-md dark:border-[#253246] dark:bg-[#253246] lg:px-10">
            <div className="max-w-6xl mx-auto">
                <div
                    className="p-10 bg-white rounded-md shadow dark:bg-gray-800 sm:flex sm:items-center xl:py-5 xl:px-12">
                    <a href="#" className="mr-6 md:mr-12">
                        <img className=" w-full lg:w-[80px] h-[200px] lg:h-[80px]  object-cover  mx-auto mb-6 sm:mb-0 "
                            src="https://i.ibb.co/wKfZ6wh/h-6.jpg"
                            alt="room"/>
                    </a>
                    <div>
                        <a className="inline-block mb-1 text-lg lg:text-xl font-medium hover:underline dark:text-gray-400" href="#">
                        Super Laxury Room</a>
                        <div className="flex flex-wrap">
                            <p className="mr-4  font-medium">
                                <span className="font-medium dark:text-gray-400">Total Price:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-400">$150</span>
                            </p>
                            <p className="mr-4  font-medium">
                                <span className="font-medium dark:text-gray-400">Total Seat:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-400">4</span>
                            </p>
                            <p className="mr-4  font-medium">
                                <span className="font-medium dark:text-gray-400">Booking Date:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-400 mr-2">11 Nov 2023</span>to
                                <span className="ml-2 text-gray-600 dark:text-gray-400">12 Nov 2023</span>
                            </p>
                        </div>
                    </div>
                </div>
        <div/>
        </div>
        </div>
    </section>
    </div>
  );
}
