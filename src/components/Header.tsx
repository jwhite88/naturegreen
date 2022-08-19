import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PopUpFloater from '../elements/PopUpFloater';
import PopupModal from '../elements/PopupModal'
import ourplanet from '../assets/images/ourplanet.png'


function Header() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <header className="  " >
      <div className="h-[70px] flex flex-row justify-between content-center flex-wrap px-7 text-lg text-gray-900 font-serif " >
        <div className=""> 
        <img className='h-[40px]' src={ourplanet} alt="Our Planet description" /> 
        </div>
        <div>
          <div className="pt-2">
            <ul className='list-none'>
              <li className='inline-block pr-10'><Link to="/">Home</Link></li>
              <li className='inline-block pr-10'><Link to="about" >About</Link></li>
              <li className='inline-block pr-10'>Project</li>
              <li className='inline-block pr-10'>Pages</li>
              <li className='inline-block pr-10'>Contact</li>
              {/* <li id="modal" className='inline-block pr-10'><PopupModal /></li> */}
              <li className='inline-block pr-10 '><PopUpFloater /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header