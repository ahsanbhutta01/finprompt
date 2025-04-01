import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLogin } from '../../redux/authSlice';
import { useGetCurrentUserQuery } from '../../redux/api';

const ProtectedRoute = () => {
   const { isAuthenticated, showLogin } = useSelector(state => state.auth);
   const dispatch = useDispatch();
   const { isLoading } = useGetCurrentUserQuery()

   useEffect(() => {
      if (!isAuthenticated && !showLogin && !isLoading) {
         dispatch(setShowLogin(true));
      }
   }, [isAuthenticated, showLogin, isLoading, dispatch]);

   if (isLoading) return null;

   return <Outlet />;
};

export default ProtectedRoute;

