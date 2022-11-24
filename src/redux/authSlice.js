import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userApi } from 'UserApi/userApi';
import { toast } from 'react-toastify';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        userApi.endpoints.logInUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoggedIn = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        userApi.endpoints.signUpUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addMatcher(userApi.endpoints.signUpUser.matchRejected, () => {
        toast.error(
          'Something went wrong. Maybe this user or email is already registered.'
        );
      })
      .addMatcher(userApi.endpoints.logOutUser.matchFulfilled, (state, _) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        userApi.endpoints.getUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(userApi.endpoints.getUser.matchPending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(userApi.endpoints.getUser.matchRejected, state => {
        state.isRefreshing = false;
      });
    // .addMatcher(
    //   userApi.endpoints.updateContact.matchFulfilled,
    //   (state, { payload }) => {
    //     state.token = payload.token;
    //     state.isLoggedIn = true;
    //     state.user = payload.user;
    //   }
    // );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
