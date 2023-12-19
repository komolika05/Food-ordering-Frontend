import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const dish = action.payload;
      const existingItem = state.items.find((item) => item.name === dish.name);

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({ ...dish, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const dish = action.payload;
      const existingItem = state.items.find((i) => i.name === dish.name);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((i) => i.name !== dish.name);
        } else {
          existingItem.quantity = existingItem.quantity - 1;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
