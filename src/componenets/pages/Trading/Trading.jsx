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

            {/* Sidebar */}
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
               {
                  messages.length === 0 ? (
                     <>
                        <div>
                           <p className='font-lobster text-white md:text-5xl text-3xl'>
                              Invest in Crypto Currency
                           </p>
                        </div>
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
