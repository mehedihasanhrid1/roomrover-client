import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import moment from "moment";
import {
  BsFacebook,
  BsFillHeartFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

export default function Roomdetails() {
  const { room } = useLoaderData();

  if (!room) {
    return (
      <div className="h-screen flex items-center justify-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  useEffect(() => {
    document.title = `${room.title} - Room Rover`;
  }, []);

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce(
      (sum, review) => sum + parseInt(review.ratings),
      0
    );
    return totalRating / reviews.length;
  };

  return (
    <div>
      <div>
        <section>
          <div className="container px-6 pt-10 pb-8 lg:pb-12 lg:pt-14 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={room.title}
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200"
                src={room.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-4 xl:pl-12 lg:py-6 mt-6 lg:mt-0">
                <h2
                  className={`text-xl tracking-wider lg:text-2xl font-semibold ${
                    room.availability === "Available"
                      ? "text-green-700"
                      : "text-red-700"
                  } mb-3`}
                >
                  {room.availability}
                </h2>
                <h1 className="text-2xl md:text-3xl title-font font-medium mb-3 text-primary">
                  {room.title}
                </h1>
                <div className="flex mb-4">
                  <div className="flex items-center text-lg md:text-xl text-yellow-800">
                    {Array.from({
                      length: Math.round(calculateAverageRating(room.review)),
                    }).map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                    <p className="ml-3 lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                      {room.review.length} Reviews
                    </p>
                  </div>
                  <span className="flex items-center gap-3 lg:gap-4 ml-3 pl-4 pt-1 border-l-2 border-gray-200 text-2xl text-gray-700 dark:text-gray-200">
                    <a href="">
                      <BsFacebook />
                    </a>
                    <a href="">
                      <BsTwitter />
                    </a>
                    <a href="">
                      <BsInstagram />
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{room.roomDescription}</p>
                <p className="my-3 text-lg lg:text-xl font-bold">
                  Special Offers:{" "}
                  <span className="font-normal text-base lg:text-lg ml-1">
                    {room.specialOffers}
                  </span>
                </p>
                <p className="my-3 text-lg lg:text-xl font-bold">
                  Room Size:{" "}
                  <span className="font-normal text-base lg:text-lg ml-2">
                    {room.roomSize}
                  </span>
                </p>
                <p className="my-3 text-lg lg:text-xl font-bold">
                  Available Seat:{" "}
                  <span className="font-normal ml-2">{room.capacity}</span>
                </p>
                <div className="flex items-center justify-between mt-3 lg:mt-5">
                  <p className="title-font font-semibold text-2xl md:text-3xl">
                    {room.price}/
                    <span className="text-lg font-medium">per night</span>
                  </p>
                  <div className="flex items-center justify-center">
                   <Link to={`/bookingdetails/${room._id}`}>
                   <button className={`text-white px-4 text-sm md:text-lg py-2 ${room.availability==="Available"?"button-btn":"bg-gray-600"} rounded-lg`} disabled={room.availability === "Unavailable"}>
                      Book Now
                    </button>
                   </Link>
                    <button className="rounded-full text-xl w-10 h-10 bg-gray-200 dark:bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="flex items-center">
          <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
            <h2 className="mb-4 text-xl font-semibold text-left font-gray-600 dark:text-gray-400">
              Recent Reviews
            </h2>
            {room.review.map((review, index) => (
              <div
                key={index}
                className="flex items-center flex-wrap py-4 mb-6 border-t border-b border-gray-200 dark:border-gray-700"
              >
                <div className="w-full px-4 mb-4 lg:mb-0 md:w-1/4">
                  <img
                    className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 mb-2 rounded-full"
                    src={review.image}
                    alt=""
                  />
                  <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                    {review.name}
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {moment(review.reviewTime).format("DD MMMM YYYY")}
                  </p>
                </div>
                <div className="w-full px-4 mb-4 md:w-1/4 lg:mb-0">
                  <div className="flex items-center text-lg md:text-xl text-yellow-800">
                    {Array.from({ length: Number(review.ratings) }).map(
                      (_, index) => (
                        <AiFillStar key={index} />
                      )
                    )}
                    <p className="ml-2 lg:text-lg font-medium text-gray-500 dark:text-gray-400">
                      {" "}
                      {review.ratings}
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-2/5">
                  <h2 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                    {review.commentTitle}
                  </h2>
                  <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
