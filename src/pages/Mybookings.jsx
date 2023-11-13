import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider";
import moment from "moment";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Mybookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [successToast, setSuccessToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [roomID, setRoomID] = useState("");
  const [bookingID, setBookingID] = useState("");
  const [checkIn, setcheckIn] = useState("");
  const [checkOut, setcheckOut] = useState("");
  const [open, setOpen] = useState(false);
  const [openUpdater, setOpenUpdater] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleUpdateDateOpen = () => setOpenUpdater(!openUpdater);
  const [newCheckInDate, setNewCheckInDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [newCheckOutDate, setNewCheckOutDate] = useState(
    moment().add(1, "days").format("YYYY-MM-DD")
  );

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    subject: "",
    date: moment().format("YYYY-MM-DD"),
    ratings: "",
    comment: "",
  });

  const handleSuccessToast = (message) => {
    setToastMessage(message);
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 3000);
  };

  const handleErrorToast = (message) => {
    setToastMessage(message);
    setErrorToast(true);
    setTimeout(() => setErrorToast(false), 3000);
  };

  useEffect(() => {
    document.title = "Booking Information - Room Rover";
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

  }, [user,bookings]);

  const handleUpdateDateForm = (checkin, checkout, id) => {
    setBookingID(id);
    setcheckIn(checkin);
    setcheckOut(checkout);
    const currentDate = moment().format("YYYY-MM-DD");
    const differenceInDays = moment(checkin).diff(currentDate, 'days');
    if (differenceInDays < 1) {
      handleErrorToast("New check-in date must be at least one day before the current check-in date.");
      setOpenUpdater(false);
    }else{
      setOpenUpdater(true);
    }
  };

  const handleUpdateBookingDate = async () => {
    const currentDate = moment().format("YYYY-MM-DD");
    const differenceInDays = moment(checkIn).diff(currentDate, 'days');
    if (differenceInDays < 1) {
      handleErrorToast("New check-in date must be at least one day before the current check-in date.");
      setOpenUpdater(false);
      return;
    }
    try {
      const response = await axios.put(`http://localhost:5000/bookings/${bookingID}`, {
        checkin_date: newCheckInDate,
        checkout_date: newCheckOutDate,
      });
      if (response.status === 200) {
        handleSuccessToast("Booking date updated successfully");
      } else {
        handleErrorToast("Failed to update booking date");
      }
      setOpenUpdater(false);
      setNewCheckInDate(moment().format("YYYY-MM-DD"));
      setNewCheckOutDate(moment().add(1, "days").format("YYYY-MM-DD"));
    } 
    catch (error) {
      console.error("Error updating booking date:", error);
      handleErrorToast("Failed to update booking date");
    }
  };

  const handleCancelBooking = async (seat, bookingId, roomId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/bookings/${bookingId}`
      );
      const room = await axios.get(`http://localhost:5000/rooms/${roomId}`);
      const roomCapacity =
        parseInt(room.data.capacity, 10) + parseInt(seat, 10);
      const newCapacity = roomCapacity.toString();
      const updatedRoom = await axios.put(
        `http://localhost:5000/update/${roomId}`,
        {
          capacity: newCapacity,
        }
      );
      const remaining = bookings.filter((booking) => booking._id !== bookingId);
      setBookings(remaining);
      handleSuccessToast("Booking Canceled Successfully");
    } catch (error) {
      handleErrorToast("Failed to Canceled Booking.");
      console.error("Error cancelling booking:", error);
    }
  };

  const handleReviewForm = (id) => {
    setRoomID(id);
    setOpen(true);
  };

  const handleReview = async () => {
    try {
      const roomResponse = await axios.get(
        `http://localhost:5000/rooms/${roomID}`
      );
      const room = roomResponse.data;

      const newReview = {
        image: user.photoURL,
        name: formData.name,
        ratings: formData.ratings,
        reviewTime: formData.date,
        commentTitle: formData.subject,
        comment: formData.comment,
      };

      const updatedRoom = {
        ...room,
        review: [...room.review, newReview],
      };

      await axios.put(`http://localhost:5000/update/review/${roomID}`, {
        review: newReview,
      });

      setFormData({
        name: "",
        subject: "",
        date: moment().format("YYYY-MM-DD"),
        ratings: "",
        comment: "",
      });

      setOpen(false);

      handleSuccessToast("Review Submitted Successfully");
    } catch (error) {
      console.error("Error submitting review:", error);
      handleErrorToast("Failed to Submit Review");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="my-5 md:my-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        My <span className="text-primary">Bookings</span>
      </h2>
      <section className="flex items-center mb-8 lg:mb-14">
        <div className="justify-center flex items-center flex-col gap-8 max-w-7xl px-6 py-6 lg:py-12 mx-auto bg-gray-100 rounded-md shadow-md dark:border-[#253246] dark:bg-[#253246] lg:px-10">
          {bookings.length === 0 ? (
            <div className="w-full text-center py-5 dark:bg-gray-200 dark:text-gray-900 text-lg md:text-2xl font-semibold">
              Your booking is empty.
            </div>
          ) : (
            bookings.map((booking) => (
              <div key={booking._id} className="w-full">
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
                  <div className="flex flex-col items-center justify-center gap-4 md:gap-5 mt-5 lg:mt-0">
                    <button
                      className="text-white lg:text-lg font-medium py-2.5 px-5 lg:px-6  text-center rounded-lg button-btn w-full"
                      onClick={() => handleReviewForm(booking.room_id)}
                    >
                      Give Review
                    </button>
                    <button
                      className="text-white lg:text-lg font-medium py-2.5 px-5 lg:px-6  text-center rounded-lg bg-yellow-800 hover:bg-yellow-700 w-full"
                      onClick={() => handleUpdateDateForm(
                        booking.checkin_date,
                        booking.checkout_date,
                        booking._id)}
                    >
                      Update Booking Date
                    </button>
                    <button
                      onClick={() =>
                        handleCancelBooking(
                          booking.seat,
                          booking._id,
                          booking.room_id
                        )
                      }
                      disabled={moment().isAfter(moment(booking.checkin_date))}
                      className={`text-white lg:text-lg font-medium py-2.5 px-5 lg:px-6 text-center rounded-lg ${
                        moment().isAfter(moment(booking.checkin_date))
                          ? "bg-green-600 cursor-not-allowed"
                          : "bg-red-400 hover:bg-red-500"
                      } w-full`}
                    >
                      {moment().isAfter(moment(booking.checkin_date))
                        ? "Visited"
                        : "Cancel Booking"}
                    </button>
                  </div>
                </div>
                <div />
              </div>
            ))
          )}
        </div>
      </section>
      {successToast && (
        <SuccessToast
          duration={3000}
          message={toastMessage}
          onClose={() => setSuccessToast(false)}
        />
      )}
      {errorToast && (
        <ErrorToast
          duration={3000}
          message={toastMessage}
          onClose={() => setErrorToast(false)}
        />
      )}
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 mt-4">
            Share Your Experience
          </h2>
          <form className="w-full">
            <div className="grid sm:grid-cols-2 gap-4 p-5 sm:gap-6">
              <div className="w-full col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full col-span-2">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  required
                  readOnly
                  value={formData.date}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="ratings"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Ratings
                </label>
                <input
                  type="number"
                  name="ratings"
                  id="ratings"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="Ratings"
                  required
                  step="0.01"
                  max="5"
                  min="1"
                  value={formData.ratings}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full col-span-2">
                <label
                  htmlFor="comment"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  rows="3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder="Your comment"
                  required
                  value={formData.comment}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="mr-2 mb-2">
          <Button
            variant="text"
            color="red"
            onClick={() => {
              setOpen(!open);
            }}
            className="mr-3"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleReview}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Dialog open={openUpdater} handler={handleUpdateDateOpen}>
        <DialogBody className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 mt-4">
            Update Booking Date
          </h2>
          <form className="w-full">
            <div className="grid sm:grid-cols-2 gap-4 p-5 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="newCheckInDate"
                  className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
                >
                  New Check-in Date
                </label>
                <input
                  type="date"
                  name="newCheckInDate"
                  id="newCheckInDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  required
                  value={newCheckInDate}
                  onChange={(e) => setNewCheckInDate(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="newCheckOutDate"
                  className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
                >
                  New Check-Out Date
                </label>
                <input
                  type="date"
                  name="newCheckOutDate"
                  id="newCheckOutDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  required
                  value={newCheckOutDate}
                  onChange={(e) => setNewCheckOutDate(e.target.value)}
                />
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="mr-2 mb-2">
          <Button
            variant="text"
            color="red"
            onClick={() => {
              setOpenUpdater(!openUpdater);
            }}
            className="mr-3"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleUpdateBookingDate}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
