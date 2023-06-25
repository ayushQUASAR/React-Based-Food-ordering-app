import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import Reducer from "./Layouts/Reducer";

const Locdata = () => {
  const localcart = JSON.parse(localStorage.getItem("cartdata"));
  if (localcart === []) {
    return [];
  }
  return localcart;
};

const initstate = {
  cart: Locdata(),
  total: 0,
  qty: 0,
};
const AddCart = createContext();
const ContextCart = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initstate);
  useEffect(() => {
    localStorage.setItem("cartdata", JSON.stringify(state.cart));
  }, [state.cart]);
  const addtocart = (name, txt, price, src) => {
    dispatch({ type: "add-to-cart", payload: { name, txt, price, src } });
  };
  return (
    <AddCart.Provider value={{ ...state, addtocart }}>
      {children}
    </AddCart.Provider>
  );
};
const useCartContext = () => {
  return useContext(AddCart);
};
export { useCartContext, ContextCart };
