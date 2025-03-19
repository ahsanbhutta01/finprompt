import React from 'react'
import fourth from '../../../../assets/fourth.png'
import testimonials from '../../../../assets/testimonials.js'
import star from '../../../../assets/star.png'
import icon from '../../../../assets/icon.png'

const Testimonials = () => {
   return (
      <>

         <section
            className="relative h-screen w-full bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-40 border-t-gray-500 mt-0.4"
            style={{ backgroundImage: `url(${fourth})` }}
         >

            <div className=" container mx-auto font-[Lato] text-white text-center relative top-8 md:top-20">
               <h1 className='font-extrabold text-xl md:text-3xl'>Customer Testimonials</h1>
               <p className='text-xs md:text-lg'>
                  What our users are saying about us
               </p>
            </div>

            <div className="container relative z-2 mx-auto mt-15 md:mt-35 grid md:grid-cols-3 grid-cols-2 p-2 lg:p-5 gap-3 md:gap-14">

               {
                  testimonials.map((info, i) => (
                     <div
                        className={`bg-white h-70 w-45 md:h-110 md:w-65 lg:w-80 flex items-center flex-col pt-2 gap-1 lg:gap-3 rounded-2xl } ${ i === 2 ? "col-span-2 mx-auto md:col-span-1 md:mx-0" : ""}`}
                        key={i}
                     >
                        <img src={info.image} alt="" className='size-13 md:size-20 rounded-[50%]' />
                        <h3 className='text-sm md:text-xl font-bold'>{info.name}</h3>
                        <p className='text-xs md:text-lg'>{info.profession} </p>
                        <div className="flex gap-2">
                           {
                              Array.from({ length: 5 }, (_, i) => (
                                 <img src={star} key={i} className='size-5 lg:size-7' />
                              ))
                           }
                        </div>
                        <div className='px-0.5'>
                           <p className='text-xs md:text-[15px] flex gap-[2px] md:leading-7'>
                              <img src={icon} alt="" className='size-3 relative bottom-1 md:size-5 ' />
                              {info.comment}
                           </p>
                        </div>

                     </div>
                  ))
               }

            </div>
         </section>

      </>
   )
}
export default Testimonials


// 