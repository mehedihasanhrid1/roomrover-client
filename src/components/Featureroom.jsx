import React , {useState , useEffect} from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import axios from "axios";

const images = [
    "https://i.ibb.co/GcBfxHv/h-13.jpg",
    "https://i.ibb.co/ZSnhL9t/h-12.jpg",
    "https://i.ibb.co/SQpknV0/h-11.jpg",
    "https://i.ibb.co/rtpx2BH/h-10.jpg",
    "https://i.ibb.co/ZcdBz9h/h-1.jpg",
    "https://i.ibb.co/hXVdVhK/h-4.jpg",
    "https://i.ibb.co/fCmWKwL/h-3.jpg"
]

export default function Featureroom() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms');
        const sortedRooms = response.data.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        setRooms(sortedRooms.slice(0, 8));
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="my-6 lg:my-12">
      <div className="mx-10 mb-4 md:mb-8">
        <Marquee speed={20} pauseOnHover='true'>
            {
                images.map((image,index) => (
                    <div key={index} className="p-5 h-60 md:h-80">
                    <img
                     src={image}
                     alt={`image ${index}`}
                     className="h-full w-full rounded-xl object-cover"
                   />
                    </div>
                ))
            }

        </Marquee>
        
      </div>
      <h2 className="mb-5 md:mb-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
        Featured <span className="text-primary">Rooms</span>
      </h2>
      <div className="xl:mx-10 flex items-center justify-center flex-col md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-4 xl:gap-6">

        {rooms.map((room, index) => (
            <div data-aos="fade-right" key={index} className="hover:scale-105 duration-500 rounded-xl w-80 p-5 bg-gray-200 dark:bg-[#253246]">
              <img className="rounded-xl h-56 object-cover mb-4 md:mb-5" src={room.image} alt={`room ${index}`} />
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{room.price}/ <span className="text-lg font-medium">per night</span></h2>
                <Link to={`details/${room._id}`}> <button className='text-white px-4 text-sm md:px-4 lg:px-5 md:text-lg py-2 button-btn rounded-lg'>
                  Book Now
                </button></Link>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
