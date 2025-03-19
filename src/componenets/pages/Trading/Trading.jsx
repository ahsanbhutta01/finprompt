import React, { useState } from 'react'
import menu from '../../../assets/menu.png'
import chat from '../../../assets/chat.png'

const Trading = () => {
   const [expand, setExpand] = useState(false)
   const [messages, setMessages] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   return (
      <div className='bg-[#212121]'>
         <section className='flex h-screen '>

            {/*left Sidebar */}
            <aside
               className='bg-[#292a2d] flex flex-1 flex-col items-center justify-center px-4 pb-8 relative'
            >

               <div className='md:hidden absolute px-4 top-5 flex items-center justify-between w-full'>
                  <img
                     src={menu} alt="Menu"
                     className='h-5 w-7 cursor-pointer'
                     onClick={() => (expand ? setExpand(false) : setExpand(true))}
                  // onClick={() => setExpand(prev => !prev)}
                  />
                  <img src={chat} alt="Chat" className='size-10 cursor-pointer' />
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
                           className="rounded-2xl border border-white relative top-5 p-4 md:w-[400px] flex items-center justify-center flex-col gap-3"
                        >

                           <div className="rounded-xl p-2 border border-white flex items-center justify-between gap-2 w-full">
                              <p className='font-[Lato] md:text-2xl text-xl text-white w-[35%]'>Investment: </p>
                              <input
                                 type="text"
                                 placeholder='Investment in $... '
                                 className='bg-[#505050] text-[#FFFFFF] md:text-xl p-1 rounded-md h-8 w-[65%] outline-none'
                              />
                           </div>
                           <div className="rounded-xl p-2 border border-white flex items-center justify-between gap-2">
                              <p className='font-[Lato] md:text-2xl text-xl text-white md:w-[45%] w-1/2'>Investment Risk: </p>
                              <input
                                 type="text"
                                 placeholder='% Risk...'
                                 className='bg-[#505050] text-[#FFFFFF] md:text-xl p-1 rounded-md h-8 md:w-[55%] w-1/2 outline-none'
                              />
                           </div>
                           <div className='flex items-center justify-between md:gap-65 gap-40 w-full'>
                              <aside className='flex flex-col text-white gap-2 bg-[#505050] w-[70%]'>
                                 <div className='flex items-center gap-2'>
                                    <input type="radio" name="future" id="future" />
                                    <label htmlFor="future" className='text-xl'>Future</label>
                                 </div>
                                 <div className='flex items-center gap-2'>
                                    <input type="radio" name="spot" id="spot" />
                                    <label htmlFor="spot" className='text-xl'>Spot</label>
                                 </div>
                              </aside>
                              <button type='submit'>
                                 Send
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
