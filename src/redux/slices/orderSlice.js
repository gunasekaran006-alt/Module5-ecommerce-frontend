import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: { items: [], loading: false },
  reducers: {
    setOrders: (state, action) => { state.items = action.payload; },
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;