import React from 'react'
import { BsFacebook, BsFillHeartFill, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Roomdetails() {

  return (
    <div>

<div>
        <section>
    <div className="container px-6 pt-10 pb-8 lg:pb-12 lg:pt-14 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="" className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" src="https://i.ibb.co/wKfZ6wh/h-6.jpg"/>
        <div className="lg:w-1/2 w-full lg:pl-4 xl:pl-14 lg:py-6 mt-6 lg:mt-0">
          <h2 className='text-lg tracking-wider lg:text-xl font-semibold text-green-700 mb-3'>Available</h2>
          <h1 className="text-2xl md:text-3xl title-font font-medium mb-3 text-primary">Title</h1>
          <div className="flex mb-4">
            <div className="flex items-center">
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
              <p className="text-gray-600 dark:text-gray-400 ml-3 mr-2">8 Reviews</p>
            </div>
            <span className="flex items-center gap-3 ml-3 pl-4 pt-1 border-l-2 border-gray-200 text-2xl text-gray-700 dark:text-gray-200">
              <a href=''>
                <BsFacebook/>
              </a>
              <a href=''>
                <BsTwitter/>
              </a>
              <a href=''>
                <BsInstagram/>
              </a>
            </span>
          </div>
          <p className='leading-relaxed'>Experience luxury in our executive suite. This spacious suite offers a separate living area, a king-size bed, a well-equipped kitchenette, and a stunning ocean view. Ideal for a romantic getaway.</p>
          <p className='my-3 text-lg lg:text-xl font-bold'>Special Offers: <span className='font-normal text-base'>Book for 3 nights and get the 4th night free</span></p>
          <p className='my-3 text-lg lg:text-xl font-bold'>Room Size: <span className='font-normal text-base ml-2'>500 sq. ft.</span></p>
          <p className='my-3 text-lg lg:text-xl font-bold'>Available Seat: <span className='font-normal ml-2'>4</span></p>
          <div className="flex items-center justify-between mt-3 lg:mt-5">
            <p className="title-font font-medium text-2xl md:text-3xl">$150/<span className="text-lg font-medium">per night</span></p>
            <div className='flex items-center justify-center'>
            <button className=' text-white px-4 text-sm md:text-lg py-2 button-btn rounded-lg'>
                Book Now
              </button>
            <button className="rounded-full text-xl w-10 h-10 bg-gray-200 dark:bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
             <BsFillHeartFill/>
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
                Recent Reviews</h2>
            <div className="flex flex-wrap py-4 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                <div className="w-full px-4 mb-4 lg:mb-0 md:w-1/4">
                    <img className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 mb-2 rounded-full' src="https://lh3.googleusercontent.com/a/ACg8ocKWJDVT0493QEyxEy6cWb7J4Ak4J2iaTIY7XAkNKLOXxA=s96-c" alt="" />
                    <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                        Mehedi Hasan
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">12 SEP 2013</p>
                </div>
                <div className="w-full px-4 mb-4 md:w-1/4 lg:mb-0 lg:mt-10">
                    <div className="flex items-center">
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
                        <p className="ml-2 lg:text-lg font-medium text-gray-500 dark:text-gray-400"> 5.0</p>
                    </div>
                </div>
                <div className="w-full px-4 md:w-2/5">
                    <h2 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                        Quality is good than the product
                    </h2>
                    <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum</p>
                </div>
            </div>
            
        </div>
    </section>
      </div>
    </div>
  )
}
