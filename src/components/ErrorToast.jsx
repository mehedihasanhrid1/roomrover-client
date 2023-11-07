import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ErrorToast = ({ message, onClose , duration }) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        let timer;
        const interval = 50;
        const steps = duration / interval;
    
        const updateProgress = () => {
          setProgress((prevProgress) => prevProgress - (100 / steps));
        };
    
        timer = setInterval(updateProgress, interval);
    
        return () => {
          clearInterval(timer);
        };
      }, [duration]);

  return (
    <div className={`fixed top-3 text-lg right-5 p-5 text-gray-800 bg-gray-300  rounded-md transition-transform transform translate-y-0`}>
      <div className='flex items-center justify-center gap-5'>
      <div className='flex flex-col items-start gap-1'>
      <p>{message}</p>
      <div className="h-2 w-full rounded-lg bg-red-300 relative">
        <div
          className="h-full bg-red-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      </div>
      <button onClick={() => onClose(false)} className="text-xl text-red-500"><FaTimes/></button>
      </div>
    </div>
  );
};

export default ErrorToast;
