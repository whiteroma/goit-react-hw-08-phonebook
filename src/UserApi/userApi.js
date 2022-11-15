import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com/users';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery,
  // refetchOnMountOrArgChange: true,
  tagTypes: ['Users'],

  endpoints: builder => ({
    getUser: builder.query({
      query: () => '/current',
      providesTags: ['Users'],
    }),

    signUpUser: builder.mutation({
      query: newUser => ({
        url: '/signup',
        method: 'POST',
        body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['Users'],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = userApi;
