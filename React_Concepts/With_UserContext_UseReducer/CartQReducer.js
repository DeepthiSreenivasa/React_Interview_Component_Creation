const CartQReducer = (state, action) => {
  console.log("Reducer called", action);
  switch (action.type) {
    case "ADD_ITEMS": {
      console.log("Into ADD_ITEM");
      return { ...state, quantity: state.quantity + 1 };
    }

    case "REMOVE_ITEMS": {
      return { ...state, quantity: state.quantity - 1 };
    }

    default:
      return state;
  }
};

export default CartQReducer;
