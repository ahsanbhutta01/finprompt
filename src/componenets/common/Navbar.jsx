import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setShowLogin } from '../../redux/authSlice'

const Navbar = () => {
   const dispatch = useDispatch()
   return (
      <nav className='container flex items-center justify-between px-4x py-4  mx-auto'>
         <div className='font-michroma text-md md:text-2xl flex items-center'>
            <h2 className='text-[#5BB0FF]'>Fin</h2>
            <h2 className='text-[#1B1B1B]'>Prompt</h2>
         </div>
         <div className="font-lato hidden md:inline space-x-6 text-xl">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
         </div>
         <div className="flex items-center space-x-3">
            {/* <Link to='/buycredit' className='font-[Lato] text-md text-[#2B2B2B] md:text-xl cursor-pointer'>
               Pricing
            </Link> */}
            <button
               className='bg-[#2B2B2B] text-[#FFFFFF] rounded-[63px] md:px-9 px-7 py-1.5 md:text-xl text-md cursor-pointer'
               onClick={()=>dispatch(setShowLogin(true))}
            >
               Login
            </button>

         </div>
      </nav>
   )
}

export default Navbar

