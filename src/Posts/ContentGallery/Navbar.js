import React from 'react';
import './Navbar.css'

export default function Navbar(props) {
     
   return(
    <>
      <div className='Nav-container'>
        <div className='Add-More'>ADD</div>
        <h1 className='nav-heading'>Content Gallery</h1>
        <div>
            <input className='Nav-search'/>
          
        </div>
       
      </div>
    </>
    )}