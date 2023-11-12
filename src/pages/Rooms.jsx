import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Rooms() {
  const {rooms} = useLoaderData();
  console.log(rooms);
  return (
    <div>
              <h2 className="my-5 md:my-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Choose a <span className="text-primary">Avilable Room</span>
      </h2>
      <form className='mb-5 lg:mb-8 md:ml-5 xl:ml-10 flex items-center justify-center md:justify-start'>
	<select name="filter" className="rounded-md bg-gray-100 dark:bg-[#253246] p-3 border border-gray-200 dark:border-gray-800">
					<option defaultValue="default">Choose a filter</option>
					<option value="popularity">Sort by popularity</option>
					<option value="rating">Sort by average rating</option>
					<option value="price">Sort by price: low to high</option>
					<option value="price-desc">Sort by price: high to low</option>
			</select>
	</form>
      <div className="xl:mx-10 flex items-center justify-center flex-col md:flex-row mb-10 md:mb-12 lg:mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4 xl:gap-6">

        <div className="hover:scale-105 duration-500 rounded-xl w-80 p-4 bg-gray-200 dark:bg-[#253246]">
          <div className='relative mb-4 md:mb-5'>
          <img className="rounded-xl h-60 object-cover" src="https://i.ibb.co/9nP6JQ5/h-5.jpg" alt="" />

            {/* <h2 className='text-3xl absolute inset-0 grid h-full w-full place-items-center bg-black/75 rounded-lg text-white font-semibold '>Unavilable</h2> */}

          </div>
          <div className='mb-2 flex items-center justify-between'>
            <p className='text-lg font-medium'>4 Reviews</p>
            <div className='flex items-center justify-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            </div>
          </div>
            <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">150$/ <span className="text-lg font-medium">per night</span></h2>
            <Link to="/details">
            <button className=' text-white px-4 text-sm md:text-lg py-2 button-btn rounded-lg'>
                See Details
              </button>
            </Link>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}
