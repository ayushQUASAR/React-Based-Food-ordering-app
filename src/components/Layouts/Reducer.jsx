// import React from "react";

const Reducer = (state, action) => {
  if (action.type === "add-to-cart") {
    // console.log(action.payload)
    const { name, txt, price,src } = action.payload;
    const cont = {
      name,
      txt,
      price,
      src,
      
    };
    console.log(src)

    return {
      ...state,
      cart: [...state.cart, cont],
    };
  }
  return state;
};

export default Reducer;
