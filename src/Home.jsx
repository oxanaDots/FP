import React from 'react';
import NavMenu from './NavMenu';

function Home() {
  return (
    <div className='flex flex-col w-[80vw] justify-center items-center'>

    <NavMenu/>

   <section className='flex flex-col pt-20 w-[50vw] justify-center'>
<h1 className='text-5xl py-3 font-semibold'>Main Heading</h1>
<h3 className='text-2xl py-3'>Subheading</h3>
<p className='text-sm py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

</p>
   </section>
   <div>   <button className='submit-btn'>Create an Account</button>
   </div>
   <section>
    
   </section>
   </div>
  );
}

export default Home;