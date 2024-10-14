import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.pop();
    },
    clearCart(state, action) {
      state.item.length = 0;
    },
  },
});

// console.log(cartSlice);
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
