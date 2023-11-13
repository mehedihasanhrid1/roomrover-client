import React, { useContext, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AuthContext } from "../AuthProvider";
import moment from "moment";
import axios from "axios";

export default function Bookingdetails() {
  const { room } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [bookingPrice, setBookingPrice] = useState(0);

  useEffect(() => {
    document.title = `Book Now - ${room.title}`;
  }, []);

  if (!room) {
    return (
      <div className="h-screen flex items-center justify-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  const initialValues = {
    name: "",
    email: user?.email || "",
    phone: "",
    price: room?.price || "",
    seat: "1",
    bookingDateFrom: moment().format("YYYY-MM-DD"),
    bookingDateTo: moment().add(1, "days").format("YYYY-MM-DD"),
    address: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/bookings", {
        room_id: room._id,
        room_title: room.title,
        room_image: room.image,
        name: values.name,
        email: values.email,
        phone: values.phone,
        seat: parseInt(values.seat, 10),
        checkin_date: values.bookingDateFrom,
        checkout_date: values.bookingDateTo,
        total_price: bookingPrice,
        address: values.address,
      });

      const roomCapacity = parseInt(room.capacity, 10) - parseInt(values.seat, 10);
      const newCapacity = roomCapacity.toString();
      const updatedRoom = await axios.put(
        `http://localhost:5000/update/${room._id}`,
        {
          capacity: newCapacity,
        }
      );

      setOpen(false);
      navigate('/rooms');

    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const startDate = moment(values.bookingDateFrom);
    const endDate = moment(values.bookingDateTo);
    const days = endDate.diff(startDate, "days");
    const seats = parseInt(values.seat, 10);
    const numericPrice = parseFloat(room.price.replace(/[^0-9.-]+/g, ""));
    const totalPrice = seats * days * numericPrice;
    setBookingPrice(totalPrice);
    setOpen(true);

  };

  return (
    <div>
      <h2 className="my-5 md:my-10 lg:my-14 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Booking <span className="text-primary">Form</span>
      </h2>
      <div className="px-3 md:px-16 lg:px-32 mb-10 md:mb-14">
        <div className="bg-gray-100 dark:bg-blue-gray-800 rounded-lg flex items-center justify-center p-5 md:p-10">
          <form className="w-full" onSubmit={handleFormSubmit}>
            <div className="flex flex-col lg:flex-row items-center justify-start gap-8 mb-5">
              <img
                className="h-40 rounded-lg"
                src={room.image}
                alt={room.title}
              />
              <h1 className="text-2xl md:text-3xl title-font font-medium">
                {room.title}
              </h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
                  value={values.name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={values.price}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder={room.price}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="seat"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Seat
                </label>
                <input
                  type="number"
                  name="seat"
                  id="seat"
                  value={values.seat}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder={`Available Seat: ${room.capacity}`}
                  required
                  min="1"
                  max={room.capacity}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="bookingDateFrom"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Check In Date
                </label>
                <input
                  type="date"
                  name="bookingDateFrom"
                  id="bookingDateFrom"
                  value={values.bookingDateFrom}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="bookingDateTo"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Check Out Date
                </label>
                <input
                  type="date"
                  name="bookingDateTo"
                  id="bookingDateTo"
                  value={values.bookingDateTo}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  required
                />
              </div>
              <div className="w-full col-span-2">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder="Your Address"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-white  text-sm md:text-lg mt-6 font-medium py-2.5 px-5 lg:px-6  text-center rounded-lg button-btn"
              >
                Confirm Booking
              </button>
            </div>
          </form>
          <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="mt-2">Booking Summary</DialogHeader>
        <DialogBody>
          <p>
            <span className="text-lg font-semibold text-gray-900">Name:</span>{" "}
            <span className="text-gray-800">{values.name}</span>
          </p>
          <p>
            <span className="text-lg font-semibold text-gray-900">Email: </span>
            <span className="text-gray-800">{values.email}</span>
          </p>
          <p>
            <span className="text-lg font-semibold text-gray-900">Phone: </span>
            <span className="text-gray-800">{values.phone}</span>
          </p>
          <p>
            <span className="text-lg font-semibold text-gray-900">Seat: </span>
            <span className="text-gray-800">{values.seat}</span>
          </p>
          <p>
            <span className="text-lg font-semibold text-gray-900">
              Check In:{" "}
            </span>
            <span className="text-gray-800">
              {moment(values.bookingDateFrom).format("DD MMMM YYYY")}
            </span>
          </p>
          <p>
            <span className="text-lg font-semibold text-gray-900">
              Check Out:{" "}
            </span>
            <span className="text-gray-800">
              {moment(values.bookingDateTo).format("DD MMMM YYYY")}
            </span>
          </p>
          <p>
            <span className="text-lg font-semibold text-gray-900">
              Address:{" "}
            </span>
            <span className="text-gray-800">{values.address}</span>
          </p>
          <p>
            <span className="text-xl font-semibold text-gray-900">
              Total Price:{" "}
            </span>
            <span className="text-gray-800 text-lg">${bookingPrice}</span>
          </p>
        </DialogBody>
        <DialogFooter className="mr-2">
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
          <Button variant="gradient" color="green" onClick={handleUpdate}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
        </div>
      </div>
    </div>
  );
}
