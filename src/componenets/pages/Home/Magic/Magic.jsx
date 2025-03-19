import React from 'react'
import fifth from '../../../../assets/fifth.png'
import star_group_1 from '../../../../assets/star_group 1.png'

const Magic = () => {
   return (
      <>
         <section
            className="relative md:h-screen h-[60vh] w-full bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50 border-t-gray-500 mt-0.5"
            style={{ backgroundImage: `url(${fifth})` }}
         >

            <div className='container mx-auto relative z-2 text-center font-[Lato] text-white'>
               <div className='relative top-30 md:top-60'>
                  <h1 className='md:text-6xl text-4xl p-4 md:p-0 font-semibold'>
                     See the Magic. Try Now!
                  </h1>
                  <button className='flex items-center justify-center mt-6 md:mt-10 text-white gap-2 bg-[#2B2B2B] rounded-3xl px-9 py-2 md:px-14 md:py-2.5 text-md md:text-2xl text-center cursor-pointer font-[Lato] mx-auto'>
                     Generate Prompts
                     <img src={star_group_1} alt="" className='size-5 md:size-7' />
                  </button>
               </div>
            </div>

         </section>
      </>
   )
}

export default Magic
