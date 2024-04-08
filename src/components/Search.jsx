import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Indulge in the ultimate romantic getaway with luxury-included
            vacations for two amidst the stunning Indian Ocean beaches. Picture
            yourselves basking in the golden sun, toes sinking into powdery
            sands, and gentle waves lulling you into relaxation. From the
            pristine shores of the Maldives to the exotic allure of Mauritius,
            these paradisiacal destinations offer a blend of opulent
            accommodations, world-class dining, and unparalleled natural beauty.
            Whether you're strolling hand in hand along the shoreline, embarking
            on thrilling water adventures, or simply unwinding with a spa
            retreat, every moment promises to be a cherished memory in this
            idyllic setting. Discover serenity and splendor as you escape to the
            enchanting Indian Ocean, where luxury and romance intertwine for an
            unforgettable escape for two.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50}/>
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Andaman and Nicobar</option>
                    <option>Lakshadweep</option>
                    <option>Mauritius</option>
                    <option>Madagascar</option>
                </select>
            </div>
            <div className='flex flex-col my-4'>
                <label>Check-In</label>
                <input type="date" className='border rounded-md p-2'/>
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input type="date" className='border rounded-md p-2'/>
            </div>
            <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
}

export default Search
