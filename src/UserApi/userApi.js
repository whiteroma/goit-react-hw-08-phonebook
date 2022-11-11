import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => 'current',
      providesTags: ['Contact'],
    }),
    signUpUser: builder.mutation({
      query: user => ({
        url: `signup`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: 'login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useSignUpUserMutation, useLogInUserMutation, useGetUserQuery } =
  userApi;
