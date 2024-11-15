import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
      let index = -1;
      for (let i = 0; i < state.item.length; i++) {
        if (state.item[i].card.info.id === action.payload.card.info.id) {
          index = i;
          break;
        }
      }
      console.log(index);
      state.item.splice(index, 1);
    },
    clearCart(state, action) {
      state.item = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
