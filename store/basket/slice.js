import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload;
      if (!state.items[productId]) {
        state.items[productId] = 1;
      } else {
        state.items[productId] += 1;
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      delete state.items[productId];
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
