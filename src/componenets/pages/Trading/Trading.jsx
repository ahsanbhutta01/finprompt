import React, { useState } from 'react'
import menu from '../../../assets/menu.png'
import chat from '../../../assets/chat.png'
import profile_icon from '../../../assets/profile_icon 1.png'
import SideBar from './SideBar/SideBar'
import Prompt from './prompt/Prompt'

const Trading = () => {
   const [expand, setExpand] = useState(false)
   const [messages, setMessages] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   return (
      <div className='bg-[#212121]'>
         <section className='flex h-screen '>

            <SideBar expand={expand} setExpand={setExpand} />
            <aside
               className='bg-[#292a2d] flex flex-1 flex-col items-center justify-center px-4 pb-8 relative'
            >

               <div className=' absolute px-4 top-5 flex items-center justify-between w-full'>
                  <div
                     onClick={() => setExpand(!expand)}
                     className='group relative flex items-center justify-center transition-all duration-300 size-9 cursor-pointer'
                  >
                     <img
                        src={menu} alt="Menu"
                        className={`h-5 w-7 cursor-pointer z-50 absolute ${expand ? 'md:right-80   ' : ''}`}

                     />
                     <div className={`absolute w-max ${expand ? 'right-36 top-[3px] -translate-x-1/2 z-50' : 'left-12'} opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}>
                        {expand ? 'Close sidebar' : 'Open sidebar'}
                        <div className="size-3 absolute bg-black rotate-45 top-1/2 -left-2 -translate-y-1/2"></div>

                     </div>
                  </div>
                  <div className='font-[Michroma] text-md md:text-2xl flex items-center'>
                     <h2 className='text-[#5BB0FF]'>Fin</h2>
                     <h2 className='text-[#FFFFFF]'>Prompt</h2>
                  </div>
                  <img src={chat} alt="Chat" className='size-10 cursor-pointer md:hidden' />
                  <div className='hidden md:flex items-center justify-center gap-3'>
                     <p className='text-xl text-white'>Hi, ahsan@gmail</p>
                     <img src={profile_icon} alt="Profile" className='size-13' />
                  </div>

               </div>

               {/* Right Side */}
               {
                  messages.length === 0 ? (
                     <>
                        <Prompt/>                  
                     </>
                  ) : (
                     <div></div>
                  )
               }

            </aside>
         </section>
      </div>
   )
}

export default Trading
