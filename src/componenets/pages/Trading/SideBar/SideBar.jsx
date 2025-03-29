import React, { useState } from 'react'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import profile_icon from '../../../../assets/profile_icon 1.png'


const SideBar = ({ expand, setExpand }) => {
   const [setting, setSetting] = useState(false)
   return (
      <>
         <div className={`flex relative flex-col justify-between bg-[#212327] pt-2 md:pt-7 transition-all z-50 max-md:absolute max-md:h-screen  ${expand ? 'p-4 w-64 md:w-80' : ' w-0 max-md:overflow-hidden'}`}>

            <div className='ml-1'>
               <button className={`mt-15 flex items-center text-xl justify-center cursor-pointer ${expand ? 'bg-[#5BB0FF] text-white hover:opacity-90 rounded-xl gap-2 p-1 px-3 w-max' : 'group relative size-5 mx-auto rounded-lg'}`}>

                  {
                     expand ? (
                        <span className='text-3xl'>+</span>
                     ) : (
                        <HiOutlineChatBubbleLeftRight className='size-10 absolute left-[12px] text-white hidden md:block' />

                     )
                  }
                  <div
                     className='absolute w-max -top-2 left-15 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none
                  '>
                     New Chat
                  </div>
                  {expand && <p className='text-white font-medium'>New Chat</p>}
               </button>

               <div className={`mt-8 text-white text-sm ${expand ? 'block' : 'hidden'}`}>
                  <p className='text-white text-xl'>Recents</p>
                  {/* Chat Label */}
               </div>
            </div>
            <div className={` md:hidden flex items-center gap-1 ${expand ? 'hover:bg-white/10 rounded-lg' : 'justify-center w-full'} p-1 cursor-pointer`} onClick={() => setSetting(!setting)}>
               <img
                  src={profile_icon}
                  alt=""
                  className='size-10'
                  
               />
               {expand && <span className='text-white'>Username</span>}
            </div>

            {/* For mobile screen setting */}
            {
               setting && (
                  <div
                     className="transition-all duration-300 bg-white w-50 text-center rounded-2xl md:hidden absolute bottom-16  z-51"
                  >
                     <p className='text-lg cursor-pointer w-50 active:bg-gray-300  py-2.5 rounded-t-2xl transition-all duration-500'>
                        Setting
                     </p>
                     <div className='w-50 border-b border-b-[#9A9A9A]'></div>
                     <button className='text-md bg-[#645c5c] text-white py-1.5 px-6 text-center rounded-[63px] mt-2 mb-2 cursor-pointer active:bg-black transition-all duration-500'>
                        Logout
                     </button>
                  </div>
               )
            }
         </div>
      </>

   )
}

export default SideBar
