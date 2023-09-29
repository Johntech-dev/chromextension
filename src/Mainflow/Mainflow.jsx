import React from 'react'
import { useState } from 'react';
import AddtoChromeButton from './AddtoChromeButton'
import './main.css'
function Mainflow() {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
        <hr />
      <div className='header'>
        <img src='icon.png' />
        <h2 className='help'>HelpMeOut</h2>
        <AddtoChromeButton />
      </div>
       <div className='Header-information1'>
       <img className='header-icon' src='verify.png' />
       <a className='header-link' href='helpmeout.com'>Helpmeout.com</a>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='header-icon2'>
  <path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" stroke="#0E75C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.51999 13.5201L7.51001 20.9001C7.51001 21.8001 8.14001 22.2401 8.92001 21.8701L11.6 20.6001C11.82 20.4901 12.19 20.4901 12.41 20.6001L15.1 21.8701C15.87 22.2301 16.51 21.8001 16.51 20.9001V13.3401" stroke="#0E75C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       <p className='header-text'>Featured</p>
   </div>
   <div className='header-rating'>
       <img className='header-icon3' src='Frame 369.png'/>
       <p className='text-information'>252</p>
       <img className='header-icon' src='info-circle.png' />
       <div className='border'></div>
       <p className='text-information1'>Productivity</p>
       <div className='border'></div>
       <p className='text-information'>80,000+ users</p>
   </div>
   <div className='Mainflow-nav'>
     <p className='nav'>Overview</p>
     <p className='nav2'>privacy practices</p>
     <p className='nav2'>Review</p>
     <p className='nav2'>Related</p>
     </div>
     <div className='overview'>
     <img className='arrowicon' src='arrow 1.png' />
     <img className='imagesize' src='fullpicture.png' />
     <img className='arrowicon' src='arrow 2.png' />
     </div>
   </div>
  )
}

export default Mainflow
