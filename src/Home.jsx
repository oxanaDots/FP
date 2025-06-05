import React from 'react';
import NavMenu from './NavMenu';
import ExhibitionItem from './Components/ExhibitionItem';
import { NavLink } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
function Home() {
  const [businesses, setBusinesses] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5001/api/businesses', {
      credentials: 'include',
      method: 'GET',
  
    })
      .then(res => res.json())
      .then(data => setBusinesses(data))
      .catch(err => console.error('Failed to load businesses:', err));
  }, []);
  return (
    <div className='flex w-full flex-col justify-center items-center'>

    <NavMenu/>

   <section className='flex flex-col  w-[50vw] h-[100vh] justify-center items-center'>
<h1 className='text-5xl py-3 font-semibold'>Main Heading</h1>
<h3 className='text-2xl py-3'>Subheading</h3>
<p className='text-sm py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

</p>
   <div>   <NavLink to='/specify_role'><button className='submit-btn'>Create an Account</button></NavLink>
   </div>
   </section>

<div className='bg-primary-medium w-[80vw] pt-10 w-full px-[10vw] flex-col justify-center flex justify-center'>
<div className=' flex justify-between  gap-10   '>
  <div className='flex flex-col justify-between w-[50vw]'>
  <div>
    <h2  className='p-5 font-semibold text-left'>Current exhibition:</h2>
    <ExhibitionItem/>
  </div>
  
   </div>
 
   <section className='flex  h-[30rem] w-full justify-between rounded-md py-6'>
         <MapContainer className='rounded-md ' style={{ height: '30rem', width: '100%'}} center={[51.505, -0.09]} zoom={15} scrollWheelZoom={true}>
     <TileLayer
      detectRetina={true}
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     <Marker position={[51.505, -0.09]}>
       <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
     </Marker>
   </MapContainer>
   <section className='flex '>
   
   
   <div>{businesses.map((item) => 
   <div className='flex '>
     <h2>{item.businessName}</h2>
     <div><h2>{item.business_type}</h2></div>
     <h2></h2>
     </div>
     )}</div>
 </section>
   </section>
   

   </div>
 
   <section className="pt-20 pb-10 w-full ">
   <h3 className='p-5 font-semibold text-left'>Explore upcoming exhibitions:</h3>
<div className=' grid grid-cols-3 scroll border-y border-ternary-medium gap-8 p-8' >
      <ExhibitionItem status='upcoming'/>
      <ExhibitionItem status='upcoming'/>
      <ExhibitionItem status='upcoming'/>
      <ExhibitionItem status='upcoming'/>
      <ExhibitionItem status='upcoming'/>
</div>

</section>
   </div>
   </div>
  );
}

export default Home;

