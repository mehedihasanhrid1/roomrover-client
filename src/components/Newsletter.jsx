import React from 'react'

export default function Newsletter() {
  return (
    <div data-aos="fade-left">
        <div className="container lg:my-4 mx-auto px-5 md:px-6 xl:px-32">

  <section className="mb-12 lg:mb-20 text-center lg:text-left">
    <div
      className="block rounded-lg bg-gray-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#404040]">
      <div className="flex flex-wrap items-center">
        <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src="https://i.ibb.co/hXVdVhK/h-4.jpg" alt="Trendy"
            className="h-80 object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-2 text-3xl font-bold">
              Do not miss any updates.
            </h2>
            <h2 className="text-primary mb-4 font-bold text-4xl">Subscribe to the newsletter</h2>
            <p className="mb-6 md:mb-8 lg:mb-10 text-gray-700 dark:text-gray-300">
              We will write rarely and only special discount and offers.
            </p>
            <div className="mb-6 flex-row md:mb-0 md:flex">
              <div className="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                <input type="text"
                  className="peer block min-h-[auto] w-full rounded border border-gray-300 dark:border-gray-600  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-gray-500 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 dark:peer-focus:text-gray-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2" placeholder="Enter your email" />
                <label htmlFor="exampleFormControlInput2"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-700 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-300 peer-focus:bg-gray-50 peer-focus:dark:bg-[#404040] px-2">Enter
                  your email
                </label>
              </div>
              <button type="submit"
                className="inline-block rounded button-btn px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out shadow"
                data-te-ripple-init data-te-ripple-color="light">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
    </div>
  )
}
