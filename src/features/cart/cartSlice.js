import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId
      );

      // If item exist in cart, increment quantity
      if (item) {
        item.quantity++;
        return;
      }
      // else add item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload in id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // Payload is item id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * (item.quantity || 1);
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;

      // if quantity reaches 0, remove item from cart
      if (item.quantity === 0)
        state.cart = state.cart.filter(
          (cartItem) => cartItem.pizzaId !== item.pizzaId
        );

      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },

  extraReducers: {},
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;

export const getCartQuantity = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCartItem = (id) => (store) =>
  store.cart.cart.find((item) => item.pizzaId === id);
