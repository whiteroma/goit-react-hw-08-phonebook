import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'ContactsApi/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { formReducer } from './formSlice';
import { userApi } from 'UserApi/userApi';

export const store = configureStore({
  reducer: {
    contacts: formReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(contactsApi.middleware).concat(userApi.middleware),
    
  },
);

setupListeners(store.dispatch)