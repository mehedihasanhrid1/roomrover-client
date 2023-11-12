import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const Rooms = () => {
  const { rooms } = useLoaderData();
  const [filter, setFilter] = useState('default');
  const [sortedRooms, setSortedRooms] = useState([]);

  useEffect(() => {
    document.title = "Choose your favorite room - Room Rover";
    sortRooms(filter);
  }, [filter, rooms]);

  const availabilityOverlay = (availability) => {
    if (availability === "Unavailable") {
      return (
        <h2 className='text-3xl absolute inset-0 grid h-full w-full place-items-center bg-black/75 rounded-lg text-white font-semibold '>Unavailable</h2>
      );
    }
    return null;
  };

  const countReviews = (reviews) => {
    return reviews ? reviews.length : 0;
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + parseInt(review.ratings), 0);
    return totalRating / reviews.length;
  };

  const sortRooms = (filter) => {
    let sorted = [...rooms];

    switch (filter) {
      case 'popularity':
        sorted = sorted.sort((a, b) => countReviews(b.review) - countReviews(a.review));
        break;
      case 'rating':
        sorted = sorted.sort((a, b) => calculateAverageRating(b.review) - calculateAverageRating(a.review));
        break;
      case 'price-asc':
        sorted = sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        break;
      case 'price-desc':
        sorted = sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        break;
      default:
        break;
    }

    setSortedRooms(sorted);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2 className="my-5 md:my-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Choose a <span className="text-primary">Available Room</span>
      </h2>
      <form className='mb-5 lg:mb-8 md:ml-5 xl:ml-10 flex items-center justify-center md:justify-start'>
        <select name="filter" value={filter} onChange={handleFilterChange} className="rounded-md bg-gray-100 dark:bg-[#253246] p-3 border border-gray-200 dark:border-gray-800">
          <option value="default">Choose a filter</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by average rating</option>
          <option value="price-asc">Sort by price: low to high</option>
          <option value="price-desc">Sort by price: high to low</option>
        </select>
      </form>
      <div className="xl:mx-10 flex items-center justify-center flex-col md:flex-row mb-10 md:mb-12 lg:mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4 xl:gap-6">
          {sortedRooms.map((room, index) => (
            <div key={index} className="hover:scale-105 duration-500 rounded-xl w-80 p-4 bg-gray-200 dark:bg-[#253246]">
              <div className='relative mb-4 md:mb-5'>
                <img className="rounded-xl h-60 object-cover" src={room.image} alt={rooms.title} />
                {availabilityOverlay(room.availability)}
              </div>
              <div className='mb-2.5 flex items-center justify-between'>
                <p className='text-lg font-medium'>{countReviews(room.review)} Reviews</p>
                <div className='flex items-center justify-center text-lg md:text-xl text-yellow-800'>
                  {Array.from({ length: Math.round(calculateAverageRating(room.review)) }).map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{room.price} / <span className="text-lg font-medium">per night</span></h2>
                <Link to={`/details/${room._id}`}>
                  <button className=' text-white px-4 text-sm md:text-lg py-2 button-btn rounded-lg'>
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
