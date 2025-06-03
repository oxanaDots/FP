import React from 'react';

function ExhibitionItem() {
  return (
   
      <div className='flex flex-col  text-[0.7rem] w-[40vw]' >
        <section className='flex py-3 px-4 border-t border-b border-ternary-medium justify-between px-2  gap-8  '> 
            <div className='flex '>
                <h2 className=''>Hosted by: </h2>
                <p className='text-secondary-dark'>Host Name</p>
            </div>
            <div className='flex'>
                <h2>Date: </h2>
                <p className='text-secondary-dark'>00/00/00</p>
            </div>
            <div className='flex'>
                <h2>Location:</h2>
                <p className='text-secondary-dark'> street name, Postcode</p>
            </div>
        </section>
        <section className='grid border-ternary-medium grid-cols-[30%_70%] bg-primary-medium  gap-2  p-8 text-left justify-between items-baseline'>
            <div className=' col-1 row-1 text-left flex flex-col justify-between items-left py-6'>
                <p className='font-[700]'>Artist Name</p>
               <span className=' flex gap-1'>
               <p className='font-semibold italic'>Artist Name, </p>
               <p>year</p>
               </span>
                <p>Medium</p>
            </div>
            <p className='col-2 row-span-2  '>Whispers of the Horizon captures a quiet moment at twilight, where the last blush of sunlight brushes over distant hills. Using a blend of warm gradients and layered textures, the piece evokes a sense of calm and subtle introspection. The silhouette of a lone figure stands in contrast with the boundless sky, inviting viewers to pause and reflect on the beauty of stillness and solitude. This digital work blends realism with impressionistic tones, making it a meditative exploration of light, space, and emotion.</p>
            <p className='row-2 col-1  self-end'>www.website.com</p>

        </section>
      </div>
   
  );
}

export default ExhibitionItem;