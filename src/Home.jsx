import React from 'react';
import NavMenu from './NavMenu';
import ExhibitionItem from './Components/ExhibitionItem';

function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>

    <NavMenu/>

   <section className='flex flex-col  w-[50vw] h-[100vh] justify-center items-center'>
<h1 className='text-5xl py-3 font-semibold'>Main Heading</h1>
<h3 className='text-2xl py-3'>Subheading</h3>
<p className='text-sm py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

</p>
   <div>   <button className='submit-btn'>Create an Account</button>
   </div>
   </section>

   <section className=' pt-5 pb-10 bg-ternary-light w-full items-center flex flex-col justify-center'>
    <h3 className='p-10 font-semibold text-left'>Explore local exhibitions:</h3>
    <div className=' flex flex-col  h-[100vh] overflow-y-scroll gap-16 p-8' >
          <ExhibitionItem/>
          <ExhibitionItem/>
          <ExhibitionItem/>
          <ExhibitionItem/>
          <ExhibitionItem/>
    </div>
  
   </section>
   </div>
  );
}

export default Home;