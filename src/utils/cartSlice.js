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
      state.item = [];
    },
  },
});

console.log(cartSlice);
export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;
