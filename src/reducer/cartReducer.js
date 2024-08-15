const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
          const updatedCart = state.cart.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          const updatedTotalAmount = updatedCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
          const updatedTotalItems = updatedCart.reduce(
            (total, item) => total + item.quantity,
            0
          );
          return { ...state, cart: updatedCart, totalAmount: updatedTotalAmount, totalItems: updatedTotalItems };
        } else {
          const newItem = { ...action.payload, quantity: 1 };
          const newCart = [...state.cart, newItem];
          const newTotalAmount = newCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
          const newTotalItems = newCart.reduce(
            (total, item) => total + item.quantity,
            0
          );
          return { ...state, cart: newCart, totalAmount: newTotalAmount, totalItems: newTotalItems };
        }
  
      case 'REMOVE_ITEM':
        const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
        const filteredTotalAmount = filteredCart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const filteredTotalItems = filteredCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return { ...state, cart: filteredCart, totalAmount: filteredTotalAmount, totalItems: filteredTotalItems };
  
      case 'INCREMENT_ITEM':
        const incrementedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const incrementedTotalAmount = incrementedCart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const incrementedTotalItems = incrementedCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return { ...state, cart: incrementedCart, totalAmount: incrementedTotalAmount, totalItems: incrementedTotalItems };
  
      case 'DECREMENT_ITEM':
        const decrementedCart = state.cart
          .map(item =>
            item.id === action.payload.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0); // Remove items with quantity 0
  
        const decrementedTotalAmount = decrementedCart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const decrementedTotalItems = decrementedCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return { ...state, cart: decrementedCart, totalAmount: decrementedTotalAmount, totalItems: decrementedTotalItems };
  
      case 'CLEAR_CART':
        return { ...state, cart: [], totalAmount: 0, totalItems: 0 };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  