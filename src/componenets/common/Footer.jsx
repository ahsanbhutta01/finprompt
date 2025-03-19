import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'


const Footer = () => {
   return (
      <footer className='bg-[#323232] '>
         <section className="flex container mx-auto px-4 py-4 items-center justify-between  lg:gap-12 md:gap-6 gap-2 lg:flex-row flex-col ">

            <div className='font-[Michroma] text-md md:text-2xl flex items-center'>
               <h2 className='text-[#5BB0FF]'>Fin</h2>
               <h2 className='text-[#FFFFFF]'>Prompt</h2>
            </div>

            {/* For md and upward screens */}
            <div className="hidden md:inline font-[Lato]">
               <h2 className='font-semibold text-[#FFFFFF] text-2xl text-center'>
                  About Us
               </h2>
               <p className='text-[#FFFFFF] mt-1'>
                  Welcome to our prompt generator website, your go-to platform for generating creative <br className='md:hidden lg:block' /> and insightful prompts tailored to trading and investments. We aim to empower traders <br className='md:hidden lg:block' />and investors by providing actionable ideas that inspire smarter decisions and strategic thinking.
               </p>
            </div>

            {/* for mobile */}
            <div className='md:hidden flex flex-col text-white w-full text-center'>
               <a href="#"
                  className=' active:underline transition-all duration-300 active:bg-white active:text-black block p-0.5 active:rounded-md'
               >
                  Home
               </a>
               <a href="#"
                  className=' active:underline transition-all duration-300 active:bg-white active:text-black block p-0.5 active:rounded-md'
               >
                  About
               </a>
               <a href="#"
                  className=' active:underline transition-all duration-300 active:bg-white active:text-black block p-0.5 active:rounded-md'
               >
                  Contact
               </a>
            </div>
            {/* Social media for mobile version */}
            <div className="md:hidden flex items-center justify-center gap-4 text-white">
               <FaFacebookF className='size-5 active:bg-white transition-all decoration-neutral-300 active:text-black active:p-2 rounded-sm' />
               <FaLinkedinIn className='size-5 active:bg-white transition-all decoration-neutral-300 active:text-black active:p-2 rounded-sm' />
               <FaTwitter className='size-5 active:bg-white transition-all decoration-neutral-300 active:text-black active:p-2 rounded-sm' />
            </div>

            <div className="font-[Lato]">
               <p className='text-xs md:text-lg text-[#FFFFFF] '>
                  Subscribe to our newsletter to receive the latest updates, news, and offers!
               </p>
               <div className="flex gap-1">
                  <input
                     type="text"
                     placeholder='Enter your email...'
                     className='bg-[#D9D9D9] text-[#646464] md:p-3 p-2 rounded-md lg:w-[80%] w-[70%]'
                  />
                  <button className='bg-[#5BB0FF] text-[#FFFFFF] lg:w-[30%] w-[30%] rounded-md active:bg-blue-600 transition-all duration-300 cursor-pointer'>
                     Subscribe
                  </button>
               </div>
            </div>

         </section>

         <section className='border border-t-[#FFFFFF] '></section>

         <section className='flex justify-between gap-12 md:p-2 px-2 items-center container mx-auto'>

            <div className="flex md:gap-3 gap-2 text-[#FFFFFF] font-[Inter] font-extralight md:text-lg text-xs">
               <a href="#">Privacy Ploicy</a>
               <a href="#">Terms of Services</a>
            </div>

            <p className='text-white text-xs md:text-lg'>
               &copy;<span className='text-[#5BB0FF] font-[Michorma]'>Fin</span><span className='text-[#FFFFFF] font-[Michorma]'>Prompt</span> | Alright Reserved

            </p>

            {/* Social media icon above of md screen */}
            <div className="hidden md:flex  items-center justify-center gap-6 text-white">
               <FaFacebookF className='size-6 active:bg-white transition-all decoration-neutral-300 active:text-black active:p-2 rounded-sm cursor-pointer' />
               <FaLinkedinIn className='size-6 active:bg-white transition-all decoration-neutral-300 active:text-black active:p-2 rounded-sm cursor-pointer' />
               <FaTwitter className='size-6 active:bg-white transition-all decoration-neutral-300 active:text-black active:p-2 rounded-sm cursor-pointer' />
            </div>
         </section>
      </footer>
   )
}

export default Footer
