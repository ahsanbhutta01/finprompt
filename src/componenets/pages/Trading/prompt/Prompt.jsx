import React from 'react'
import star_icon from '../../../../assets/star_group 1.png'

const Prompt = () => {
   return (
      <>
         <div>
            <p className='font-lobster text-white md:text-5xl text-3xl'>
               Invest in Crypto Currency
            </p>
         </div>
         <form
            className="rounded-2xl border border-white relative top-5 px-5 py-7 md:w-[450px] flex items-start justify-center flex-col gap-3"
         >

            <div className="rounded-xl p-2 border border-white flex items-center justify-between gap-2 w-full">
               <p className='font-[Lato] md:text-2xl text-xl text-white w-[40%]'>Investment: </p>
               <input
                  type="number"
                  placeholder='Investment in $... '
                  required
                  className='bg-[#505050] text-[#FFFFFF] md:text-xl p-1 rounded-md h-8 w-[60%] outline-none'
               />
            </div>
            <div className="rounded-xl p-2 border border-white flex items-center justify-between gap-2">
               <p className='font-[Lato] md:text-2xl text-xl text-white md:w-[45%] w-1/2'>Investment Risk: </p>
               <input
                  type="number"
                  placeholder='% Risk...'
                  required
                  className='bg-[#505050] text-[#FFFFFF] md:text-xl p-1 rounded-md h-8 md:w-[55%] w-1/2 outline-none'
               />
            </div>
            <div className='flex items-center justify-center md:gap-30 gap-10 w-full '>
               <aside className='flex flex-col text-white gap-1 bg-[#505050] px-4 w-[60%] rounded-xl text-lg md:text-2xl'>
                  <div className='flex items-center gap-2'>
                     <input
                        type="radio"
                        required
                        name="future"
                        id="future" className='accent-blue-500 size-5' />
                     <label htmlFor="future" className='cursor-pointer'>Future</label>
                  </div>
                  <div className='flex items-center gap-2'>
                     <input
                        type="radio"
                        name="spot"
                        id="spot" required
                        className='accent-blue-500 size-5'
                     />
                     <label htmlFor="spot" className='cursor-pointer'>Spot</label>
                  </div>
               </aside>
               <button type='submit' className='w-[40%] bg-[#5BB0FF] h-12 md:h-12 flex items-center justify-center px-5 text-white text-xl md:text-2xl gap-2 rounded-3xl cursor-pointer'>
                  Send
                  <img src={star_icon} alt="" className='size-7 md:size-8' />
               </button>
            </div>
         </form>
      </>
   )
}

export default Prompt;
