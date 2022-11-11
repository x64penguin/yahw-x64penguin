export const selectCart = (state) => state.cart;

export const selectCartBook = (state, bookid) => selectCart(state).cart[bookid] || 0;