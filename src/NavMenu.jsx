import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
function NavMenu() {
  return (
    <div className='flex justify-between w-full p-10'>
        <h2>Logo</h2>
    <nav className='flex no-underline gap-2 text-sm items-right font-normal'>

       <div className='no-underline '><NavLink to='/signup'className='no-underline bg-primary-dark px-4  text-secondary-light py-2 rounded-[20rem]'>Sign Up</NavLink></div>
       <div className='no-underline '><NavLink to='/signin'className='no-underline  px-4 text-primary-dark border border-primary-dark py-2 rounded-[20rem]'>Sign In</NavLink></div>

    </nav>
    </div>
  );
}

export default NavMenu;