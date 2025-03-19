import React from 'react'
import Hero from './Hero/Hero'
import HowWorks from './HowWork/HowWorks'
import PromptDiscription from './promptDiscription/PromptDiscription'
import Testimonials from './Testimonials/Testimonials'
import Magic from './Magic/Magic'


const Home = () => {
   return (
      <>
         <Hero />
         <HowWorks />
         <PromptDiscription />
         <Testimonials />
         <Magic/>
      </>
   )
}

export default Home
