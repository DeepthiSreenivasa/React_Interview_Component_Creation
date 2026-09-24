import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      if (!state[action.payload.id]) {
        state[action.payload.id] = [action.payload];
      } else {
        state[action.payload.id].push(action.payload);
      }
      console.log("State::", state);
      return state;
    },

    removeItem: (state, payload) => {
      return state;
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
