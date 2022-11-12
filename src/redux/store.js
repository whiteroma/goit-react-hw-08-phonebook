import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'ContactsApi/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { formReducer } from './formSlice';
import { userApi } from 'UserApi/userApi';
import { persistedReducer } from './authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: formReducer,
    auth: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(contactsApi.middleware).concat(userApi.middleware)
      
    
  },
);

export const persistor = persistStore(store);

setupListeners(store.dispatch)