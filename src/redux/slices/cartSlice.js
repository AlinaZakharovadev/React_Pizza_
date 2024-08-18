import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, type, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].count > 1) {
          state.items[itemIndex].count -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },

    clearItem(state) {
      state.items = [];
    },

    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem, clearItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
