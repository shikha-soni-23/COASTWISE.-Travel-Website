import React from 'react'

import imgAN1 from '../assets/img1.jpg';
import imgAN2 from '../assets/img2.jpg';
import imgAN3 from '../assets/img3.jpg';
import imgM1 from '../assets/img4M.jpg';
import imgN from '../assets/img-N.jpg';

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>On the Indian Ocean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={imgAN1} alt="/" />
        <img className='w-full h-full object-cover' src={imgAN2} alt="/" />
        <img className='w-full h-full object-cover' src={imgAN3} alt="/" />
        <img className='w-full h-full object-cover' src={imgM1} alt="/" />
        <img className='w-full h-full object-cover' src={imgN} alt="/" />
      </div>
    </div>
  )
}

export default Destination
