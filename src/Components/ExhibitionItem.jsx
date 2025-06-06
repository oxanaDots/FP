import React from 'react';

function ExhibitionItem({status = 'current'}) {
  return (
   
      <div className='flex flex-col  text-[0.7rem]' >
       
        <section className='grid border-ternary-medium h-[27rem] bg-ternary-light  gap-2  p-8 text-left justify-between items-baseline'>
         <div className='flex items-baseline justify-between'>
            <div className='row-1 text-left flex flex-col justify-between items-left py-6'>
                <p className='font-[700]'>Artist Name</p>
               <span className=' flex gap-1'>
               <p className='font-semibold italic'>Artist Name, </p>
               <p>year</p>
               </span>
                <p>Medium</p>
         </div>
         {status ==='upcoming'? <p>Jan 23</p> : 'Ends on Jan 30th'}
            </div>
            <p className=' row-3 '>Whispers of the Horizon captures a quiet moment at twilight, where the last blush of sunlight brushes over distant hills. Using a blend of warm gradients and layered textures, the piece evokes a sense of calm and subtle introspection. The silhouette of a lone figure stands in contrast with the boundless sky, inviting viewers to pause and reflect on the beauty of stillness and solitude. This digital work blends realism with impressionistic tones, making it a meditative exploration of light, space, and emotion.</p>
            <p className='row-2  self-end'>www.website.com</p>

        </section>
      </div>
   
  );
}

export default ExhibitionItem;