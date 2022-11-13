import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com/';

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

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
