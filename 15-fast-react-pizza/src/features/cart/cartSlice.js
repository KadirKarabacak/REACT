import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      // If quantity is 0, then delete the item
      // if (item.quantity <= 0) {
      //   state.cart = state.cart.filter(
      //     (item) => item.pizzaId !== action.payload,
      //   );
      // }

      // Or we can call our another action creator works as same
      if (item.quantity <= 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

//! SELECTOR FUNCTIONS (To optimize performance can use "reselect" library)
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

/**
 * @param {id} id Takes id as parameter
 * @returns 1 | 0
 * 1) Finding which item.pizzaId === id
 * 2) And if it exists, then take quantity
 * 3) if not return 0
 */
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
