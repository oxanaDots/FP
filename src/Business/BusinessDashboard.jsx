import React from 'react';
import { UserAuthContext } from '../Forms/UserAuthContext';

function BusinessDashboard() {
    const{user}= UserAuthContext()
    console.log(user)
  return (
    <div className='flex justify-center'>
            <section className='flex  w-[80vw] justify-between py-4  border-b border-ternary-dark'>
       <div className='flex '><h2 className='font-semibold text-primary-dark text-2xl pl-4'>Welcome, {user.firstName}! </h2></div> 
      </section>
      <section className='flex'></section>
    
    </div>
  );
}

export default BusinessDashboard;