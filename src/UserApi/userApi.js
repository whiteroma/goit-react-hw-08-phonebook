import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      console.log("getState", getState);
      const token = getState().auth.token;
      
  
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      console.log("headers", headers);
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => 'users/current',
      invalidatesTags: ['User'],
    }),
    signUpUser: builder.mutation({
      query: user => ({
        url: `users/signup`,
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
      }),
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: 'users/login',
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
      }),
      invalidatesTags: ['User'],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST'
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useSignUpUserMutation, useLogInUserMutation, useGetUserQuery, useLogOutUserMutation } =
  userApi;
