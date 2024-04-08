import React from 'react'

import imgAN1 from '../assets/img1.jpg';
import imgAN2 from '../assets/img2.jpg';
import imgAN3 from '../assets/img3.jpg';
import imgM1 from '../assets/img4M.jpg';
import imgN from '../assets/img-N.jpg';
import imgM3 from '../assets/img6M.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <SelectsCard bg={imgM1} text='Mauritius'/>
        <SelectsCard bg={imgM3} text='Madagascar'/>
        <SelectsCard bg={imgAN1} text='Lakshadweep'/>
        <SelectsCard bg={imgAN2} text='Seychelles'/>
        <SelectsCard bg={imgN} text='Comoros'/>
        <SelectsCard bg={imgAN3} text='Andaman and Nicobar'/>
      
    </div>
  )
}

export default Selects
