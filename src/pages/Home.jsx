import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Testmonials from '../components/Testmonials';
AOS.init();

export default function Home() {
  return (
    <div>
      <Testmonials />
    </div>
  )
}
