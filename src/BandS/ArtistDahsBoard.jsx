import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
// import { UserAuthContext } from '../Forms/UserAuthContext';

// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

function ArtistDashboard() {
  // const {user}= UserAuthContext()
  delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const [businesses, setBusinesses] = useState([]);

useEffect(() => {
  fetch('http://localhost:5001/api/artist_dashboard', {
    credentials: 'include',
    method: 'GET',

  })
    .then(res => res.json())
    .then(data => setBusinesses(data))
    .catch(err => console.error('Failed to load businesses:', err));
}, []);

console.log(businesses)
  return (
    <div className='flex  items-center flex-col h-full justify-between'>
      <section className='flex  w-[80vw] justify-between py-4  border-b border-ternary-dark'>
       <div className=' '><h2 className='font-semibold text-primary-dark text-2xl'>Welcome, {}!</h2></div> 
      </section>
<div className='flex h-[30rem] w-[80%] justify-between rounded-md py-6'>
      <MapContainer className='flex justify-between rounded-md ' style={{ height: '30rem', width: '50%'}} center={[51.505, -0.09]} zoom={15} scrollWheelZoom={true}>
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
</div>
    </div>
  );
}

export default ArtistDashboard;