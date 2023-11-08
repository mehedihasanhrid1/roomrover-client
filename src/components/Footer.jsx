import React from 'react'
import { SlSocialFacebook , SlSocialLinkedin , SlSocialYoutube , SlSocialTwitter , SlSocialInstagram , SlSocialReddit } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
         <footer className="w-full bg-gray-50 dark:bg-gray-900 shadow">
         <div className="flex flex-col items-center justify-center gap-6 pt-8 md:pt-16 pb-5 md:pb-10">
         <div className='flex items-center justify-center'>
              <h2 className='text-gray-800 dark:text-white text-3xl md:text-4xl font-bold'>Room <span className='text-primary'>Rover</span></h2>
            </div>
          <div> 
          <div className='mx-5 lg:mx-0'>
          <hr className="h-[1px] bg-gray-400 border-none w-full" />
            </div>         
        <div>
      <div className="grid grid-cols-2 gap-8 lg:gap-28 px-4 pt-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <Link to='/aboutus' className="hover:underline">About Us</Link>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Gallery</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <a href="" className="hover:underline">Local Guide</a>
                </li>
                <li className="mb-4">
                    <Link to='/faq' className="hover:underline">FAQ</Link>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Follow Us</a>
                </li>
                <li className="mb-4">
                    <Link to='/contactus' className="hover:underline">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <Link to='/terms' className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <Link to='/terms' className="hover:underline">Terms &amp; Conditions</Link>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Testmonials</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <a href="" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
          </div>
            </div>
            <div className='border-t border-gray-300 flex flex-col-reverse md:flex-row items-center justify-between p-5 lg:px-10 md:py-6 gap-3 md:gap-0'>
            <p className="text-center text-sm md:text-lg">
            © 2023 Room Rover. All Rights Reserved.
          </p>
          <div>
            <ul className="flex flex-wrap items-center  font-medium  justify-center gap-6 xl:gap-8 text-lg md:text-xl grid-flow-col mx-4">
              <li>
                <a href="">
                <SlSocialFacebook/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialLinkedin/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialYoutube/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialTwitter/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialInstagram/>
                </a>
              </li>
              <li>
                <a href="">
                 <SlSocialReddit/>
                </a>
              </li>
            </ul>
          </div>
            </div>
    </footer>
    </div>
  )
}
