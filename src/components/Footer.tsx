import React from 'react';
import ourplanetlight from '../assets/images/ourplanetlight.png'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdPhoneIphone, MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className='flex flex-row justify-around items-center py-4 min-h-[100px] bg-green-800 mt-16 font-serif'>
      <div className='flex flex-col justify-between h-[110px] w-[150px]'>
        <div className='w-[230px]'>
          <img className='w-[125px] inline-block' src={ourplanetlight} alt='Our Planet light' />
          {/* <span>Our Planet</span> */}
        </div>
        <div className='w-[250px]'>
          <p className='text-xs text-slate-100 leading-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem hic atque sit ducimus possimus at optio. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className='text-slate-100'>
        <h4 className='text-md pb-4'>Contact Info</h4>
        <div className='text-xs'>
          <address className='pb-2'>
            Address: 123 Main Street NorthWest
          </address>
          <h5 className='pb-2' ><BsFillTelephoneFill className='inline-block' /> +1800-555-1234 </h5>
          <h5 className='pb-2'><MdPhoneIphone className='inline-block' /> +1245-555-5678 </h5>
          <h5 className='pb-2'><MdEmail className='inline-block' /> contact@example.com </h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer