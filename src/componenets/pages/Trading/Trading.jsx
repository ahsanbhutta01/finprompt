import React, { useState } from 'react'
import menu from '../../../assets/menu.png'
import chat from '../../../assets/chat.png'
import star_icon from '../../../assets/star_group 1.png'
import profile_icon from '../../../assets/profile_icon 1.png'
import SideBar from './SideBar/SideBar'

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
                                       id="future" className='accent-blue-500' />
                                    <label htmlFor="future" className='cursor-pointer'>Future</label>
                                 </div>
                                 <div className='flex items-center gap-2'>
                                    <input
                                       type="radio"
                                       name="spot"
                                       id="spot" required
                                       className='accent-blue-500'
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
