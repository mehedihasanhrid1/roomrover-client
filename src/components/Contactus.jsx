import React from 'react';
import ContactLogo from '../assets/contact_us.png';
import { Helmet } from 'react-helmet-async';

const Contactus = () => {
    return (
        <div>
             <Helmet>
      <title>Contact Us - We're Here to Help</title>
      </Helmet>
            <section>
  <div className="pt-10 md:pt-14 pb-8 md:py-12 lg:pt-20 px-6 md:px-10 lg:px-20 mx-auto">
      <h2 className="mb-3 md:mb-5 text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact <span className='text-primary'>Us</span></h2>
      <p className="mb-6 font-light text-center text-gray-600 dark:text-gray-200 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our service plan? Let us know.</p>
        <div className='flex items-center justify-center gap-20'>
            <img className='hidden lg:block w-96 xl:w-[36rem]' src={ContactLogo} alt="" />
        <form action="" className="space-y-8 w-full">
          <div>
              <label htmlFor="email" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2  font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2  font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 lg:px-8 font-medium text-center rounded-lg sm:w-fit focus:ring-2 focus:outline-none button-btn text-white">Send message</button>
      </form>
        </div>
  </div>
</section>
            
        </div>
    );
};

export default Contactus;