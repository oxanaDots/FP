import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
// import { UserAuthContext } from '../Forms/UserAuthContext';

// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

function ArtistDashboard() {
  // const {user}= UserAuthContext()
  delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
  return (
    <div className='flex  items-center flex-col h-full justify-center'>
      <section className='flex  w-[80vw] justify-between py-4  border-b border-ternary-dark'>
       <div className='flex '><h2 className='font-semibold text-primary-dark text-2xl'>Welcome, {}!</h2></div> 
      </section>
      <section className='flex'>
      <MapContainer style={{ height: '500px', width: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </section>
    </div>
  );
}

export default ArtistDashboard;