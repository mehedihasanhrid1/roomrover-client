import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Testmonials from '../components/Testmonials';
import Maps from '../components/Maps';
import Newsletter from '../components/Newsletter';
AOS.init();

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Testmonials />
      <Maps/>
      <Newsletter/>
    </div>
  )
}
