import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000/api',
      credentials: "include"
   }),
   endpoints: (builder) => ({
      signup: builder.mutation({
         query: (data) => ({
            url: '/user/signup',
            method: 'POST',
            body: data
         })
      }),

      login: builder.mutation({
         query: (data) => ({
            url: '/user/login',
            method: 'POST',
            body: data
         })
      }),

      getCurrentUser: builder.query({
         query: () => '/user/current',
      }),

      logout: builder.mutation({
         query: ()=>({
            url:'/user/logout',
            method:'POST'
         })
      })
   })
})

export const { useSignupMutation, useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } = apiSlice;