import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Testmonials from '../components/Testmonials';
import Maps from '../components/Maps';
import Newsletter from '../components/Newsletter';
import Offer from '../components/Offer';
import Featureroom from '../components/Featureroom';
AOS.init();

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Offer/>
      <Featureroom/>
      <Testmonials />
      <Maps/>
      <Newsletter/>
    </div>
  )
}
