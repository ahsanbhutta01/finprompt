import React from 'react'
import third from '../../../../assets/third.png'

const PromptDiscription = () => {
   return (
      <>

         <section className='bg-[#F1FDF9] h-screen  w-full p-12'>
            <div className="containter mx-auto text-center">

               <div className='font-[Lato]'>
                  <h1 className='font-extrabold text-2xl md:text-4xl'>Generate AI Prompts</h1>
                  <p className='text-[#000000] font-light text-sm md:text-lg'>Turn your investments into profits</p>
               </div>
               <div
                  className="mt-6 lg:mt-10 flex items-center justify-center lg:flex-row flex-col-reverse gap-6 md:gap-12 lg:p-24 md:p-6 box-content"
               >
                  <img src={third} alt="" className='lg:size-100 md:h-80 md:w-120 size-60'/>
                  <div className='font-[Lato]'>
                     <h1 className=' text-xl md:text-4xl font-extrabold'>
                        Introducing Financial AI-Prompts Generator <br className="hidden lg:block" /> from FinPrompt AI
                     </h1>
                     <p className='text-[15px] mt-1 md:mt-4 md:text-xl lg:leading-11'>
                        Fin-prompt AI is an advanced tool designed to assist users in crafting  customized prompts related to <br className="hidden lg:block" /> financial topics. It leverages artificial intelligence to generate insights, suggestions, or tailored text for <br className="hidden lg:block" />financial scenarios, such as budgeting, investment planning,forecasting, and market analysis.
                        <span> <br/>
                        This tool is ideal for financial professionals, content creators, and businesses looking to streamline <br className="hidden lg:block" />  financial communication or gain a deeper understanding and decision-making.
                        </span>
                     </p>
                  </div>
               </div>

            </div>
         </section>

      </>
   )
}

export default PromptDiscription
