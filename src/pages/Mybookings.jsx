import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider";
import moment from "moment";

export default function Mybookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/bookings/cart?email=${user?.email}`
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [user]);

  console.log(bookings);

  return (
    <div>
      <h2 className="my-5 md:my-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        My <span className="text-primary">Bookings</span>
      </h2>
      <section className="flex items-center mb-8 lg:mb-14">
        <div className="justify-center flex items-center flex-col gap-8 max-w-7xl px-6 py-6 lg:py-12 mx-auto bg-gray-100 rounded-md shadow-md dark:border-[#253246] dark:bg-[#253246] lg:px-10">
          {bookings.map((booking) => (
            <div key={booking._id} className="max-w-6xl mx-auto">
              <div className="p-8 md:p-5 lg:p-5 xl:p-10 bg-white rounded-md shadow dark:bg-gray-900 sm:flex sm:items-center xl:px-12">
                <div className="md:mr-6 lg:mr-10">
                  <img
                    className=" w-full h-32 rounded-md object-cover  mx-auto mb-4"
                    src={booking.room_image}
                    alt={booking.room_title}
                  />
                </div>
                <div>
                  <h2 className="inline-block mb-3 text-xl font-medium">
                    {booking.room_title}
                  </h2>
                  <div className="flex flex-col text-sm md:text-base items-start mr-10 gap-1">
                    <p className="font-medium">
                      <span className="font-medium">Total Cost:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-400">
                        ${booking.total_price}
                      </span>
                    </p>
                    <p className="font-medium">
                      <span className="font-medium">Booked Seat:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">
                        {booking.seat}
                      </span>
                    </p>
                    <p className="font-medium">
                      <span className="font-medium">Check-in Date:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">
                      {moment(booking.checkin_date).format("DD MMMM YYYY")}
                      </span>
                    </p>
                    <p className="font-medium">
                      <span className="font-medium">Checkout Date:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300 ">
                      {moment(booking.checkout_date).format("DD MMMM YYYY")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 mt-5 lg:mt-0">
                  <button className="text-white lg:text-lg font-medium py-2.5 px-5 lg:px-6  text-center rounded-lg button-btn w-full lg:w-auto">
                    Give Review
                  </button>
                  <button className="text-white lg:text-lg font-medium py-2.5 px-5 lg:px-6  text-center rounded-lg bg-red-400 hover:bg-red-500 w-full lg:w-auto">
                    Cancel Booking
                  </button>
                </div>
              </div>
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
