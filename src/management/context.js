import { createContext, useContext, useEffect, useReducer } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
};

const CartContext = createContext();

export const MyCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1");
  };

  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleQuantity = (id, type) => {
    dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
  };

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, toggleQuantity, formatNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
