import React from 'react'
import first from '../../../../assets/first.png'
import star_icon_1 from '../../../../assets/star_icon 1.png'
import star_group_1 from '../../../../assets/star_group 1.png'

const Hero = () => {
   return (
      <>
         <section
            className="relative h-[70vh] md:h-[100vh] w-full bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50" style={{ backgroundImage: `url(${first})` }}
         >

            <div
               className='flex items-center justify-center flex-col relative top-20 md:top-38 opacity-200'
            >

               <p
                  className='flex items-center justify-center gap-3   text-[#2B2B2B] bg-white rounded-2xl px-4 py-1 md:px-10 font-[Lato] text-sm md:text-xl'
               >
                  Best Prompt Generator for Finance
                  <span>
                     <img src={star_icon_1} alt="" className='size-4 md:size-5' />
                  </span>
               </p>
               <div className="flex mt-7 font-[Michorma] font-light text-4xl md:text-8xl">
                  <h1 className='text-[#FFFFFF]'>FIN</h1>&nbsp;
                  <h1 className='text-[#5BB0FF]'>PROMPT AI</h1>
               </div>
               <div className="flex flex-col text-[#FFFFFF] font-[Lato] font-extralight text-xs mt-2 md:text-xl">
                  <p>Invest in Crypto Currency - Get your Financial prompts</p>
                  <p className='mx-auto'>from Fin Prompt AI.</p>
               </div>
               <button className='flex items-center justify-center mt-4 md:mt-6 text-white gap-2 bg-[#2B2B2B] rounded-2xl px-6 py-1.5 text-sm md:text-xl text-center cursor-pointer font-[Lato]'>
                  Generate Prompts
                  <img src={star_group_1} alt="" className='size-5 md:size-7' />
               </button>
               <div className='text-[#FFFFFF] grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-20 text-center mt-10 md:mt-16 font-[Lato] md:text-xl min-w-[120px]'>
                  <p className='bg-transparent border rounded-2xl md:w-auto w-[150px]'>Trading Ideas</p>
                  <p className='bg-transparent border rounded-2xl md:px-7 px-4'>Investment Insights</p>
                  <p className="col-span-2 md:col-span-1 bg-transparent border rounded-2xl w-[160px] md:w-auto mt-5 md:mt-0 mx-auto md:mx-0">Market Trends</p>
               </div>

            </div>

         </section>
      </>
   )
}

export default Hero
