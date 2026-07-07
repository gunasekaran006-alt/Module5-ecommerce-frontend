import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      // API-ல் இருந்து வரும் யூசர் தகவலைச் சேமிக்க
      state.user = action.payload; 
      state.isAuthenticated = true;
      localStorage.setItem('token', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;