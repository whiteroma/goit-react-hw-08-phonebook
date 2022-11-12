import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false },
  setCredentials: (state, { payload: { user, token } }) => {
    state.user = user;
    state.token = token;
    state.isLoggedIn = true;
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
