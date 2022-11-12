import { createSlice } from '@reduxjs/toolkit';
import { userApi } from 'UserApi/userApi';

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

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
