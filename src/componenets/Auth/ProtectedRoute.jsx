import React from 'react';
import {Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLogin } from '../../redux/authSlice';

const ProtectedRoute = () => {
   const { showLogin } = useSelector(state => state.auth); 
   const user = true  
   const dispatch = useDispatch();

   if (!user && !showLogin) {
      dispatch(setShowLogin(true)); 
      return null; 
   }

   return <Outlet />; 
};

export default ProtectedRoute;

