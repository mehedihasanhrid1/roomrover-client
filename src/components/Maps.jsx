import React from 'react';
export default function Maps() {
  return (
    <div className='py-8 lg:py-16'  data-aos="flip-right">
        <h2 className="mb-5 lg:mb-10 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center">
            See Our <span className="text-primary">Location</span>
          </h2>
        <div className="mapouter mx-5 md:mx-10 lg:mx-14 pb-3 lg:pb-0"><div className="gmap_canvas"><iframe width="100%" className='h-96 lg:h-[30rem]' id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1699411927627!5m2!1sen!2sbd"></iframe></div></div>
    </div>
  )
}

