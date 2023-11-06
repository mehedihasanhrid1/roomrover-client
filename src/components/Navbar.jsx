import React, { useContext , useState }  from "react";
import {BsFillMoonFill} from 'react-icons/bs';
import { FaTimes, FaBars } from "react-icons/fa";
import { CiLight } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { Tooltip } from "@material-tailwind/react";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [click, setClick] = useState(false);
    const [show, setShow] = useState(true);
    const handleClick = () => {
      setClick(!click);
      setShow(!show);
    };
    const { user, logOut } = useContext(AuthContext);

  return (
    <div className="relative">
      <nav className="py-4 px-2 md:p-5 shadow flex items-center justify-between bg-gray-200 dark:bg-gray-900">
        <div className="flex items-center justify-center gap-3 md:gap-4 text-lg md:text-xl">
        <button className="lg:hidden" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </button>
        <div>
            <Link to="/">
            <div className='flex items-center justify-center gap-1 md:gap-2'>
                <h2 className='text-gray-800 dark:text-white text-2xl md:text-3xl  lg:text-4xl font-bold'>Room<span className='text-primary'>{" "}Rover</span></h2>
            </div>
            </Link>
        </div>
        </div>
        
        <div>
            <ul className='text-lg font-medium hidden lg:flex items-center gap-5'>
            <NavLink to="/" className={(navData) => (navData.isActive ? "text-primary border-b-2 border-[#2746E6]" : '')}>
                <li className="">Home</li>
              </NavLink>
              <NavLink to="/addproduct" className={(navData) => (navData.isActive ? "text-primary border-b-2 border-[#2746E6]" : '')}>
                <li className="">Rooms</li>
              </NavLink>
              <NavLink to="/cart" className={(navData) => (navData.isActive ? "text-primary border-b-2 border-[#2746E6]" : '')}>
                <li className="">My Bookings</li>
              </NavLink>
              <NavLink to="/contactus" className={(navData) => (navData.isActive ? "text-primary border-b-2 border-[#2746E6]" : '')}>
                <li className="">Contact Us</li>
              </NavLink>
            </ul>    
        </div>
        <div className='flex items-center  gap-2 md:gap-3 lg:gap-4'>
        {user ? (
            <div className='hidden md:inline-block lg:hidden xl:inline-block'>
              <p className='text-lg font-medium'>{user.displayName}</p>
            </div>
          ) : ''}
        <div className="group flex relative">
        {user && (
          <Tooltip content={user.email}>
             <img
                className='rounded-full h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10'
                src={user.photoURL}
                alt=''
              />
          </Tooltip>
             
            )}
</div>
          
            <button onClick={toggleDarkMode} className='p-2 md:p-3 text-lg md:text-xl dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg dark:text-gray-100 hover:bg-gray-100 text-gray-700 dark:font-bold'>
            {isDarkMode ? <CiLight/> :<BsFillMoonFill/> }
            </button>
            {user ? (
            <button
              onClick={() => {
                logOut();
                setClick(false);
              }}
              className=' text-white px-3 md:px-6 text-sm md:text-lg py-2 button-btn rounded-lg'
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className=' text-white px-4 text-sm md:px-6 md:text-lg py-2 button-btn rounded-lg'>
                Login
              </button>
            </Link>
          )}   
        </div>
      </nav>
        <div className="lg:hidden font-medium text-xl mt-1" onClick={handleClick}>
          <ul className={show ? "z-50 absolute -left-[500px] transition-all ease-in duration-500 bg-white w-full md:w-80 py-5 px-8 rounded-md":"z-50 absolute left-0 bg-white w-full md:w-80 py-5 px-8 transition-all ease-in duration-500 rounded-md"}>
      <NavLink to="/" className={(navData) => (navData.isActive ? "text-primary" : '')}>
                <li className="mb-3">Home</li>
              </NavLink>
              <NavLink to="/addproduct" className={(navData) => (navData.isActive ? "text-primary" : '')}>
                <li className="mb-3">Rooms</li>
              </NavLink>
              <NavLink to="/cart" className={(navData) => (navData.isActive ? "text-primary" : '')}>
                <li className="mb-3">My Bookings</li>
              </NavLink>
              <NavLink to="/contactus" className={(navData) => (navData.isActive ? "text-primary" : '')}>
                <li className="mb-3">Contact Us</li>
              </NavLink>
    </ul>

        </div>
        
    </div>
  );
};

export default Navbar;