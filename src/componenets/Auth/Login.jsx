import React, { useState } from 'react'
import user from '../../assets/user.png'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import google from '../../assets/google.png'
import { useDispatch } from 'react-redux'
import { setShowLogin, setUser } from '../../redux/authSlice'
import cross from '../../assets/cross.png'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useSignupMutation } from '../../redux/api'

const Login = () => {
   const [state, setState] = useState("Login");
   const dispatch = useDispatch()
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
   });
   const navigate = useNavigate()
   const [signup] = useSignupMutation();
   const [login] = useLoginMutation();

   function handleChange(e) {
      const { name, value } = e.target;
      setFormData((preData) => ({ ...preData, [name]: value }))

   }

   async function handleSubmit(e) {
      e.preventDefault();
      const { email, password } = formData;

      try {
         if (state === 'Login') {
            const response = await login({ email, password }).unwrap();
            if (response.success) {
               dispatch(setUser(response.name))
               navigate('/trading')
               dispatch(setShowLogin(false))
            }
         } else {

            const response = await signup(formData ).unwrap();
            if (response.success) {
               dispatch(setUser(response.name))
               navigate('/trading')
               dispatch(setShowLogin(false))
            }

         }
      } catch (error) {

      }

   }


   return (
      <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-xs bg-black/30 flex justify-center items-center'>
         <form
            onSubmit={handleSubmit}
            className='relative bg-white md:px-10 py-10 px-6  rounded-xl text-slate-500 md:w-[30rem] w-[22rem] text-center font-[Actor]'
         >
            <h1 className='text-center text-2xl md:text-4xl font-[Actor text-[#000000] font-bold '>
               {state}
            </h1>
            <p className='text-sm md:text-lg'>Welcome to FinPrompt AI</p>
            {/* if user want to register then show full name field */}
            {
               state !== 'Login' &&
               <section className='border px-5 py-2 flex items-center  gap-2 rounded-full mt-4'>
                  <img src={user} alt="fullname" className='md:size-6 size-5' />
                  <input type="text" placeholder='Full Name' required className='outline-none text-sm md:text-lg' name='name' value={formData.name} onChange={handleChange} />
               </section>
            }

            <section className='border px-5 py-2 flex items-center gap-3 rounded-full mt-4'>
               <img src={email} alt="email" className='md:size-6 size-5' />
               <input type="email" placeholder='Email' required className='outline-none text-sm md:text-lg' name='email' value={formData.email} onChange={handleChange} />
            </section>
            <section className='border px-4 py-1 flex items-center gap-1 rounded-full mt-4'>
               <img src={lock} alt="" className='size-7.5 md:size-9 ' />
               <input type="password" placeholder='Password' required className='outline-none text-sm md:text-lg' name='password' value={formData.password} onChange={handleChange} />
            </section>
            <button className='bg-blue-600 w-[70%] mt-5 text-white py-2 rounded-full md:text-xl cursor-pointer'>
               {state === 'Login' ? 'Login' : 'Create account'}
            </button>
            {
               state === 'Login' && <p className='text-sm md:text-lg text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
            }

            {
               state === 'Login' ?
                  <p className='text-center md:text-lg'>
                     Don't have an account?&nbsp;
                     <span className='text-blue-600 cursor-pointer' onClick={() => setState("Sign up")}>Sign up</span>
                  </p>
                  :
                  <p className='mt-5 text-center md:text-lg'>
                     Already have an account?&nbsp;
                     <span className='text-blue-600 cursor-pointer underline' onClick={() => setState("Login")}>Login</span>
                  </p>
            }

            <h1 className='text-[#000000] mt-1 md:text-xl'>
               ------------------ OR -------------------
            </h1>
            <button className='flex items-center mx-auto border rounded-3xl py-1 px-4 md:px-7 md:py-2 md:w-[70%] gap-3 mt-4 cursor-pointer md:text-lg'>
               <img src={google} alt="" className='size-6' />
               <span>Continue with Google</span>
            </button>


            <button type='button'>
               <img
                  onClick={() => dispatch(setShowLogin(false))}
                  src={cross} alt="" className='absolute md:top-6 md:right-6 top-5 right-5 cursor-pointer size-5 md:size-6'
               />
            </button>
         </form>
      </div>
   )
}

export default Login


