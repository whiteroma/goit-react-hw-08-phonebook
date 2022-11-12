import { createSlice } from '@reduxjs/toolkit';
import { userApi } from 'UserApi/userApi';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.logInUser.matchFulfilled,
      (state, { payload: token, user }) => {
        state.token = token;
        state.user = user;
        state.isLoggedIn = true;
      }
    ).addMatcher(
      userApi.endpoints.signUpUser.matchFulfilled,
      (state, { payload: token, user }) => {
        state.token = token;
        state.user = user;
        state.isLoggedIn = true;
      }
    ).addMatcher(
      userApi.endpoints.logOutUser.matchFulfilled,
      (state, { payload: token, user }) => {
        state.token = token;
        state.user = user;
        state.isLoggedIn = false;
      }
    ).addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, { payload: token, user }) => {
        state.token = token;
        state.user = user;
        state.isLoggedIn = true;
      }
    );
  },
});

const persistConfig = {
  key: 'root',
  storage,
}
export const persistedReducer = persistReducer(persistConfig, authSlice.reducer)
 
export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
